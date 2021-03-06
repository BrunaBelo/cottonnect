import react, { useEffect, useState } from 'react'
import { Tooltip } from '@material-ui/core'
import { Actions, CoinIcon, Container, Content, Header, SeeDetails, StatusIndicator } from './styles'
import { Auction } from '../../interfaces/auction'
import { Bidding } from '../../interfaces/bidding'
import { getBidWinner } from '../../service/bidding'
import { UserData } from '../../interfaces/user-data'
import { acceptDonation, reactivateAuctionClosed, rejectDonation } from '../../service/auction'
import { useNavigate } from 'react-router-dom'
import UserModal from './modal-user'
import Confetti from 'react-confetti';
import ModalConfirm from '../modal-confirm/modal-confirm'
import ModalReactiveAuction from './modal-reative-auction'

interface AuctionStatus {
  waiting: string,
  success: string,
}

interface ButtonMessageByProfile {
  owner: {
    user: string
  },
  receiver: {
    user: string
  }
}

interface DonationCardProps {
  profile: string,
  auctionParam: Auction,
  setUpdateAuctions: react.Dispatch<react.SetStateAction<boolean>>
  setNotice: react.Dispatch<react.SetStateAction<{ show: boolean; message: string; type: string; }>>
}

export default function DonationCard({ profile, auctionParam , setUpdateAuctions, setNotice }: DonationCardProps) {
  const donationSuccessButtonText = "Ao clicar nesse botão, você confirma o recebimento do produto e transfere o valor do lance para o doador"
  const donationFailedButtonText = "Ao clicar nesse botão, você rejeita a doação"
  const reactivateAuctionButtonText = "Não há gratificações para gerar um novo ganhador, ao clicar nesse botão o leilão sera reativado para receber novas gratificações"

  const statusColors: AuctionStatus = {
    "waiting": "#fbaf00",
    "success": "#43d375",
  }

  const buttonsMessage: ButtonMessageByProfile = {
    owner: {
      user: "Ver Usuário Ganhador"
    },
    receiver: {
      user: "Ver Proprietário do Leilão"
    }
  }

  const [buttonsText, setButtonsText] = useState({user: ""});
  const [bidWinner, setBidWinner] = useState({} as Bidding);
  const [auction, setAuction] = useState(auctionParam as Auction);
  const [action, setAction] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openConfirmModal, setOpenConfim] = useState(false);
  const handleOpenConfirmModal = () => setOpenConfim(true);
  const handleCloseConfirmModal = () => setOpenConfim(false);

  const [openReactiveModal, setOpenReactiveModal] = useState(false);
  const handleOpenReactiveModal = () => setOpenReactiveModal(true);
  const handleCloseReactiveModal = () => setOpenReactiveModal(false);

  useEffect(() => {
    getButtonText();

    if (auction.status != 'open'){
      getWinner();
    }
  }, [])

  const getStatusColor = (): string => {
    return statusColors[auction.status as keyof AuctionStatus]
  }

  const getButtonText = () => {
    setButtonsText(buttonsMessage[profile as keyof ButtonMessageByProfile])
  }

  const reject = async () => {
    setUpdateAuctions(false);

    const auctionResponse = await rejectDonation(auction.id);

    if(Object.keys(auctionResponse).length != 0){
      setAuction(auctionResponse);
      setUpdateAuctions(true);
      setNotice({ show: true, message: "Doação rejeitada com sucesso", type: "success" });
    }else{
      setNotice({ show: true, message: "Erro ao rejeitar doação", type: "error" });
    }
  }

  const accept = async () => {
    setUpdateAuctions(false);

    const auctionResponse = await acceptDonation(auction.id);
    if(Object.keys(auctionResponse).length != 0){
      setAuction(auctionResponse);
      setUpdateAuctions(true);
      setNotice({ show: true, message: "Doação aceita com sucesso", type: "success" });
    }else{
      setNotice({ show: true, message: "Erro ao aceitar doação", type: "error" });
    }
    setAuction(auctionResponse);
    setUpdateAuctions(true);
  }

  const callModal = async (action: string) => {
    setAction(action);
    handleOpenConfirmModal();
  }

  const getWinner = async () => {
    const winner = await getBidWinner(auction.id);
    setBidWinner(winner);
  }

  const reactivateAuction = async (closingDate: Date) => {
    const result = await reactivateAuctionClosed(auction.id, closingDate);

    if(Object.keys(result).length != 0){
      setAuction(result);
      setUpdateAuctions(true);
      setNotice({ show: true, message: "Leilão reaberto com sucesso", type: "success" });
    }else {
      setNotice({ show: true, message: "Erro ao reabrir leilão", type: "error" });
    }
  }

  return(
    <Container>
      {
        open ? <Confetti/> : <></>
      }
      <Header>
        <h1>{auction.donationObject.title}</h1>
        <div>
          <StatusIndicator backgroundColor={getStatusColor()}>
            {
              auction.status != "open" && auction.status != "rejected"?
              <>
                <span id="number-coin">{bidWinner.bidAmount}</span>
                <CoinIcon/>
              </>
              :
              <></>
            }

          </StatusIndicator>
        </div>
      </Header>
      <Content>
        <p>{auction.donationObject.description}</p>
        <SeeDetails href={`/app/leiloes/${auction.id}`}>
          Ver detalhes
        </SeeDetails>
        {
          auction.status != "open" ?
          <Actions>
            {
              profile == 'receiver' && auction.status == "waiting" ?
                <>
                  <Tooltip title={donationSuccessButtonText}>
                    <button id="donation-success" onClick={() => callModal("accept")}>Confirmar Recebimento</button>
                  </Tooltip>
                  <Tooltip title={donationFailedButtonText}>
                    <button id="donation-failed" onClick={() => callModal("reject")}>Rejeitar Doação</button>
                  </Tooltip>
                </>
              :
                <></>
            }
            { auction.status != "rejected" ?
                <button id="user-winner" onClick={handleOpen}>{buttonsText.user}</button>
              :
                <></>
            }
            { auction.status == "rejected" && profile == "owner"?
                <Tooltip title={reactivateAuctionButtonText}>
                  <button id="reactivate-auction" onClick={() => handleOpenReactiveModal()}>Reativar Leilão</button>
                </Tooltip>
              :
                <></>
            }
          </Actions>
          :
          <></>
        }
      </Content>
      <UserModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        user={profile == 'owner' ? bidWinner.user as UserData : auction.user as UserData}
      />
      <ModalConfirm
        open={openConfirmModal}
        handleOpen={handleOpenConfirmModal}
        handleClose={handleCloseConfirmModal}
        action={action == "accept" ? accept : reject}
      />
      <ModalReactiveAuction
        open={openReactiveModal}
        handleClose={handleCloseReactiveModal}
        action={reactivateAuction}
      />
    </Container>
  )
}

