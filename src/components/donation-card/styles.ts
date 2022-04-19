import styled from "styled-components";
import { Coins } from "@styled-icons/remix-fill/Coins";
import { Whatsapp } from "@styled-icons/bootstrap/Whatsapp";
import { Email } from "@styled-icons/evaicons-solid/Email";
import { Box } from "@mui/material";
import { TelephoneFill } from "@styled-icons/bootstrap/TelephoneFill"
import { User } from "@styled-icons/boxicons-solid/User";
import { InfoCircleFill } from "@styled-icons/bootstrap/InfoCircleFill";

interface StatusProps {
  backgroundColor: string
}

export const Container = styled.div`
  background-color: var(--light-primary);
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 10px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 22px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
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
    margin: 10px 0;
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

export const SeeDetails = styled.a`
  color: white;
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
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

  #donation-success, #user-winner, #donation-failed {
    background-color: var(--primary);
  }
`

export const WhatsappLink = styled.a`
  background-color: #25D366;
  padding: 8px 15px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  border-radius: 20px;
  font-size: 14px;
  text-decoration: none;
`

export const WhatsappIcon = styled(Whatsapp)`
  width: 15px;
  margin-right: 5px;
`

export const EmailIcon = styled(Email)`
  width: 15px;
  margin-right: 5px;
  color: var(--primary);
`

export const TelIcon = styled(TelephoneFill)`
  width: 15px;
  margin-right: 5px;
  color: var(--primary);
`

export const UserIcon = styled(User)`
  width: 15px;
  margin-right: 5px;
  color: var(--primary);
`

export const InfoIcon = styled(InfoCircleFill)`
  width: 15px;
  margin-right: 5px;
  color: var(--primary);
`

export const BoxModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  box-shadow: 24px;
  padding: 30px;
  border-radius: 20px;

  h2 {
    font-size: larger;
    margin-bottom: 20px;
    color: var(--primary);
  }

  p {
    word-wrap: break-word;
    margin-bottom: 2px;
  }
`

