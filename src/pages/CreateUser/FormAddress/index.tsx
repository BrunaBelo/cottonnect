import React, { useState, useEffect } from 'react';

import { Main, ImageAddress, FormInputs, ErrorMessage, MapImage, Options, Item } from './styles';
import { FormControl, InputLabel } from '@material-ui/core';

import PopUpProps from '../../../interfaces/pop-up';
import ErrorObj from '../../../interfaces/error-obj';

import PopUpContainer from '../Container';

import { schemaUserAddress } from './yupSchemas';
import { defaultErrorsStep2, handleDataAddress } from './handleData';

import { changeInputValue, showErrors, validateForm } from '../../../shared/formConfigs/validate';
import { nextStep } from '../Container/moveStep';
import { getStates } from '../../../service/state';
import { getCities } from '../../../service/cities';

interface selectLocation {
  id: string,
  name: string
}

function FormInfoAddress({index, componentState: [address, setAddress], saveUser}: PopUpProps) {

  const [statesList, setStatesList] = useState([] as selectLocation[])
  const [citiesList, setCitiesList] = useState([] as selectLocation[])
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [errors, setErrors] = useState(defaultErrorsStep2())

  useEffect(() => {
    async function getStatesFromApi(){
      try{
        const { data } = await getStates()
        await populateSelectLocation(data, setStatesList)
      }catch{
        console.log('ERRO AO BUSCAR ESTADOS')
      }
    }
    if(statesList.length === 0){
      getStatesFromApi()
    }
  })

  async function onChangeState(e: any) {
    changeInputValue(errors, e, setState)

    const { data } = await getCities(e.target.value)
    await populateSelectLocation(data, setCitiesList)
  }

  function onChangeCity(e: any) {
    changeInputValue(errors, e, setCity)

    setAddress({
      stateId: state,
      cityId: e.target.value
    })
  }

  async function populateSelectLocation(data: any, setList: any): Promise<void>{
    let locations: selectLocation[] = []

    data.forEach((location: selectLocation) => {
      locations.push({name: location.name, id: location.id})
    });

    setList(locations)
  }

  function renderMain(): JSX.Element {
    return(
      <Main>
        <FormInputs>
          <FormControl required>
            <InputLabel shrink htmlFor="state">Estado</InputLabel>
            <Options
              error={errors.state.status}
              name="state"
              onChange={(e) => onChangeState(e)}
              value={state}
            >
              {
                statesList.map((state) => {
                  return(
                    <Item value={state.id}>{state.name.toLowerCase()}</Item>
                  )
                })
              }
            </Options>
            <ErrorMessage>{errors.state.message}</ErrorMessage>
          </FormControl>

          <FormControl required>
            <InputLabel shrink htmlFor="city">Cidade</InputLabel>
            <Options
              error={errors.city.status}
              name="city"
              onChange={(e) => onChangeCity(e)}
              value={city}
            >
              {
                citiesList.map((city) => {
                  return(
                    <Item value={city.id}>{city.name.toLowerCase()}</Item>
                  )
                })
              }
            </Options>
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
      if(saveUser){
        await saveUser() ? nextStep(index) : console.log('falha ao salvar user')
      }
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
