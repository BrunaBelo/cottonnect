import react, { useState, useEffect, createRef } from "react";
import { AlreadySendingBid, Bidding, BiddingInputField, BiddingButton, IconSend } from "./styles";
import { checkExistsBidFromAuction } from '../../service/bidding';
import { getCottonFlakesFromUser } from "../../service/user";
import ModalConfirm from "../modal-confirm/modal-confirm";

interface BiddingInputData {
  auctionId: string,
  sendBid: (bidAmount: number) => Promise<void>,
}

export default function BiddingInput({
  auctionId,
  sendBid
}: BiddingInputData) {

  const [bidAmount, setBidAmount] = useState(0);
  const [alreadySendingBid, setAlreadySendingBid] = useState(false);
  const [showErrorInput, setShowErrorInput] = useState(false);
  const [messageErrorInput, setMessageShowErrorInput] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    checkExistsBid()
  }, [bidAmount])

  const checkExistsBid = (async () => {
    const bid = await checkExistsBidFromAuction(auctionId);
    setAlreadySendingBid(bid.length > 0 ? true : false)
  })

  const saveBidding = async() => {
    const cottons = await getCottonFlakesFromUser()
    if(cottons < bidAmount){
      setShowErrorInput(true);
      setMessageShowErrorInput('Você não possui moedas o suficiente');

      return
    }

    setShowErrorInput(false);
    setMessageShowErrorInput('');

    if(bidAmount <= 0){
      setShowErrorInput(true);
      setMessageShowErrorInput('Preencha o campo para dar o lance');

      return
    }

    try{
      await sendBid(bidAmount)
      setAlreadySendingBid(true)
    }catch{
      console.log('erro ao dar lance')
    }
  }

  const validateInput = ((event: React.KeyboardEvent<HTMLDivElement>) =>{
    const key = event.key;

    if(key === "." || key === "," || key === "-" || key === "+"){
      event.preventDefault();
    }
  })

  return(
    <>
    {
      alreadySendingBid ?
      <Bidding>
        <AlreadySendingBid>Você já deu um lance nessa doação.</AlreadySendingBid>
      </Bidding>
      :
      <Bidding>
        <BiddingInputField
          autoFocus
          type="number"
          error={showErrorInput}
          helperText={messageErrorInput}
          placeholder="Qual o valor da sua gratificação?"
          onKeyPress={(e) => validateInput(e)}
          onChange={(e) => setBidAmount(parseInt(e.target.value))}
          FormHelperTextProps = {{
            style: { fontSize: '10px' }
          }}
          InputProps={{
            style: { color: 'rgb(96, 109, 189)', fontWeight: 'bold', fontSize: '13.5px'},
            inputProps: { min: 0 }
          }}
        />
        <BiddingButton onClick={() => handleOpen()}>
          <IconSend></IconSend>
        </BiddingButton>
      </Bidding>
    }

    <ModalConfirm
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        action={saveBidding}
      />
    </>
  )
}