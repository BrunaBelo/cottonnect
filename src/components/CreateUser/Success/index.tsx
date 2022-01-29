import React from 'react';

import { Button } from '@material-ui/core';
import { Main, ImageDone, IconSmile, MessageHeader, LetsGoButtons, DoneIcon, SubTitle } from './styles';
import PopUpContainer from '../Container';

interface SuccessFormInterface {
  index: number
}

function renderMain(){
  return(
    <Main>
      
      <SubTitle>Sua conta foi registrada, agora você já pode começar doar!</SubTitle>

      <ImageDone>
        <DoneIcon src="/images/done.png" alt="Conta Criada" />
      </ImageDone>

      <LetsGoButtons>
        <Button color="primary" className="lets-go">Let's Goooo</Button>
      </LetsGoButtons>

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
