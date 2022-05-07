import React, { useEffect, useState } from 'react';

import { IconButton } from '@material-ui/core';
import { Main, InfophoneNumber, CodeVerification, Buttons, TitleButton, CancelIcon, ReplayIcon, AlertMessage } from './styles';
import { nextStep } from '../container/move-step';
import { confirmationPhone, resendCodeVerification } from '../../../service/user';
import ReactInputVerificationCode from 'react-input-verification-code';
import PopUpContainer from '../container';

interface FormInfoPhoneInterface {
  index: number
  userId: string
}

export default function FormInfoPhone({index, userId}: FormInfoPhoneInterface) {
  const [alertError, setAlertError] = useState(false);
  const [resentCode, setResentCode] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAlertError(false);
      setResentCode(false);
    }, 5000)
  }, [alertError, resentCode])


  function buldingMessage() {
    if (resentCode === true){
      return (<AlertMessage severity="success">{"O código foi reenviado com sucesso."}</AlertMessage>)
    }else {
      return (<AlertMessage severity="error">{"Erro ao reenviar código de verificação."}</AlertMessage>)
    }
  };

  function renderMain() {
    async function validateUserPhoneCode(code: string, index: number){
      const verified = await confirmationPhone(userId, code);
      verified ? nextStep(index) : setAlertError(true);
    }

    async function resendCode(){
      const resent = await resendCodeVerification(userId);
      setResentCode(resent as boolean);
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
      {
        resentCode ? buldingMessage(): <></>
      }
      <PopUpContainer
        index={index}
        title="Confirme seu número!"
        main={renderMain}
      />
    </div>
  );
};

