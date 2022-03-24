import styled from 'styled-components';

import { ArrowForwardIos } from '@material-ui/icons';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  background-color: white;
  border-radius: 20px;
  padding: 20px 50px;
  
  @media (max-width: 500px) {
    width: 100%;
    border-radius: 0;
    padding: 20px 10px;
  }
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

export const ChangeStepBtt = styled.button`
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

  @media (max-width: 850px) {
    width: 35px;
    height: 35px;
  }
`

export const NextIcon = styled(ArrowForwardIos)`
  color: white;
  transform: scale(.8);
`

export const BackIcon = styled(NextIcon)`
  transform: scale(.8) rotate(180deg);
` 

export const Title = styled.div`
  background-color: transparent;
  text-align: center;
  color: black;
  font-weight: 700;
  width: 80%;

  @media (max-width: 850px) {
    font-size: 12px;
    width: 60%;
  }
`