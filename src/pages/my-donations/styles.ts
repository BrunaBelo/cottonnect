import styled from "styled-components";
import { ChatHelp } from "@styled-icons/fluentui-system-regular";

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

export const HelpButton = styled(ChatHelp)`
  width: 18px;
  color: #6377db;

  :hover{
    color: #a9b1d6;
  }
`

export const TapTooltip = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span{
    margin: 10px 5px 0 0;
  }
`
