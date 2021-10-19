import React from 'react';

import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Main, ImageAddress, FormInputs } from './styles';
import { Container, SubContainer } from '../styles';

import HeaderModel from '../HeaderModel';
import StatusProgressBar from '../StatusProgressBar';

const FormInfoAddress: React.FC = () => {
  return (
    <Container>
      <StatusProgressBar />
      
      <SubContainer>
        <HeaderModel
          title= "Informe sua localização!"
          linkComponent = "/criar-conta/contato"
        />

        <Main>
          <FormInputs>
            <FormControl fullWidth>
              <InputLabel id="states">Estado</InputLabel>
              <Select
                labelId="states"
                id="select-states"
                label="Estado"
              >
                <MenuItem value={1}>Paraná</MenuItem>
                <MenuItem value={2}>Rio de Janeiro</MenuItem>
                <MenuItem value={3}>São Paulo</MenuItem>
              </Select>
            </FormControl>
          
            <FormControl fullWidth>
              <InputLabel id="cities">Cidade</InputLabel>
              <Select
                labelId="cities"
                id="select-cities"
                label="Cidade"
              >
                <MenuItem value={1}>Prudentopolis</MenuItem>
                <MenuItem value={2}>Curitiba</MenuItem>
                <MenuItem value={3}>Colombo</MenuItem>
              </Select>
            </FormControl>
          </FormInputs>
          <ImageAddress>
            <img src="images/address.png" alt="Mapa endereço" />
          </ImageAddress>
        </Main>
      </SubContainer>
    </Container>
  );
};

export default FormInfoAddress;
