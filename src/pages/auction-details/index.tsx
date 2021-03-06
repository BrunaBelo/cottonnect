import react, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { AlertMessage, AuctionInfos, ConfirmYourAccount, Container, DonationInfo, DonationPhoto, DonationPhotosDiv, Main } from './styles'
import { getAutionInformation } from '../../service/auction';
import { Donation } from '../../interfaces/donation';
import { Auction } from '../../interfaces/auction';
import { Carousel } from 'react-responsive-carousel';
import { createBidding } from '../../service/bidding';
import { UserData } from '../../interfaces/user-data';
import { getUser } from '../../service/user';
import BiddingInput from '../../components/bidding-input';
import MessageState from '../../interfaces/message-state'
import LeftNavBar from '../../components/left-nav-bar';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function DonationDetails() {
  const auctionId = useParams().id || '';
  const state = useLocation().state as MessageState;

  const [showMessage, setShowMessage] = useState(state?.showMessage || false);
  const [message, setMessage] = useState(state?.successMessage || '');
  const [auction, setAuction] = useState({} as Auction);
  const [donation, setDonation] = useState({} as Donation);
  const [user, setUser] = useState({} as UserData);
  const [localUserId, setLocalUserId] = useState(localStorage.getItem("user-id") || "");
  const [loadingUser, setLoadingUser] = useState(false);

  useEffect(() => {
    getCurrentUser();

    const getAuction = async(id: string) => {
      const auction = await getAutionInformation(id);
      setAuction(auction);
      setDonation(auction.donationObject);
    }

    if(Object.keys(auction).length === 0){
      getAuction(auctionId);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
    }, 5000)
  }, [message]);

  const getCurrentUser = async(): Promise<void> => {
    setLoadingUser(true);
    const user = await getUser(localUserId);
    setUser(user);
    setLoadingUser(false);
  }

  const sendBid = async(bidAmount: number): Promise<void> => {
    const bid = await createBidding({bidAmount: bidAmount, auctionId: auctionId});
    Object.keys(bid).length != 0 ? setMessage('Sua gratifica????o foi cadastrado com sucesso') : setMessage('Erro ao cadastrar gratifica????o');

    setShowMessage(true);
  }

  function buldingMessage() {
    if (message === 'Erro ao cadastrar gratifica????o'){
      return (<AlertMessage severity="error">{message}</AlertMessage>)
    }else {
      return (<AlertMessage severity="success">{message}</AlertMessage>)
    }
  };

  const buildTextBiddingCount = (): string => {
    if(auction.biddings){
      switch (auction.biddings.length) {
        case 0:
          return 'Esse leil??o ainda n??o tem gratifica????es.';
        case 1:
          return 'H?? 1 gratifica????o para esse leil??o.';
        default:
          return `H?? ${auction.biddings.length} gratifica????es nesse leil??o.`;
      }
    }

    return "Esse leil??o ainda n??o tem gratifica????es."
  }

  return (
    <Container>
      <LeftNavBar/>
      <Main>
        {
          showMessage ? buldingMessage(): <></>
        }
        <AuctionInfos>
          <DonationPhotosDiv>
            <Carousel showThumbs={false} showStatus={false}>
              {donation.photos?.map(photo => (
                <div>
                  <DonationPhoto src={photo.url} />
                </div>
              ))}
            </Carousel>
          </DonationPhotosDiv>

          <DonationInfo>
            <div>
              <h1>{donation.title}</h1>
              <span>At?? {new Date(auction.closingDate).toLocaleDateString("pt-BR")}</span>
            </div>
            <div id="lengthBidding">
              <span>{buildTextBiddingCount()}</span>
            </div>

            <p>{donation.description}</p>
            {
              loadingUser ? <></> :
              <>
                {
                  auction.userId != localUserId ?
                  Object.keys(user).length != 0 && user.isAllowed ?
                      <BiddingInput
                        auctionId={auctionId}
                        sendBid={sendBid}
                      />
                    :
                      <ConfirmYourAccount>Confirme seu email e seu numero de celular para dar gratifica????es ????</ConfirmYourAccount>
                    :
                      <></>
                }
              </>
            }
          </DonationInfo>
        </AuctionInfos>
      </Main>
    </Container>
  )
}
