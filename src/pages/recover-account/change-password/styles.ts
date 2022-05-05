import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { CircularProgress } from '@material-ui/core';
import { LockPassword } from '@styled-icons/remix-line/';
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
  background-color: var(--light-primary);
  border-radius: 10px;
  row-gap: 30px;
  padding: 20px 45px;

  h1{
    font-size: 18px;
  }

  span{
    text-align: center;
    font-size: 12px;
  }

  @media (max-width: 600px) {
    background-color: transparent;
    row-gap: 20px;
    padding: 10px;
  }
`

export const PasswordInput = styled(TextField)`
  width: 100%;
`

export const ChangePasswordButton = styled.button`
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

export const IconLockPassword = styled(LockPassword)`
  width: 25%;
  color: var(--primary);
`

export const AlertMessage = styled(Alert)`
  width: 50%;
  margin-top: 10px;

  @media (max-width: 900px) {
    width: 90%;
  }

`
