import react, { useEffect, useState } from 'react';
import LeftNavBar from '../../components/left-nav-bar';
import AuctionCard from '../../components/auction-card';
import { AuctionList, Container, Main } from './styles';
import { getAllAuctions } from "../../service/auction";
import { Auction } from '../../interfaces/auction';

export default function Explorer() {

  const [auctions, setAuctions] = useState([] as Auction[])

  useEffect(() => {
    getAll()
  }, [])

  const getAll = async() => {
    const cityId = localStorage.getItem("user-city") as string
    const allAuctions = await getAllAuctions(cityId)
    setAuctions(allAuctions)
  }

  return (
    <Container>
      <LeftNavBar />
      <Main>
        {/* <h1>Filtros</h1> */}
        <AuctionList>
          {
            auctions.map(auction => {
              return(
                <AuctionCard
                  auction={auction}
                />
              )
            })
          }
        </AuctionList>
      </Main>
    </Container>
  )
}

