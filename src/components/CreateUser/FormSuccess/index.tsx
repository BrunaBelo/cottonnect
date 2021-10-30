import React from 'react';

import { IconButton } from '@material-ui/core';
import { Container, ImageDone, IconSmile, MessageHeader } from './styles';

import NavigateNext from '@material-ui/icons/NavigateNext';

const FormSuccess: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default FormSuccess;
