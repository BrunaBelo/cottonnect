import react, { useEffect, useState } from "react";
import DonationCard from "../../components/donation-card";
import LeftNavBar from "../../components/left-nav-bar";
import { Auction } from "../../interfaces/auction";
import { getAuctionnParticipating, getAuctionsWon } from "../../service/auction";
import { AlertMessage, Container, DonationsCard, NoAuctions, Main } from "./styles";
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Loading from "../../components/loading";

export default function WonAuctions() {
  const [auctionsParticipating, setAuctionsParticipating] = useState([] as Auction[]);
  const [auctionsInProgress, setAuctionsInProgress] = useState([] as Auction[]);
  const [auctionsCompleted, setAuctionsCompleted] = useState([] as Auction[]);
  const [auctionsRejected, setAuctionsRejected] = useState([] as Auction[]);
  const [updateAuctions, setUpdateAuctions] = useState(false);
  const [value, setValue] = useState('1');
  const [loading, setLoading] = useState(false);
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

      const auctionsDonated = await getAuctionsWon();
      const auctionsParticipating = await getAuctionnParticipating();

      const auctionsInProgress = auctionsDonated.filter(function (auction, index){
        return auction.status === 'waiting';
      });

      const auctionsCompleted = auctionsDonated.filter(function (auction, index){
        return auction.status === 'success';
      });

      const auctionsRejected = auctionsDonated.filter(function (auction, index){
        return auction.status === 'rejected';
      });

      setAuctionsParticipating(auctionsParticipating);
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
            <Box sx={{ width: '100%' }}>
              <TabContext value={value}>
                <TabList onChange={handleChange}>
                  <Tab label="Participando" value="1" />
                  <Tab label="Em Andamento" value="2" />
                  <Tab label="Concluídos" value="3" />
                  <Tab label="Rejeitados" value="4" />
                </TabList>
                <DonationsCard>
                  <TabPanel value="1">
                    {
                      auctionsParticipating != null && auctionsParticipating.length > 0 ?
                        auctionsParticipating.map(auction => {
                          return(
                            <DonationCard
                              profile='receiver'
                              auctionParam={auction}
                              setUpdateAuctions={setUpdateAuctions}
                              setNotice={setNotice}
                            />
                          )
                        })
                      :
                        <NoAuctions>
                          <span>Você ainda não está participando de nenhum leilão</span>
                        </NoAuctions>
                    }
                  </TabPanel>

                  <TabPanel value="2">
                    {
                      auctionsInProgress != null && auctionsInProgress.length > 0 ?
                        auctionsInProgress.map(auction => {
                          return(
                            <DonationCard
                              profile='receiver'
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
                              profile='receiver'
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
                              profile='receiver'
                              auctionParam={auction}
                              setUpdateAuctions={setUpdateAuctions}
                              setNotice={setNotice}
                            />
                          )
                        })
                      :
                        <NoAuctions>
                          <span>Nenhum leilão em rejeitado foi encontrado.</span>
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

