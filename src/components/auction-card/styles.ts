import { TextField } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import styled from "styled-components";

export const Container = styled.div`
  border-radius: 20px 20px;
  background-color: #B4C0E8;
  width: 22vw;

  @media(max-width: 1200px) {
    width: 30vw;
    border-radius: 20px 20px;
  }

  @media(max-width: 900px) {
    width: 60vw;
  }

  @media(max-width: 599px) {
    width: 80vw;
  }
`

export const DonationDetails = styled.div`
  padding: 15px;
  h1 {
    font-size: 20px;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    margin-bottom: 20px;
  }

  button {

  }
`

export const CardPhoto = styled.img`
  width: 22vw;
  height: 22vw;
  border-radius: 20px 20px 0 0;

  @media(max-width: 1200px) {
    width: 30vw;
    height: 30vw;
    border-radius: 20px 20px 0 0;
  }

  @media(max-width: 900px) {
    width: 60vw;
    height: 60vw;
  }

  @media(max-width: 599px) {
    width: 80vw;
    height: 80vw;
  }
`

export const Bidding = styled.div`
  display: flex;
  display: row;
  align-items: center;
  justify-content: space-between;

  input {
    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  @media (max-width: 900px) {
    padding: 0 0 10px 0;
  }
`

export const BiddingInput = styled(TextField)`
  padding: 12px 15px;
  border-radius: 10px;
  color: white;
  width: 80%;
`

export const BiddingButton = styled.div`
  background-color: var(--primary);
  padding: 7px 15px;
  border-radius: 10px;
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    opacity: .75;
  }
`

export const IconSend = styled(Send)`
  width: 25px;
  color: white;
`

export const AlreadySendingBid = styled.p`
  color: white;
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E68282;
  border-radius: 10px;
  padding: 10px;
`
