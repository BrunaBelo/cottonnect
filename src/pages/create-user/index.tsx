import React, { useState } from 'react';
import FormPersonalInformation from './form-personal-information';
import { Container, CurrentScreen, FormsDiv } from './styles';

import { UserData } from '../../interfaces/user-data'
import Navbar from '../../components/navbar';
import FormInfoAddress from './form-address';
import { createUser } from '../../service/user';
import FormInfoPhone from './form-phone';
import FormSuccess from './success';
import { AlertErrorComponent } from '../../components/alert-error';

export default function CreateUser () {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    cpf: '',
    phoneNumber: '',
    password: '',
    additionalInformation: ''
  } as UserData)

  const [address, setAddress] = useState({
    stateId: '',
    cityId: ''
  } as UserData)

  const [alertError, setAlertError] = useState({
    show: false,
    message: ''
  })

  const [user, setUser] = useState({} as UserData)

  async function saveUser(): Promise<boolean>{
    const newUser = {
      ...personalInfo,
      ...address
    } as UserData

    try {
      const respoonseUser = await createUser(newUser);
      setUser(respoonseUser);
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
          <FormInfoPhone index={2} userId={user.id as string}/>
        </CurrentScreen>
        <CurrentScreen id="3">
          <FormSuccess index={3}/>
        </CurrentScreen>
      </FormsDiv>
    </Container>
  );
};


