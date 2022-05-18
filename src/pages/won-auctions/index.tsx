import react, { useEffect, useState } from "react";
import DonationCard from "../../components/donation-card";
import LeftNavBar from "../../components/left-nav-bar";
import { Auction } from "../../interfaces/auction";
import { getAuctionnParticipating, getAuctionsWon } from "../../service/auction";
import { AlertMessage, Container, DonationsCard, NoAuctions, Main, HelpButton, TapTooltip } from "./styles";
import { Box, Button, ClickAwayListener, Tab, Tooltip } from '@mui/material';
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

  const [openTooltip1, setOpenTooltip1] = useState(false);
  const handleTooltipClose1 = () => { setOpenTooltip1(false) };
  const handleTooltipOpen1 = () => { setOpenTooltip1(true) };

  const [openTooltip2, setOpenTooltip2] = useState(false);
  const handleTooltipClose2 = () => { setOpenTooltip2(false) };
  const handleTooltipOpen2 = () => { setOpenTooltip2(true) };

  const [openTooltip3, setOpenTooltip3] = useState(false);
  const handleTooltipClose3 = () => { setOpenTooltip3(false) };
  const handleTooltipOpen3 = () => { setOpenTooltip3(true) };

  const [openTooltip4, setOpenTooltip4] = useState(false);
  const handleTooltipClose4 = () => { setOpenTooltip4(false) };
  const handleTooltipOpen4 = () => { setOpenTooltip4(true) };

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
                  <Tab value="1" label={
                    <TapTooltip><span>Participando</span>
                    <ClickAwayListener onClickAway={handleTooltipClose1}>
                      <div className="help-tooltip">
                        <Tooltip
                          onClose={handleTooltipClose1}
                          open={openTooltip1}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                          title="São leilões que você deu uma gratificação e ainda estão abertos"
                        >
                          <HelpButton onClick={handleTooltipOpen1}/>
                        </Tooltip>
                      </div>
                    </ClickAwayListener>
                  </TapTooltip>}
                  />
                  <Tab value="2" label={
                    <TapTooltip><span>Em Andamento</span>
                    <ClickAwayListener onClickAway={handleTooltipClose2}>
                      <div className="help-tooltip">
                        <Tooltip
                          onClose={handleTooltipClose2}
                          open={openTooltip2}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                          title="São leilões que você ganhou e o processo está aguardando sua confirmação ou recusa da doação"
                        >
                          <HelpButton onClick={handleTooltipOpen2}/>
                        </Tooltip>
                      </div>
                    </ClickAwayListener>
                  </TapTooltip>}
                  />
                  <Tab value="3" label={
                    <TapTooltip><span>Concluídos</span>
                      <ClickAwayListener onClickAway={handleTooltipClose3}>
                        <div className="help-tooltip">
                          <Tooltip
                            onClose={handleTooltipClose3}
                            open={openTooltip3}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="São leilões que você ganhou e já recebeu a doação"
                          >
                            <HelpButton onClick={handleTooltipOpen3}/>
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </TapTooltip>}
                  />
                  <Tab value="4" label={
                    <TapTooltip><span>Rejeitados</span>
                      <ClickAwayListener onClickAway={handleTooltipClose4}>
                        <div className="help-tooltip">
                          <Tooltip
                            onClose={handleTooltipClose4}
                            open={openTooltip4}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="São leilões que você ganhou mas rejeitou a doação"
                          >
                            <HelpButton onClick={handleTooltipOpen4}/>
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </TapTooltip>}
                  />
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

