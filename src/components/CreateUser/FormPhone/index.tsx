import React from 'react';

import { Cancel, Replay } from '@material-ui/icons/';
import { IconButton } from '@material-ui/core';
import { Container, InfophoneNumber, CodeVerification, Buttons, TitleButton } from './styles';
import ReactInputVerificationCode from 'react-input-verification-code';

const FormInfophoneNumber: React.FC = () => {
  return (
    <Container>
      <h1>Confirme seu número!</h1>

      <InfophoneNumber>
        Insira o código de validação que foi enviado para o seu Whatsapp
      </InfophoneNumber>

      <CodeVerification>
        <ReactInputVerificationCode />
      </CodeVerification>

      <Buttons>
        <IconButton aria-label="skipNext" type="submit">
          <Cancel fontSize="small"/> <TitleButton>Pular</TitleButton>
        </IconButton>

        <IconButton aria-label="skipNext">
          <Replay fontSize="small"/> <TitleButton>Reenviar</TitleButton>
        </IconButton>
      </Buttons>
    </Container>
  );
};

export default FormInfophoneNumber;
