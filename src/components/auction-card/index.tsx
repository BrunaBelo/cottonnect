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
        return 'Seja o primeiro a dar um lance!';
      case 1:
        return 'Há apenas 1 lance nesse leilão.';
      default:
        return `Há ${biddings.length} lances nesse leilão.`;
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
