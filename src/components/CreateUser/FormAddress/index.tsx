import React from 'react';

import { Container, Main, ImageAddress, FormInputs } from './styles';
import { FormHeader } from '../styles';
import { FormControl, InputLabel, MenuItem } from '@material-ui/core';

const FormInfoAddress: React.FC = () => {
  return (
    <Container>
      <FormHeader>Informe sua localização!</FormHeader>
      <Main>
        <FormInputs>
          <FormControl fullWidth required>
            <InputLabel shrink htmlFor="state">Estado</InputLabel>
            <input name="state">
              <MenuItem value={1}>Paraná</MenuItem>
              <MenuItem value={2}>Rio de Janeiro</MenuItem>
              <MenuItem value={3}>São Paulo</MenuItem>
            </input>
          </FormControl>

          <FormControl fullWidth required>
            <InputLabel shrink htmlFor="city">Cidade</InputLabel>
            <input name="city">
              <MenuItem value={1}>Prudentopolis</MenuItem>
              <MenuItem value={2}>Curitiba</MenuItem>
              <MenuItem value={3}>Colombo</MenuItem>
            </input>
          </FormControl>
        </FormInputs>

        <ImageAddress>
          <img src="/images/address.png" alt="Mapa endereço" />
        </ImageAddress>
      </Main>
    </Container>
  );
};

export default FormInfoAddress;
