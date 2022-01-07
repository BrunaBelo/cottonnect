import { BttSpace, InfoAboutUser, NextBtt, NextIcon, Title, TopDiv, UserInput, UserInputMoreInfo } from "./styles"
import React from 'react';

import { InputsCreateUser, ImageCreateAccount, Main, Container } from './styles';

interface Props {
  nextDivFunc: (currentDiv: number) => void,
  index: number
}

function FormPersonalInformation({nextDivFunc, index}: Props){
  return (
    <Container>
      <TopDiv>
        <BttSpace></BttSpace>
        <Title>
          <h1>Crie sua Conta!</h1>
        </Title>
        <BttSpace>
          <NextBtt type="button" onClick={() => nextDivFunc(index)}>
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
            <UserInput label="Nome" />
            <UserInput label="Email"  />
            <UserInput type="number" label="Telefone" />
            <UserInput type="number" label="CPF" />
            <UserInput type="password" label="Senha"  />
            <UserInput type="password" label="Confirmar Senha" />
          </InfoAboutUser>
          <UserInputMoreInfo multiline minRows="3" maxRows="6" label="Informações Adicionais" />
        </InputsCreateUser>

      </Main>
    </Container>
  );
};

export default FormPersonalInformation;
