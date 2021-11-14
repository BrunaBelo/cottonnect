import React from 'react';

import { Button } from '@material-ui/core';
import { Container, ImageDone, IconSmile, MessageHeader, LetsGoButtons } from './styles';

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

      <LetsGoButtons>
        <Button color="primary" className="lets-go" type="submit">Let's Goooo</Button>
      </LetsGoButtons>

    </Container>
  );
};

export default FormSuccess;
