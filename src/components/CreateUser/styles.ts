import { Collapse } from '@material-ui/core';
import { Alert } from '@mui/material';
import styled from 'styled-components';

interface ScreenProps {
  show?: boolean;
}

export const Container = styled.div`
  background-color: var(--primary);
  height: 100%;
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CollapseError = styled(Collapse)`
  width: 70%;
`

export const ErrorAlert = styled(Alert)`
  width: 100%;
`

export const FormsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  height: calc(100% - 4em);
`

export const CurrentScreen = styled.div<ScreenProps>`
  width: 100%;
  display: ${p => p.show ? "flex" : "none"};
  background-color: transparent;
  align-items: center;
  justify-content: center;
  position: absolute;
  transition: .5s;
  transform: ${p => p.show ? "translateX(0%)" : "translateX(100%)"};
`