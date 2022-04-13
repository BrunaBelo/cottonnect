import styled from 'styled-components';

import { TextField } from "@material-ui/core"

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

  @media (max-width: 450px) {
    width: 100%;
  }
`

export const UserInputadditionalInformation = styled(UserInput)`
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

  @media (max-width: 450px) {
    flex-direction: column;
    flex-wrap: none;
  }
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

