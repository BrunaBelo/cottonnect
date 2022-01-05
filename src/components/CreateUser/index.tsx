import React, { useState } from 'react';
import FormAddress from './FormAddress';
import FormPhone from './FormPhone';
import FormPersonalInformation from './FormPersonalInformation';
import FormSuccess from './Success';
import { Container } from './styles';

import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import UserService from '../../service/user';
import Navbar from '../Navbar';

export default function CreateUser () {
  return (
    <Container>
      <Navbar/>
      
    </Container>
  );
};


