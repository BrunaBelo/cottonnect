import react, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { AlertMessage, Container, Main } from './styles'
import ImessageState from '../../interfaces/Imessage-state'
import LeftNavBar from '../../components/LeftNavBar';
import { findDonation } from '../../service/donation';

export default function DonationDetails() {
  const donationId = useParams().id || ''
  const state = useLocation().state as ImessageState

  const successMessage = state?.successMessage || ''
  const showMessage = state?.showMessage || false

  const [showMessageState, setShowMessageState] = useState(showMessage)
  const [donation, setDonation] = useState({})

  useEffect(() => {
    setTimeout(() => {
      setShowMessageState(false)
    }, 5000)

    // const getDonationInfos = async(id: string) => {
    //   const donation = await findDonation(id)
    //   return donation
    // }
    // if(getDonationInfos(donationId).data)
    //   setDonation(getDonationInfos(donationId))
    // }
  })

  return (
    <Container>
      <LeftNavBar/>
      <Main>
        {
          true ? <AlertMessage severity="success">{successMessage}</AlertMessage> : <></>
        }
      </Main>
    </Container>
  )
}
