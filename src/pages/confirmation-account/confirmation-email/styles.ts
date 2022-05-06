import styled from "styled-components";
import { CircularProgress } from '@material-ui/core';
import { Alert } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  row-gap: 20px;
  margin-top: 30px;

  @media (max-width: 600px) {
    margin-top: 5px;
    row-gap: 0;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  background-color: var(--light-primary);
  border-radius: 10px;
  row-gap: 45px;
  padding: 20px;

  h1{
    font-size: 20px;
  }

  p{
    font-size: 14px;
    margin-bottom: 15px;
  }

  @media (max-width: 600px) {
    background-color: transparent;
    row-gap: 20px;
    padding: 30px;
    width: 100%;

    h1{
      font-size: 18px;
    }
  }
`

export const SendLink = styled.button`
  background-color: var(--primary);
  padding: 10px 80px;
  color: white;
  font-weight: bold;
  border-radius: 7px;
  letter-spacing: 2px;
`

export const LoadingCircle = styled(CircularProgress)`
  margin-left: 10px;
`

export const AlertMessage = styled(Alert)`
  width: 50%;
  margin-top: 10px;

  @media (max-width: 900px) {
    width: 90%;
  }

`
