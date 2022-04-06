import react, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Bidding, BiddingButton, BiddingInput, CardPhoto, Container, DonationDetails, IconSend } from "./styles";

export default function AuctionCard() {

  const [photos, setPhotos] = useState([
    "https://res.cloudinary.com/dv0bcxpmm/image/upload/s--4cwLP7nc--/v1649115148/zfiqssgk7u5mybqctjvy.png",
    "https://res.cloudinary.com/dv0bcxpmm/image/upload/s--XAAxUIJ8--/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/dw4sajvte0fzaxzegicx.png"])

  const [donationName, setDonationName] = useState("Exemplo")

  return(
    <Container>
      <Carousel showThumbs={false} showStatus={false}>
        {
         photos.map(p => <CardPhoto src={p}/>)
        }
      </Carousel>
      <DonationDetails>
        <h1>{donationName}</h1>
        <p>Até 24/04</p>
        <Bidding>
          <BiddingInput autoFocus type="number"
                        error={false}
                        helperText={""}
                        placeholder="Qual o seu lance?"
                        onKeyPress={(e) => {}}
                        onChange={(e) => {}}
                        FormHelperTextProps = {{
                          style: { position: 'absolute', marginTop: '50px' }
                        }}
                        InputProps={{
                          style: { color: 'rgb(96, 109, 189)', fontWeight: 'bold' },
                      }}
          ></BiddingInput>
          <BiddingButton onClick={() => {}}>
            <IconSend></IconSend>
          </BiddingButton>
        </Bidding>
      </DonationDetails>
    </Container>
  )
}
