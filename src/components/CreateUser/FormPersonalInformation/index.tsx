import { BttSpace, InfoAboutUser, NextBtt, NextIcon, Title, TopDiv, UserInput, UserInputMoreInfo } from "./styles"
import React from 'react';

import { InputsCreateUser, ImageCreateAccount, Main, Container } from './styles';

const FormPersonalInformation: React.FC = () => {
  return (
    <Container>
      <TopDiv>
        <BttSpace></BttSpace>
        <Title>
          <h1>Crie sua Conta!</h1>
        </Title>
        <BttSpace>
          <NextBtt type="submit">
            <NextIcon/>
          </NextBtt>
        </BttSpace>
      </TopDiv>

      <Main>
        <ImageCreateAccount>
          <img src="/images/jumping.png" alt="Criar Conta" />
        </ImageCreateAccount>

        <InputsCreateUser>
          <InfoAboutUser>
            <UserInput required label="Nome" />
            <UserInput required label="Email"  />
            <UserInput required type="number" label="Telefone" />
            <UserInput required type="number" label="CPF" />
            <UserInput required type="password" label="Senha"  />
            <UserInput required type="password" label="Confirmar Senha" />
          </InfoAboutUser>
          <UserInputMoreInfo multiline minRows="3" maxRows="6" label="Informações Adicionais" />
        </InputsCreateUser>

      </Main>
    </Container>
  );
};

export default FormPersonalInformation;
