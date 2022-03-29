import { Alert } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const Main = styled.div`
  width: 100%;
  padding: 30px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    padding: 50px;
  }
`

export const AlertMessage = styled(Alert)`
  width: 100%;
`