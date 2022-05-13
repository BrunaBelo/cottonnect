import react, { useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Auction } from "../../interfaces/auction";
import { UserData } from "../../interfaces/user-data";
import { createBidding } from "../../service/bidding";
import { getUser } from "../../service/user";
import BiddingInput from "../bidding-input";
import { CardPhoto, ConfirmYourAccount, Container, DonationDetails } from "./styles";

interface AuctionCardData {
  auction: Auction
}

export default function AuctionCard({ auction: {
                                      id: auctionId,
                                      closingDate,
                                      donationObject: { title, photos },
                                      biddings,
                                      userId }}: AuctionCardData){

  const [user, setUser] = useState({} as UserData);
  const [localUserId, setLocalUserId] = useState(localStorage.getItem("user-id") || "");

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async(): Promise<void> => {
    const user = await getUser(localUserId);
    setUser(user);
  }

  const sendBid = async(bidAmount: number): Promise<void> => {
    await createBidding({ bidAmount: bidAmount, auctionId: auctionId });
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
          userId != localUserId ?
            user.isAllowed ?
              <BiddingInput
              auctionId={auctionId}
              sendBid={sendBid}
              />
            :
              <ConfirmYourAccount>Confirme sua conta para dar gratificações 😉</ConfirmYourAccount>
            :
              <></>
        }

      </DonationDetails>
    </Container>
  )
}
