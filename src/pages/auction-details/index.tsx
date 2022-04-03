import react, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { AlertMessage, AuctionInfos, Bidding, BiddingButton, BiddingInput, Container, DonationInfo, DonationPhoto, DonationPhotosDiv, IconSend, Main } from './styles'
import MessageState from '../../interfaces/message-state'
import LeftNavBar from '../../components/left-nav-bar';
import { getAutionInformation } from '../../service/auction';
import { Donation } from '../../interfaces/donation';
import { Auction } from '../../interfaces/auction';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function DonationDetails() {
  const auctionId = useParams().id || ''
  const state = useLocation().state as MessageState

  const [showMessage, setShowMessage] = useState(state?.showMessage || false)
  const [auction, setAuction] = useState({} as Auction)
  const [donation, setDonation] = useState({} as Donation)

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false)
    }, 5000)

    const getAuction = async(id: string) => {
      const auction = await getAutionInformation(id)
      setAuction(auction)
      setDonation(auction.donationObject)
      console.log(auction)
    }

    if(Object.keys(auction).length === 0){
      getAuction(auctionId)
    }
  }, [])

  const validateInput = ((event: React.KeyboardEvent<HTMLInputElement>) =>{
    const key = event.key;

    if(key === "." || key === "," || key === "-" || key === "+"){
      event.preventDefault();
    }
  })

  return (
    <Container>
      <LeftNavBar/>
      <Main>
        {
          false ? <AlertMessage severity="success">{state?.successMessage || ''}</AlertMessage> : <></>
        }

        <AuctionInfos>
          <DonationPhotosDiv>
            <Carousel showThumbs={false} showStatus={false}>
              {donation.photos?.map(photo => (
                <div>
                  <DonationPhoto src="https://res.cloudinary.com/dv0bcxpmm/image/upload/s--nvVmZFAs--/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/asrhe1le6yfgnbdwh9gb.jpg" />
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

            <Bidding>
              <BiddingInput autoFocus type="number" placeholder="Qual o seu lance?" onKeyPress={(e) => validateInput(e)}></BiddingInput>
              <BiddingButton>
                <IconSend></IconSend>
              </BiddingButton>
            </Bidding>
          </DonationInfo>
        </AuctionInfos>
      </Main>
    </Container>
  )
}
