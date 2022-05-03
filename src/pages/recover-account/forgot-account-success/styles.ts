import styled from "styled-components";
import { CheckCircle } from "@styled-icons/boxicons-solid/";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 30px;
  height: 100%;
  width: 100%;

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
  row-gap: 20px;
  padding: 20px;

  h1{
    font-size: 18px;
  }

  h2{
    font-size: 18px;
    text-align: center;
  }

  h3{
    font-size: 15px;
    margin-top: 5px;
    color: var(--primary);
    text-align: center;
  }

  span{
    font-size: 14px;
    font-weight: bold;
  }

  ul {
    list-style-type: decimal;
    font-size: 14px;
    margin: 5px 0 0 25px;

    li {
      margin-top: 7px;
      ::marker {
        font-weight: bold;
      }
    }
  }

  @media (max-width: 600px) {
    background-color: transparent;
    row-gap: 20px;
    padding: 30px;
  }
`

export const IconSuccess = styled(CheckCircle)`
  width: 20%;
  color: var(--primary);
`

