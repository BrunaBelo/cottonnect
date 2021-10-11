import { IconButton } from '@material-ui/core';
import NavigateNext from '@material-ui/icons/NavigateNext';
import React from 'react';

import { Container, ImageDone, IconSmile, MessageHeader, FinishButtons } from './styles';

const FormSuccess: React.FC = () => {
  return (
    <Container>
      <MessageHeader>
        <h1>Prontinho!</h1>
        <IconSmile>
          <img src="images/smile.png" alt="Conta Criada" />
        </IconSmile>
      </MessageHeader>
      
      <h2>Sua conta foi registrada, agora você já pode começar doar!</h2>

      <ImageDone>
        <img src="images/done.png" alt="Conta Criada" />
      </ImageDone>
    
      <FinishButtons>
        <IconButton aria-label="finish" className="finish">
          <NavigateNext/>
        </IconButton>
      </FinishButtons>
     
    </Container>
  );
};

export default FormSuccess;
