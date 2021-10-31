import React from 'react';

import { TextField } from '@material-ui/core';
import { Field } from 'formik';

import { InputsCreateUser, ImageCreateAccount, Main, Container } from './styles';
import { FormHeader } from '../styles';

const FormPersonalInformation: React.FC = () => {
  return (
    <Container>
      <FormHeader>Crie sua Conta!</FormHeader>

      <Main>
        <ImageCreateAccount>
          <img src="/images/jumping.png" alt="Criar Conta" />
        </ImageCreateAccount>

        <InputsCreateUser>
          <Field required type="text" name="name" component={TextField} label="Nome" />
          {/* <Field required type="email" name="email" component={TextField} label="Email" />
          <Field required type="number" name="phone" component={TextField} label="Telefone" />
          <Field required type="number" name="cpf" component={TextField} label="Cpf" />
          <Field required type="password" name="password" component={TextField} label="Senha" />
          <Field required type="password" name="confirm-password" component={TextField} label="Confirmar Senha" />
          <Field name="additionalInfs" className="additional-infs" component={TextField} label="Informações Adicionais" multiline rows={3} /> */}
        </InputsCreateUser>
      </Main>
    </Container>
  );
};

export default FormPersonalInformation;
