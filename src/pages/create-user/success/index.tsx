import React from 'react';
import PopUpContainer from '../container';
import { Main, ImageDone, DoneIcon, Infos } from './styles';

interface SuccessFormInterface {
  index: number
}

function renderMain(){
  return(
    <Main>
      <Infos>
        <h1>Sua conta foi registrada, agora é só você fazer login e já pode começar doar!</h1>
        <h3>Acesse seu email e confirme sua conta através de um link que foi enviado para você!</h3>
        <h5>É muito importante você ter seu email e seu número de celular confirmados, pois apenas assim
          você conseguirá doar e receber doações 🤗
        </h5>
      </Infos>
      <ImageDone>
        <DoneIcon src="/images/done.png" alt="Conta Criada" />
      </ImageDone>
    </Main>
  )
}

export default function FormSuccess({index}: SuccessFormInterface) {
  return (
    <PopUpContainer
      index={index}
      title="Prontinho!"
      main={renderMain}
    />
  );
};
