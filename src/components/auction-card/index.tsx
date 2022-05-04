import react from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Auction } from "../../interfaces/auction";
import { createBidding } from "../../service/bidding";
import BiddingInput from "../bidding-input";
import { CardPhoto, Container, DonationDetails } from "./styles";

interface AuctionCardData {
  auction: Auction
}

export default function AuctionCard({
  auction: {
    id: auctionId,
    closingDate,
    donationObject: { title, photos },
    biddings,
    userId
  }}: AuctionCardData) {

  const sendBid = async(bidAmount: number):Promise<void> => {
    const bid = await createBidding({bidAmount: bidAmount, auctionId: auctionId});
    const result = Object.keys(bid).length != 0 ? true : false
  }

  const buildTextBiddingCount = (): string => {
    switch (biddings.length) {
      case 0:
        return 'Esse leilão ainda não tem gratificações.';
      case 1:
        return 'Há 1 gratificação para esse leilão.';
      default:
        return `Há ${biddings.length} gratificações nesse leilão :).`;
    }
  }

  return(
    <Container>
      <Carousel showThumbs={false} showStatus={false}>
        {
          photos?.map(p => <CardPhoto src={p.url}/>)
        }
      </Carousel>
      <DonationDetails>
        <h1>{title}</h1>
        <p>Até {new Date(closingDate).toLocaleDateString("pt-BR")}</p>
        <div id="link-buttons">
          <a href={`/app/leiloes/${auctionId}`}>Ver detalhes</a>
        </div>
        <div id="lengthBidding">
          <span>{buildTextBiddingCount()}</span>
        </div>
        {
          userId != localStorage.getItem("user-id") ?
            <BiddingInput
            auctionId={auctionId}
            sendBid={sendBid}
            />
          :
          <></>
        }

      </DonationDetails>
    </Container>
  )
}
