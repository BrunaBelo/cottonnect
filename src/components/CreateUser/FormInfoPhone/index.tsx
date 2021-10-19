import React from 'react';

import { Cancel, Replay } from '@material-ui/icons/';
import { IconButton } from '@material-ui/core';
import { InfoPhone, CodeVerification, Buttons, TitleButton } from './styles';
import { Container, SubContainer } from '../styles';

import HeaderModel from '../HeaderModel';
import ReactInputVerificationCode from 'react-input-verification-code';
import StatusProgressBar from '../StatusProgressBar';

const FormInfoPhone: React.FC = () => {
  return (
    <Container>
      <StatusProgressBar />

      <SubContainer>
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
      </SubContainer>
    </Container>
  );
};

export default FormInfoPhone;
