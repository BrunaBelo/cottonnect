import react, { useEffect, useState } from 'react'
import DonationCard from '../../components/donation-card'
import LeftNavBar from '../../components/left-nav-bar'
import { Auction } from '../../interfaces/auction'
import { getAuctionsDonated } from '../../service/auction'
import { Container, DonationsCard, Loading } from './styles'
import { Box, CircularProgress, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel} from '@mui/lab';

export default function MyDonations({}){
  const [auctionsOpen, setAuctionsOpen] = useState([] as Auction[]);
  const [auctionsInProgress, setAuctionsInProgress] = useState([] as Auction[]);
  const [auctionsCompleted, setAuctionsCompleted] = useState([] as Auction[]);
  const [value, setValue] = useState('1');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAuctions();
  }, [])

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

      setAuctionsOpen(auctionsOpen);
      setAuctionsInProgress(auctionsInProgress);
      setAuctionsCompleted(auctionsCompleted);
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
                  <Tab label="Abertos" value="1" />
                  <Tab label="Em Andamento" value="2" />
                  <Tab label="Concluídos" value="3" />
                </TabList>
                <DonationsCard>
                  <TabPanel value="1">
                      {
                        auctionsOpen.map(auction => {
                          return(
                            <DonationCard
                              profile='owner'
                              auction={auction}
                            />
                          )
                        })
                      }
                  </TabPanel>

                  <TabPanel value="2">
                    {
                      auctionsInProgress.map(auction => {
                        return(
                          <DonationCard
                            profile='owner'
                            auction={auction}
                          />
                        )
                      })
                    }
                  </TabPanel>

                  <TabPanel value="3">
                    {
                      auctionsCompleted.map(auction => {
                        return(
                          <DonationCard
                            profile='owner'
                            auction={auction}
                          />
                        )
                      })
                    }
                  </TabPanel>
                </DonationsCard>
              </TabContext>
            </Box>
      }
    </Container>
  )
}

