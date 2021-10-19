import React from 'react';

import { FormControl, Input, InputLabel, TextField } from '@material-ui/core';
import { InputsCreateUser, RowInput, ImageCreateAccount, Main, AdditionalInf } from './styles';
import HeaderModel from '../HeaderModel';
import StatusProgressBar from '../StatusProgressBar';
import { Container, SubContainer } from '../styles';

const FormPersonalInformation: React.FC = () => {
  return (
    <Container>
      <StatusProgressBar />
      
      <SubContainer>
        <HeaderModel
        title = "Crie sua Conta!"
        linkComponent = "/criar-conta/endereco"
        />

        <Main>
          <ImageCreateAccount>
            <img src="images/jumping.png" alt="Criar Conta" />
          </ImageCreateAccount>

          <InputsCreateUser>
            <RowInput>
              <FormControl>
                <InputLabel htmlFor="name">Nome*</InputLabel>
                <Input id="name" />
              </FormControl>
            </RowInput>
            
            <RowInput>
              <FormControl>
                <InputLabel htmlFor="email">Email*</InputLabel>
                <Input id="email"/>
              </FormControl>
            </RowInput>

            <RowInput>
              <FormControl>
                <InputLabel htmlFor="phone">Telefone*</InputLabel>
                <Input id="phone"/>
              </FormControl>
            </RowInput>

            <RowInput>
              <FormControl>
                <InputLabel htmlFor="cpf">CPF*</InputLabel>
                <Input id="personal-number"/>
              </FormControl>
            </RowInput>

            <RowInput className="last-row">
              <FormControl>
                <InputLabel htmlFor="password">Senha*</InputLabel>
                <Input id="password"/>
              </FormControl>
            </RowInput>

            <RowInput>
              <FormControl>
                <InputLabel htmlFor="confirm-password">Confirmar Senha*</InputLabel>
                <Input id="confirm-password"/>
              </FormControl>
            </RowInput>

            <AdditionalInf>
              <TextField
                placeholder="Informações Adicionais"
                multiline
                rows={3}
                rowsMax={4}
              />
            </AdditionalInf>
          </InputsCreateUser>
        </Main>
      </SubContainer>
    </Container>
  );
};

export default FormPersonalInformation;
