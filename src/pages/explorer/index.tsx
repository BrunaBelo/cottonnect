import react from 'react'
import LeftNavBar from '../../components/left-nav-bar'
import AuctionCard from '../../components/auction-card'
import { AuctionList, Container, Main } from './styles'

export default function Explorer() {
  return (
    <Container>
      <LeftNavBar />
      <Main>
        <h1>Filtros</h1>
        <AuctionList>
          <AuctionCard/>
          <AuctionCard/>
          <AuctionCard/>
        </AuctionList>
      </Main>
    </Container>
  )
}

