import React from 'react';

import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { Container, Main, ImageAddress, FormInputs } from './styles';
import { FormHeader } from '../styles';
import { Field } from 'formik';

const FormInfoAddress: React.FC = () => {
  return (
    <Container>
      <FormHeader>Informe sua localização!</FormHeader>
      <Main>
        <FormInputs>
          <FormControl fullWidth required>
            <InputLabel shrink htmlFor="state">Estado</InputLabel>
            <Field name="state" component={Select} >
              <MenuItem value={1}>Paraná</MenuItem>
              <MenuItem value={2}>Rio de Janeiro</MenuItem>
              <MenuItem value={3}>São Paulo</MenuItem>
            </Field>
          </FormControl>

          <FormControl fullWidth required>
            <InputLabel shrink htmlFor="city">Cidade</InputLabel>
            <Field name="city" component={Select} >
              <MenuItem value={1}>Prudentopolis</MenuItem>
              <MenuItem value={2}>Curitiba</MenuItem>
              <MenuItem value={3}>Colombo</MenuItem>
            </Field>
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
