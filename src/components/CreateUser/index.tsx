import React, { useState } from 'react';
import FormPersonalInformation from './FormPersonalInformation';
import { Container, CurrentScreen, FormsDiv } from './styles';

import { UserData } from '../../interfaces/userData'
import Navbar from '../Navbar';
import FormInfoAddress from './FormAddress';
import { createUser } from '../../service/user';
import FormInfoPhone from './FormPhone';
import FormSuccess from './Success';
import { AlertErrorComponent } from '../AlertError';

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

  const [alertError, setAlertError] = useState({
    show: false,
    message: ''
  })

  async function saveUser(): Promise<boolean>{
    const newUser = {
      ...personalInfo,
      ...address
    } as UserData

    try {
      await createUser(newUser);
      return true
    } catch (error) {
      console.log(error)
      setAlertError({ show: true, message: 'Erro ao criar conta!' })
      setTimeout(() => {
        setAlertError({ show: false, message: '' })
      }, 5000)

      return false
    }
  }

  return (
    <Container>
      <Navbar dark={true}/>
        {
          alertError.show ?
            <AlertErrorComponent show={alertError.show} message={alertError.message} width={70}/>
          :
            <></>
          }
      <FormsDiv>
        <CurrentScreen id="0" show={true}>
          <FormPersonalInformation componentState={[personalInfo, setPersonalInfo]} index={0}/>
        </CurrentScreen>
        <CurrentScreen id="1">
          <FormInfoAddress componentState={[address, setAddress]} saveUser={saveUser} index={1}/>
        </CurrentScreen>
        <CurrentScreen id="2">
          <FormInfoPhone index={2}/>
        </CurrentScreen>
        <CurrentScreen id="3">
          <FormSuccess index={3}/>
        </CurrentScreen>
      </FormsDiv>
    </Container>
  );
};


