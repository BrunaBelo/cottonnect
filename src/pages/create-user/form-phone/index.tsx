import React, { useEffect, useState } from 'react';

import { IconButton } from '@material-ui/core';
import { Main, InfophoneNumber, CodeVerification, Buttons, TitleButton, CancelIcon, ReplayIcon, AlertMessage } from './styles';
import { nextStep } from '../container/move-step';
import ReactInputVerificationCode from 'react-input-verification-code';
import PopUpContainer from '../container';
import { confirmationPhone } from '../../../service/user';

interface FormInfoPhoneInterface {
  index: number
  userId: string
}

export default function FormInfoPhone({index, userId}: FormInfoPhoneInterface) {
  const [alertError, setAlertError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAlertError(false);
    }, 5000)
  }, [alertError])

  function renderMain() {
    async function validateUserPhoneCode(code: string, index: number){
      const verified = await confirmationPhone(userId, code);
      verified ? nextStep(index) : setAlertError(true);
    }

    function resendCode(){
      console.log('the user wanna receive the code again')
    }

    function skipPhoneVerification(index: number){
      nextStep(index);
    }

    return(
      <Main>
        <InfophoneNumber>
          Insira o código de validação que foi enviado para o seu celular por SMS
        </InfophoneNumber>

        <CodeVerification>
          <ReactInputVerificationCode
            onCompleted={(e) => validateUserPhoneCode(e, 2)}
          />
        </CodeVerification>

        <Buttons>
          <IconButton
            aria-label="skipNext"
            onClick={() => skipPhoneVerification(2)}
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

  return (
    <div>
      {
        alertError ? <AlertMessage severity="error">{"Código Inválido."}</AlertMessage> : <></>
      }
      <PopUpContainer
        index={index}
        title="Confirme seu número!"
        main={renderMain}
      />
    </div>
  );
};

