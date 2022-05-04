import { TextField } from "@material-ui/core"
import { Send } from "@material-ui/icons"
import styled from "styled-components"

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

export const BiddingInputField = styled(TextField)`
  padding: 12px 15px;
  border-radius: 10px;
  color: white;
  width: 80%;

  label {
    font-style: italic;
  }
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


  @media(max-width: 928px){
    padding: 10px 5px;
  }
`
