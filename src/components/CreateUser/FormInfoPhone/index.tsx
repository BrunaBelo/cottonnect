import React from 'react';

import { Cancel, Replay } from '@material-ui/icons/';
import { IconButton } from '@material-ui/core';
import { Container, InfoPhone, CodeVerification, Buttons, TitleButton } from './styles';

import HeaderModel from '../HeaderModel';
import ReactInputVerificationCode from 'react-input-verification-code';

const FormInfoPhone: React.FC = () => {
  return (
    <Container>
      <HeaderModel
      title = "Confirme seu número!"
      linkComponent = "/criar-conta/sucesso"
      />

      <InfoPhone>
        Insira o código de validação que foi enviado para o seu Whatsapp
      </InfoPhone>

      <CodeVerification>
        <ReactInputVerificationCode />
      </CodeVerification>

      <Buttons>
        <IconButton aria-label="skipNext">
          <Cancel fontSize="small"/> <TitleButton>Pular</TitleButton>
        </IconButton>

        <IconButton aria-label="skipNext">
          <Replay fontSize="small"/> <TitleButton>Reenviar</TitleButton>
        </IconButton>
      </Buttons>
    </Container>
  );
};

export default FormInfoPhone;
