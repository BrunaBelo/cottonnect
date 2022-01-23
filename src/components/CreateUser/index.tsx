import React, { useState } from 'react';
import FormPersonalInformation from './FormPersonalInformation';
import { CollapseError, Container, CurrentScreen, ErrorAlert, FormsDiv } from './styles';

import { UserData } from '../../interfaces/userData'
import Navbar from '../Navbar';
import FormInfoAddress from './FormAddress';
import { createUser } from '../../service/user';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

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

  async function saveUser(){  
    const newUser = {
      ...personalInfo,
      ...address
    } as UserData

    try {
      await createUser(newUser);
    } catch (error) {
      console.log(error)
      setAlertError({ show: true, message: 'Erro ao criar conta!' })
      setTimeout(() => {
        setAlertError({ show: false, message: '' })
      }, 5000)
    }
  }

  return (
    <Container>
      <Navbar/>
      {
        alertError.show ?
        <CollapseError in={alertError.show}>
          <ErrorAlert 
            severity="error"
            action = {
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setAlertError({ show: false, message: '' })
                }}
              >
                <Close fontSize="inherit" />
              </IconButton>
            }
            >{alertError.message}</ErrorAlert>
        </CollapseError>
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
      </FormsDiv>
    </Container>
  );
};


