import react from 'react'
import DonationCard from '../../components/donation-card'
import LeftNavBar from '../../components/left-nav-bar'
import { Container } from './styles'

export default function MyDonations({}){
  return(
    <Container>
      <LeftNavBar />
      <DonationCard profile='owner'/>
    </Container>
  )
}

