import React from 'react';

import { Cancel, Replay } from '@material-ui/icons/';
import { IconButton } from '@material-ui/core';
import { Main, InfophoneNumber, CodeVerification, Buttons, TitleButton, CancelIcon, ReplayIcon } from './styles';
import ReactInputVerificationCode from 'react-input-verification-code';
import PopUpContainer from '../Container';

interface FormInfoPhoneInterface {
  index: number
}

function validateUserPhoneCode(code: string){
  console.log(`the users code is ${code}`)
}

function resendCode(){
  console.log('the user wanna receive the code again')
}

function skipPhoneVerification(){
  console.log('the user wanna skip the phone verification')
}

function renderMain() {
  return(
    <Main>
      <InfophoneNumber>
        Insira o código de validação que foi enviado para o seu celular
      </InfophoneNumber>

      <CodeVerification>
        <ReactInputVerificationCode
          onCompleted={(e) => validateUserPhoneCode(e)}
        />
      </CodeVerification>

      <Buttons>
        <IconButton 
          aria-label="skipNext" 
          onClick={() => skipPhoneVerification()}
        >
          <CancelIcon fontSize="small"/> <TitleButton color='#E92E2E'>Pular</TitleButton>
        </IconButton>

        <IconButton 
          aria-label="skipNext"
          onClick={() => resendCode()}
        >
          <ReplayIcon fontSize="small"/> <TitleButton>Reenviar</TitleButton>
        </IconButton>
      </Buttons>
    </Main>
  )
}


export default function FormInfoPhone({index}: FormInfoPhoneInterface) {
  return (
    <PopUpContainer
      index={index}
      title="Confirme seu número!"
      main={renderMain}
    />
  );
};

