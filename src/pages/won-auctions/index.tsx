import react, { useEffect, useState } from "react";
import DonationCard from "../../components/donation-card";
import LeftNavBar from "../../components/left-nav-bar";
import { Auction } from "../../interfaces/auction";
import { getAuctionsWon } from "../../service/auction";
import { Container, Main } from "./styles";

export default function WonAuctions() {
  const [auctions, setAuctions] = useState([] as Auction[]);

  useEffect(() => {
    getAuctions();
  }, [])

  const getAuctions = (async () => {
    const auctionsWon = await getAuctionsWon();
    setAuctions(auctionsWon);
  })

  return(
    <Container>
      <LeftNavBar />
      <Main>
        {
          auctions.map(auction => {
            return(
              <DonationCard
                profile='receiver'
                auction={auction}
              />
            )
          })
        }
      </Main>
    </Container>
  )
}

