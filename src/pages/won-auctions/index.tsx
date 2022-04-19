import react, { useEffect, useState } from "react";
import DonationCard from "../../components/donation-card";
import LeftNavBar from "../../components/left-nav-bar";
import { Auction } from "../../interfaces/auction";
import { getAuctionsWon } from "../../service/auction";
import { Container, DonationsCard, Loading, NoAuctions } from "./styles";
import { Box, CircularProgress, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

export default function WonAuctions() {
  const [auctionsInProgress, setAuctionsInProgress] = useState([] as Auction[]);
  const [auctionsCompleted, setAuctionsCompleted] = useState([] as Auction[]);
  const [auctionsRejected, setAuctionsRejected] = useState([] as Auction[]);

  const [value, setValue] = useState('1');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAuctions();
  }, [])

  const getAuctions = (async () => {
    try {
      setLoading(true);

      const auctionsDonated = await getAuctionsWon();

      const auctionsInProgress = auctionsDonated.filter(function (auction, index){
        return auction.status === 'waiting';
      });

      const auctionsCompleted = auctionsDonated.filter(function (auction, index){
        return auction.status === 'success';
      });

      const auctionsRejected = auctionsDonated.filter(function (auction, index){
        return auction.status === 'rejected';
      });

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

  return(
    <Container>
      <LeftNavBar />
        {
          loading ? <Loading><CircularProgress size={40} /></Loading>
          :
            <Box sx={{ width: '100%' }}>
              <TabContext value={value}>
                <TabList onChange={handleChange}>
                  <Tab label="Em Andamento" value="1" />
                  <Tab label="Concluídos" value="2" />
                  <Tab label="Rejeitados" value="3" />
                </TabList>
                <DonationsCard>
                  <TabPanel value="1">
                    {
                      auctionsInProgress != null && auctionsInProgress.length > 0 ?
                        auctionsInProgress.map(auction => {
                          return(
                            <DonationCard
                              profile='receiver'
                              auctionParam={auction}
                            />
                          )
                        })
                      :
                        <NoAuctions>
                          <span>Nenhum leilão em progresso foi encontrado.</span>
                        </NoAuctions>
                    }
                  </TabPanel>

                  <TabPanel value="2">
                    {
                      auctionsCompleted != null && auctionsCompleted.length > 0 ?
                        auctionsCompleted.map(auction => {
                          return(
                            <DonationCard
                              profile='receiver'
                              auctionParam={auction}
                            />
                          )
                        })
                      :
                        <NoAuctions>
                          <span>Nenhum leilão em concluído foi encontrado.</span>
                        </NoAuctions>
                    }
                  </TabPanel>

                  <TabPanel value="3">
                    {
                      auctionsRejected != null && auctionsRejected.length > 0 ?
                        auctionsRejected.map(auction => {
                          return(
                            <DonationCard
                              profile='receiver'
                              auctionParam={auction}
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
    </Container>
  )
}

