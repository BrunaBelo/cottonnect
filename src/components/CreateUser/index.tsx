import React, { useState } from 'react';
import FormPersonalInformation from './FormPersonalInformation';
import { Container, CurrentScreen, FormsDiv } from './styles';

import { UserData } from '../../interfaces/userData'
import Navbar from '../Navbar';
import FormInfoAddress from './FormAddress';
import { createUser } from '../../service/user';

export default function CreateUser () {

  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    cpf: '',
    phoneNumber: '',
    password: '',
    moreInfo: ''
  } as UserData)

  const [address, setAddress] = useState({
    stateId: '',
    cityId: ''
  } as UserData)

  async function saveUser(){
    const newUser = {
      ...personalInfo,
      ...address
    } as UserData

    await createUser(newUser)
  }

  return (
    <Container>
      <Navbar/>
      <FormsDiv>
        <CurrentScreen id="0" show={true}>
          <FormPersonalInformation componentState={[personalInfo, setPersonalInfo]} index={0}/>
        </CurrentScreen>
        <CurrentScreen id="1">
          <FormInfoAddress componentState={[address, setAddress]} saveUser={saveUser} index={1}/>
        </CurrentScreen>
      </FormsDiv>
    </Container>
  );
};


