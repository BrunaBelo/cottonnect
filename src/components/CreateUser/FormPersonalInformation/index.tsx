import React from 'react';

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
          <input required type="text" name="name" />
          <input required type="email" name="email"  />
          <input required type="number" name="phone" />
          <input required type="number" name="cpf" />
          <input required type="password" name="password"  />
          <input required type="password" name="confirm-password" />
          <input name="additionalInfs" className="additional-infs" />
        </InputsCreateUser>
      </Main>
    </Container>
  );
};

export default FormPersonalInformation;
