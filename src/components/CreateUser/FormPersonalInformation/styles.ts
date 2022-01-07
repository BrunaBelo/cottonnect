import styled from 'styled-components';

import { TextField } from "@material-ui/core"
import { ArrowForwardIos } from '@material-ui/icons';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  background-color: white;
  border-radius: 20px;
  padding: 20px 50px 20px 50px;
`;

export const TopDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: transparent;
  margin-bottom: 20px;
`

export const BttSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 10%;
  background-color: transparent;
`

export const NextBtt = styled.button`
  padding: 0;
  margin: 0;
  border-width: 0;
  border-radius: 50%;
  background-color: var(--primary);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NextIcon = styled(ArrowForwardIos)`
  color: white;
  transform: scale(.8);
`

export const Title = styled.div`
  background-color: transparent;
  text-align: center;
  color: black;
  font-weight: 700;
  width: 80%;
`

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  background-color: transparent;
`;

export const ImageCreateAccount = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  @media (max-width: 855px) {
    img{
      display: none;
    }
    display: none;
  }
`;

export const UserInput = styled(TextField)`
  width: 45%;
`

export const UserInputMoreInfo = styled(UserInput)`
  width: 100%;
`

export const InfoAboutUser = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  row-gap: 1rem;
`

export const InputsCreateUser = styled.div`
  display: flex;
  background-color: transparent;
  flex-shrink: inherit;
  height: 100%;
  width: 100%;
  flex-direction: column;
  row-gap: 2rem;
`;

