import { Input, TextField } from "@material-ui/core";
import { Alert } from "@mui/material";
import { Send } from "@styled-icons/boxicons-solid"

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const Main = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const AlertMessage = styled(Alert)`
  width: 100%;
  margin-bottom: 1.5em;
  width: 80%;

  @media (max-width: 900px) {
    margin-bottom: 60px;
    width: 90%;
  }

`

export const AuctionInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 400px;
  column-gap: 10px;

  @media (max-width: 900px) {
    flex-direction: column;
    min-height: 100vh;
    background-color: white;
  }
`

export const DonationPhotosDiv = styled.div`
  display: flex;
  width: 30vw;
  height: auto;

  @media (max-width: 900px) {
    width: 90%;
    height: auto;
  }
`

export const DonationPhoto = styled.img`
  border-radius: 15px;
`

export const DonationInfo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30vw;
  height: 30vw;
  background-color: rgba(106, 129, 209, .50);
  border-radius: 15px;

  h1{
    font-size: 18px;
    word-wrap: break-word;
  }

  span{
    margin: 10px 0 0 0;
    font-size: 13px;
  }

  p{
    word-wrap: break-word;
    overflow-y: auto;
    margin: 1em 0;
    text-align: start;
    flex-grow: 1;

    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: white;
    }
  }

  @media (max-width: 900px) {
    background-color: transparent;
    width: 90%;
    flex-grow: 1;
    padding: 10px 0;

    p {
      overflow-y: unset;
      margin: 1em 0;
    }
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