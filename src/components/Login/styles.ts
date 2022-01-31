import styled from "styled-components";
import { Box, FormControl, Input } from "@material-ui/core";
import { Button } from "@mui/material";

export const Main = styled.div`
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const FormLogin = styled.form`
  width: 50%;
  background-color: rgba(106, 129, 209, .4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  padding: 50px;
  z-index: 10;
  margin: 2em 0 0;
  box-shadow: rgba(0,0,0,.2) 10px 10px 30px;
`

export const FormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  row-gap: 2em;

  h1 {
    color: #232946;
  }
`

export const Email = styled(FormControl)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const Password = styled(FormControl)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const UserInput = styled(Input)`
  width: 100%;
`

export const LoginErrorMessage = styled.p`
  font-size: 12px;
  color: #F44336;
  font-weight: 500;
`

export const LoginBtt = styled.button`
  background-color: var(--primary);
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  padding: 10px 5px;
  border-radius: 7px;
`

export const CredentialActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 1.5em;
  row-gap: 1.5em;
  flex-wrap: wrap;
`
export const ButtonCredentialActions = styled.button`
  background-color: transparent;
  color: var(--text-blue-color);

  &:hover{
    color: var(--text-blue-color-hover);
  }
`

export const CurveVetor = styled.div`
  bottom: -100px;
  position: fixed;
  width: 100%;
  z-index: 1;
`