import { ListItemText } from "@material-ui/core";
import { Cloudy } from "@styled-icons/ionicons-sharp/Cloudy";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary);
  height: 100%;
  color: #424552;
  color: white;
  z-index: 0;

  h1 {
    padding: 30px 10px;
  }
`

export const TextItem = styled(ListItemText)`
  span {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 15px;

    transition: .5s;
  }

  span:hover{
    color: white;
  }
`

export const CoinInformation = styled.div`
  background-color: white;
  margin: 30px;
  padding: 10px;
  border-radius: 10px;
  width: 70%;
  font-size: 16px;
  font-weight: bold;
  color: var(--primary);
`

export const CoinIcon = styled(Cloudy)`
  width: 17px;
  margin-right: 10px;
`
