import react, { useEffect, useState } from 'react'
import DonationCard from '../../components/donation-card'
import LeftNavBar from '../../components/left-nav-bar'
import { Auction } from '../../interfaces/auction'
import { getAuctionsDonated } from '../../service/auction'
import { Container, DonationsCard } from './styles'

export default function MyDonations({}){
  const [auctions, setAuctions] = useState([] as Auction[]);

  useEffect(() => {
    getAuctions();
  }, [])

  const getAuctions = (async () => {
    const auctionsDonated = await getAuctionsDonated();
    setAuctions(auctionsDonated);
  })

  return(
    <Container>
      <LeftNavBar />
      <DonationsCard>
        {
          auctions.map(auction => {
            return(
              <DonationCard
                profile='owner'
                auction={auction}
              />
            )
          })
        }
      </DonationsCard>
    </Container>
  )
}

