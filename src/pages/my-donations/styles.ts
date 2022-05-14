import { Alert } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  padding: 30px;
  height: 100%;

  @media (max-width: 920px) {
    padding-top: 45px;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 920px) {
    width: 60%;
  }

  @media (max-width: 599px) {
    width: 100%;
  }
`

export const DonationsCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const NoAuctions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  span {
    font-size: 18px;
    font-weight: bold;
    color: var(--primary);
  }
`

