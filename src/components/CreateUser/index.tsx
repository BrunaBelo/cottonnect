import React, { useState } from 'react';
import FormAddress from './FormAddress';
import FormPhone from './FormPhone';
import FormPersonalInformation from './FormPersonalInformation';
import FormSuccess from './Success';
import { Container, CurrentScreen, FormsDiv } from './styles';

import Navbar from '../Navbar';

export default function CreateUser () {
  return (
    <Container>
      <Navbar/>
      <FormsDiv>
        <CurrentScreen>
          <FormPersonalInformation/>
        </CurrentScreen>
        {/* <Form1/>
        <Form2/>
        <Form3/> */}
      </FormsDiv>
    </Container>
  );
};


