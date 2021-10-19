import React from 'react';

import { IconButton } from '@material-ui/core';
import { Container, SubContainer } from '../styles';
import { ImageDone, IconSmile, MessageHeader, FinishButtons } from './styles';

import NavigateNext from '@material-ui/icons/NavigateNext';
import StatusProgressBar from '../StatusProgressBar';

const FormSuccess: React.FC = () => {
  return (
    <Container>
      <StatusProgressBar />

      <SubContainer>
        <MessageHeader>
          <h1>Prontinho!</h1>
          <IconSmile>
            <img src="/images/smile.png" alt="Conta Criada" />
          </IconSmile>
        </MessageHeader>
        
        <h2>Sua conta foi registrada, agora você já pode começar doar!</h2>

        <ImageDone>
          <img src="/images/done.png" alt="Conta Criada" />
        </ImageDone>
      
        <FinishButtons>
          <IconButton aria-label="finish" className="finish">
            <NavigateNext/>
          </IconButton>
        </FinishButtons>
      
      </SubContainer>
    </Container>
  );
};

export default FormSuccess;
