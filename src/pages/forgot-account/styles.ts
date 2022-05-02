import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { CircularProgress } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  row-gap: 50px;
  margin-top: 30px;

  @media (max-width: 600px) {
    margin-top: 5px;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--light-primary);
  border-radius: 10px;
  row-gap: 30px;
  padding: 45px;

  h1{
    font-size: 20px;
  }

  h2{
    font-size: 17px;
  }

  h3{
    font-size: 15px;
    margin-top: 5px;
  }

  span{
    font-size: 12px;
    margin-top: 10px;
  }

  @media (max-width: 600px) {
    background-color: transparent;
    row-gap: 20px;
    padding: 30px;

    h1{
      font-size: 18px;
    }

    h2{
      font-size: 12px;
    }

    h3{
      font-size: 12px;
      margin-top: 5px;
    }
  }
`

export const EmailInput = styled(TextField)`
  width: 100%;
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

