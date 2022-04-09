import styled from "styled-components";
import { Coins } from "@styled-icons/remix-fill/Coins";

interface StatusProps {
  backgroundColor: string
}

export const Container = styled.div`
  background-color: var(--light-primary);
  padding: 10px;
  border-radius: 10px;
  width: 50%;

  @media (max-width: 920px) {
    width: 100%;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 22px;
  }

  @media (max-width: 920px) {
    h1 {
      font-size: 17px;
    }
  }
`

export const StatusIndicator = styled.span<StatusProps>`
  background-color: ${(props) => props.backgroundColor};
  padding: 6px 10px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 12px;

  #number-coin {
    margin-left: 10px;
  }
`

export const CoinIcon = styled(Coins)`
  width: 20px;
`

export const Content = styled.div`
  p {
    margin-top: 10px;
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
  }

  @media (max-width: 920px) {
    p {
      font-size: 13px;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  justify-content: flex-start;

  button {
    margin-top: 20px;
    padding: 8px 10px;
    border-radius: 5px;
    font-weight: bold;
    color: white;
  }

  #donation-success {
    background-color: #43d375;
  }

  #donation-failed {
    background-color: #ee7168;
  }
`
