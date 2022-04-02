import { ListItemText } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--primary);
  height: 100%;
  color: #424552;
  color: white;

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


