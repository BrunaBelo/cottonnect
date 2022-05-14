import react, { useEffect, useState } from 'react'
import { Auction } from '../../interfaces/auction'
import { getAuctionsDonated } from '../../service/auction'
import { Container, DonationsCard, NoAuctions, Main } from './styles'
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel} from '@mui/lab';
import { AlertMessage } from '../won-auctions/styles'
import Loading from '../../components/loading'
import DonationCard from '../../components/donation-card'
import LeftNavBar from '../../components/left-nav-bar'

export default function MyDonations({}){
  const [auctionsOpen, setAuctionsOpen] = useState([] as Auction[]);
  const [auctionsInProgress, setAuctionsInProgress] = useState([] as Auction[]);
  const [auctionsCompleted, setAuctionsCompleted] = useState([] as Auction[]);
  const [auctionsRejected, setAuctionsRejected] = useState([] as Auction[]);
  const [value, setValue] = useState('1');
  const [loading, setLoading] = useState(false);
  const [updateAuctions, setUpdateAuctions] = useState(false);
  const [notice, setNotice] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    getAuctions();
  }, [updateAuctions]);

  useEffect(() => {
    setTimeout(() => {
      setNotice({ show: false, message: "", type: "" });
    }, 5000);
  }, [notice]);

  const getAuctions = (async () => {
    try {
      setLoading(true);
      const auctionsDonated = await getAuctionsDonated();

      const auctionsOpen = auctionsDonated.filter(function (auction, index){
        return auction.status === 'open';
      });

      const auctionsInProgress = auctionsDonated.filter(function (auction, index){
        return auction.status === 'waiting';
      });

      const auctionsCompleted = auctionsDonated.filter(function (auction, index){
        return auction.status === 'success';
      });

      const auctionsRejected = auctionsDonated.filter(function (auction, index){
        return auction.status === 'rejected';
      });

      setAuctionsOpen(auctionsOpen);
      setAuctionsInProgress(auctionsInProgress);
      setAuctionsCompleted(auctionsCompleted);
      setAuctionsRejected(auctionsRejected);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  });

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  function buldingMessage() {
    if (notice.type === "success"){
      return (<AlertMessage severity="success">{notice.message}</AlertMessage>);
    }else {
      return (<AlertMessage severity="error">{notice.message}</AlertMessage>);
    }
  };

  return(
    <Container>
      <LeftNavBar />
      <Main>
        { notice.show ? buldingMessage(): <></> }
        {
            loading ? <Loading></Loading>
            :
              <Box sx={{ width: '100%', height: '100%' }}>
                <TabContext value={value}>
                  <TabList onChange={handleChange}>
                    <Tab label="Abertos" value="1" />
                    <Tab label="Em Andamento" value="2" />
                    <Tab label="Concluídos" value="3" />
                    <Tab label="Sem Ganhadores" value="4" />
                  </TabList>
                  <DonationsCard>
                    <TabPanel value="1">
                        {
                          auctionsOpen != null && auctionsOpen.length > 0 ?
                            auctionsOpen.map(auction => {
                              return(
                                <DonationCard
                                  profile='owner'
                                  auctionParam={auction}
                                  setUpdateAuctions={setUpdateAuctions}
                                  setNotice={setNotice}
                                />
                              )
                            })
                          :
                            <NoAuctions>
                              <span>Nenhum leilão aberto foi encontrado.</span>
                            </NoAuctions>
                        }
                    </TabPanel>

                    <TabPanel value="2">
                      {
                        auctionsInProgress != null && auctionsInProgress.length > 0 ?
                          auctionsInProgress.map(auction => {
                            return(
                              <DonationCard
                                profile='owner'
                                auctionParam={auction}
                                setUpdateAuctions={setUpdateAuctions}
                                setNotice={setNotice}
                              />
                            )
                          })
                        :
                          <NoAuctions>
                            <span>Nenhum leilão em progresso foi encontrado.</span>
                          </NoAuctions>
                      }
                    </TabPanel>

                    <TabPanel value="3">
                      {
                        auctionsCompleted != null && auctionsCompleted.length > 0 ?
                          auctionsCompleted.map(auction => {
                            return(
                              <DonationCard
                                profile='owner'
                                auctionParam={auction}
                                setUpdateAuctions={setUpdateAuctions}
                                setNotice={setNotice}
                              />
                            )
                          })
                        :
                          <NoAuctions>
                            <span>Nenhum leilão em concluído foi encontrado.</span>
                          </NoAuctions>
                      }
                    </TabPanel>

                    <TabPanel value="4">
                      {
                        auctionsRejected != null && auctionsRejected.length > 0 ?
                          auctionsRejected.map(auction => {
                            return(
                              <DonationCard
                                profile='owner'
                                auctionParam={auction}
                                setUpdateAuctions={setUpdateAuctions}
                                setNotice={setNotice}
                              />
                            )
                          })
                        :
                          <NoAuctions>
                            <span>Nenhum leilão sem ganhador foi encontrado.</span>
                          </NoAuctions>
                      }
                    </TabPanel>
                  </DonationsCard>
                </TabContext>
              </Box>
        }
      </Main>
    </Container>
  )
}

