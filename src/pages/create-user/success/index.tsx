import React from 'react';
import PopUpContainer from '../container';
import { Main, ImageDone, DoneIcon, SubTitle } from './styles';

interface SuccessFormInterface {
  index: number
}

function renderMain(){
  return(
    <Main>
      <SubTitle>Sua conta foi registrada, agora é só você fazer login e já pode começar doar!</SubTitle>
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
