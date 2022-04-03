import react, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { AlertMessage, AlreadySendingBid, AuctionInfos, Bidding, BiddingButton, BiddingInput, Container, DonationInfo, DonationPhoto, DonationPhotosDiv, IconSend, Main } from './styles'
import MessageState from '../../interfaces/message-state'
import LeftNavBar from '../../components/left-nav-bar';
import { getAutionInformation } from '../../service/auction';
import { Donation } from '../../interfaces/donation';
import { Auction } from '../../interfaces/auction';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { checkExistsBidFromAuction, createBidding } from '../../service/bidding';

export default function DonationDetails() {
  const auctionId = useParams().id || '';
  const state = useLocation().state as MessageState;

  const [showMessage, setShowMessage] = useState(state?.showMessage || false);
  const [message, setMessage] = useState(state?.successMessage || '');
  const [bidAmount, setBidAmount] = useState(0);
  const [showErrorInput, setShowErrorInput] = useState(false);
  const [messageErrorInput, setMessageShowErrorInput] = useState("");
  const [auction, setAuction] = useState({} as Auction);
  const [donation, setDonation] = useState({} as Donation);
  const [alreadySendingBid, setAlreadySendingBid] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
    }, 5000)

    const getAuction = async(id: string) => {
      const auction = await getAutionInformation(id);
      setAuction(auction);
      setDonation(auction.donationObject);
    }

    if(Object.keys(auction).length === 0){
      getAuction(auctionId);
    }

    checkExistsBid()
  }, [message, bidAmount])

  const validateInput = ((event: React.KeyboardEvent<HTMLDivElement>) =>{
    const key = event.key;

    if(key === "." || key === "," || key === "-" || key === "+"){
      event.preventDefault();
    }
  })

  const sendBid = (async () => {
    setShowErrorInput(false);
    setMessageShowErrorInput('');

    if(bidAmount > 0){
      const bid = await createBidding({bidAmount: bidAmount, auctionId: auctionId});
      Object.keys(bid).length != 0 ? setMessage('Seu lance foi cadastrado com sucesso') : setMessage('Erro ao cadastrar lance');

      setShowMessage(true);
    }else {
      setShowErrorInput(true);
      setMessageShowErrorInput('Preencha o campo para dar o lance');
    }
  })

  function buldingMessage() {
    if (message === 'Erro ao cadastrar lance'){
      return (<AlertMessage severity="error">{message}</AlertMessage>)
    }else {
      return (<AlertMessage severity="success">{message}</AlertMessage>)
    }
  };

  const checkExistsBid = (async () => {
    const bid = await checkExistsBidFromAuction(auctionId);

    setAlreadySendingBid(bid.length > 0 ? true : false)
  })

  return (
    <Container>
      <LeftNavBar/>
      <Main>
        {
          showMessage ? buldingMessage(): <></>
        }
        <AuctionInfos>
          <DonationPhotosDiv>
            <Carousel showThumbs={false} showStatus={false}>
              {donation.photos?.map(photo => (
                <div>
                  <DonationPhoto src={photo.url} />
                </div>
              ))}
            </Carousel>
          </DonationPhotosDiv>

          <DonationInfo>
            <div>
              <h1>{donation.title}</h1>
              <span>Até {new Date(auction.closingDate).toLocaleDateString("pt-BR")}</span>
            </div>

            <p>{donation.description}</p>

            {
              alreadySendingBid ?
                <Bidding>
                  <AlreadySendingBid>Você já deu um lance nessa doação.</AlreadySendingBid>
                </Bidding>
              :
                <Bidding>
                  <BiddingInput autoFocus type="number"
                                error={showErrorInput}
                                helperText={messageErrorInput}
                                placeholder="Qual o seu lance?"
                                onKeyPress={(e) => validateInput(e)}
                                onChange={(e) => setBidAmount(parseInt(e.target.value))}
                                FormHelperTextProps = {{
                                  style: { position: 'absolute', marginTop: '50px' }
                                }}
                                InputProps={{
                                  style: { color: 'rgb(96, 109, 189)', fontWeight: 'bold' },
                              }}
                  ></BiddingInput>
                  <BiddingButton onClick={() => sendBid()}>
                    <IconSend></IconSend>
                  </BiddingButton>
                </Bidding>
            }
          </DonationInfo>
        </AuctionInfos>
      </Main>
    </Container>
  )
}
