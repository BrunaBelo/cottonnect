import react, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { AlertMessage, Container, Main } from './styles'
import MessageState from '../../interfaces/message-state'
import LeftNavBar from '../../components/left-nav-bar';
import { getAutionInformation } from '../../service/auction';
import { Donation } from '../../interfaces/donation';
import { Auction } from '../../interfaces/auction';

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

  return (
    <Container>
      <LeftNavBar/>
      <Main>
        {
          false ? <AlertMessage severity="success">{state?.successMessage || ''}</AlertMessage> : <></>
        }

        {/* <Auction>
          <DonationPhotos></DonationPhotos>
          <DonationInfo>
            <h1>Doação</h1>
          </DonationInfo>
        </Auction> */}
      </Main>
    </Container>
  )
}
