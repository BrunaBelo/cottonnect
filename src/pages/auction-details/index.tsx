import react, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { AlertMessage, Container, Main } from './styles'
import MessageState from '../../interfaces/message-state'
import LeftNavBar from '../../components/LeftNavBar';
import { getAutionInformation } from '../../service/auction';
import { Donation } from '../../interfaces/donation';
import { Auction } from '../../interfaces/auction';

export default function DonationDetails() {
  const auctionId = useParams().id || ''
  const state = useLocation().state as MessageState

  const successMessage = state?.successMessage || ''
  const showMessage = state?.showMessage || false

  const [showMessageState, setShowMessageState] = useState(showMessage)
  const [auction, setAuction] = useState({} as Auction)
  const [donation, setDonation] = useState({} as Donation)

  useEffect(() => {
    setTimeout(() => {
      setShowMessageState(false)
    }, 5000)

    const getDonationInfos = async(id: string) => {
      id = "d2524c89-94e4-4da5-aae5-163d8d278879"
      const auction = await getAutionInformation(id)
      setAuction(auction)
      setDonation(auction.donationObject)
      console.log(auction)
    }

    if(Object.keys(auction).length === 0){
      getDonationInfos(auctionId)
    }
  }, [])

  return (
    <Container>
      <LeftNavBar/>
      <Main>
        {
          true ? <AlertMessage severity="success">{successMessage}</AlertMessage> : <></>
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
