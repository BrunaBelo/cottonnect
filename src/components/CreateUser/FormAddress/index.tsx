import React, { useState } from 'react';

import { Main, ImageAddress, FormInputs, ErrorMessage, MapImage } from './styles';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import PopUpProps from '../../../interfaces/popUp';
import ErrorObj from '../../../interfaces/errorObj';

import PopUpContainer from '../Container';

import { schemaUserAddress } from './yupSchemas';
import { defaultErrorsStep2, handleDataAddress } from './handleData';

import { removeInputError, showErrors, validateForm } from '../../../shared/formConfigs/validate';
import { nextStep } from '../Container/moveStep';

function FormInfoAddress({index}: PopUpProps) {

  const [statesList, setStatesList] = useState(["RJ, PR"])
  const [citiesList, setCitiesList] = useState(["Rio de Janeiro", "São Paulo"])
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [errors, setErrors] = useState(defaultErrorsStep2())

  function changeInputValue(e: any, changeElement: React.Dispatch<React.SetStateAction<string>>) {
    if(e.target.value !== ""){
      changeElement(e.target.value)
      removeInputError(errors, e.target.name)
    }
  }

  function renderMain(): JSX.Element {
    return(
      <Main>
        <FormInputs>
          <FormControl required>
            <InputLabel shrink htmlFor="state">Estado</InputLabel>
            <Select 
              error={errors.state.status} 
              name="state" 
              onChange={(e) => changeInputValue(e, setState)}
              value={state}
            >
              <MenuItem value={1}>Paraná</MenuItem>
              <MenuItem value={2}>Rio de Janeiro</MenuItem>
              <MenuItem value={3}>São Paulo</MenuItem>
            </Select>
            <ErrorMessage>{errors.state.message}</ErrorMessage>
          </FormControl>

          <FormControl required>
            <InputLabel shrink htmlFor="city">Cidade</InputLabel>
            <Select 
              error={errors.city.status} 
              name="city"
              onChange={(e) => changeInputValue(e, setCity)}
              value={city}
            >
              <MenuItem value={1}>Prudentopolis</MenuItem>
              <MenuItem value={2}>Curitiba</MenuItem>
              <MenuItem value={3}>Colombo</MenuItem>
            </Select>
            <ErrorMessage>{errors.city.message}</ErrorMessage>
          </FormControl>
        </FormInputs>

        <ImageAddress>
          <MapImage src="/images/address.png" alt="Mapa endereço" />
        </ImageAddress>
      </Main>
    )
  }

  // Metodo para lidar com informacoes do usuario
  async function handleFormInfo(data: object, schema: any): Promise<void> {
    setErrors(defaultErrorsStep2())
    const resultForm = await validateForm(data, schema)
    if(resultForm === true){
      nextStep(index)
    }else{
      const newErrorObj = showErrors(resultForm as ErrorObj[], defaultErrorsStep2())
      setErrors(newErrorObj)
    }
  }

  return (
    <PopUpContainer
      index={index}
      title="Informe sua localização!"
      main={renderMain}
      handleFormValidation={handleFormInfo}
      formData={handleDataAddress(city, state)}
      schema = {schemaUserAddress}
    />
  );
};

export default FormInfoAddress;
