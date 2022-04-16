import react, { useEffect, useState } from 'react'
import { Tooltip } from '@material-ui/core'
import { Actions, CoinIcon, Container, Content, Header, SeeDetails, StatusIndicator } from './styles'
import { Auction } from '../../interfaces/auction'
import { Bidding } from '../../interfaces/bidding'
import { getBidWinner } from '../../service/bidding'
import { UserData } from '../../interfaces/user-data'
import UserModal from './modal-user'
import Confetti from 'react-confetti';

interface AuctionStatus {
  open: string,
  waiting: string,
  success: string,
}

interface ButtonMessageByProfile {
  owner: {
    confirm: string,
    reject: string,
    user: string
  },
  receiver: {
    confirm: string,
    reject: string,
    user: string
  }
}

interface DonationCardProps {
  profile: string,
  auction: Auction
}

export default function DonationCard({ profile, auction }: DonationCardProps) {
  const donationSuccessButtonText = "Ao clicar nesse botão, você confirma o recebimento do produto e transfere o valor do lance para o doador"
  const donationFailedButtonText = "Ao clicar nesse botão, você rejeita a doação"

  const statusColors: AuctionStatus = {
    "open": "#5829a7",
    "waiting": "#fbaf00",
    "success": "#43d375",
  }

  const statusTitle: AuctionStatus = {
    "open": "Aberto",
    "waiting": "Aguardando Troca",
    "success": "Concluído",
  }

  const buttonsMessage: ButtonMessageByProfile = {
    owner: {
      confirm: "Confirmar Entrega",
      reject: "Doação Rejeitada",
      user: "Ver Usuário Ganhador"
    },
    receiver: {
      confirm: "Confirmar Recebimento",
      reject: "Rejeitar Doação",
      user: "Ver Proprietário do Leilão"
    }
  }

  const [status, setStatus] = useState(auction.status as keyof AuctionStatus);
  const [statusText, setStatusText] = useState("");
  const [buttonsText, setButtonsText] = useState({confirm: "", reject: "", user: ""});
  const [bidWinner, setBidWinner] = useState({} as Bidding);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getStatusTitle();
    getButtonText();

    if (status != 'open'){
      getWinner();
    }
  }, [statusText])

  const getStatusColor = (): string => {
    return statusColors[status]
  }

  const getStatusTitle = () => {
    setStatusText(statusTitle[status])
  }

  const getButtonText = () => {
    setButtonsText(buttonsMessage[profile as keyof ButtonMessageByProfile])
  }

  const getWinner = async () => {
    const winner = await getBidWinner(auction.id);
    setBidWinner(winner);
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
            <span>{statusText}</span>
            {
              status != "open" ?
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
          status != "open" ?
          <Actions>
            {
              status == "waiting" ?
                <>
                  <Tooltip title={donationSuccessButtonText}>
                    <button id="donation-success">{buttonsText.confirm}</button>
                  </Tooltip>
                  <Tooltip title={donationFailedButtonText}>
                    <button id="donation-failed">{buttonsText.reject}</button>
                  </Tooltip>
                </>
              :
                <></>
            }

            <button id="user-winner" onClick={handleOpen}>{buttonsText.user}</button>
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
    </Container>
  )
}

