import { Cancel, Replay } from '@material-ui/icons';
import { Alert } from '@mui/material';
import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const InfophoneNumber = styled.h2`
  font-size: 17px;
  margin: 2em 0 0;
`;

export const CodeVerification = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 6em 0 4em 0;

  .ReactInputVerificationCode__item{
    background-color: #BECEE7;
    border-radius: 15px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 1em;
  margin: 1em 0;
`;

export const TitleButton = styled.div`
  margin: 0 0 0 6px;
  color: var(--title-text-color);
  color: ${props => props.color ? props.color : 'var(--primary)'};
  font-weight: 500;
  font-size: 16px;
`;

export const CancelIcon = styled(Cancel)`
  color: #E92E2E;
`

export const ReplayIcon = styled(Replay)`
  color: var(--primary);
  transform: scale(1.1)
`

export const AlertMessage = styled(Alert)`
  width: 100%;
  margin-bottom: 1.5em;

  @media (max-width: 900px) {
    margin-bottom: 60px;
    width: 90%;
  }

`