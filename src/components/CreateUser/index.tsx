import React, { useState } from 'react';
import FormAddress from './FormAddress';
import FormPhone from './FormPhone';
import FormPersonalInformation from './FormPersonalInformation';
import FormSuccess from './Success';
import { Container, CurrentScreen, FormsDiv } from './styles';

import Navbar from '../Navbar';
import FormInfoAddress from './FormAddress';

export default function CreateUser () {
  return (
    <Container>
      <Navbar/>
      <FormsDiv>
        <CurrentScreen id="0" show={true}>
          <FormPersonalInformation index={0}/>
        </CurrentScreen>
        <CurrentScreen id="1">
          <FormInfoAddress index={1}/>
        </CurrentScreen>
      </FormsDiv>
    </Container>
  );
};


