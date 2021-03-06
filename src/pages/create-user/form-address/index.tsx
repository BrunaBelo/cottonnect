import React, { useState, useEffect } from 'react';

import { Main, ImageAddress, FormInputs, ErrorMessage, MapImage, Options, Item } from './styles';
import { FormControl, InputLabel } from '@material-ui/core';

import PopUpProps from '../../../interfaces/pop-up';
import ErrorObj from '../../../interfaces/error-obj';

import PopUpContainer from '../container';

import { schemaUserAddress } from './yup-schema';
import { defaultErrorsStep2, handleDataAddress } from './handle-data';

import { changeInputValue, showErrors, validateForm } from '../../../shared/form-configs/validate';
import { nextStep } from '../container/move-step';
import { getStates } from '../../../service/state';
import { getCities } from '../../../service/cities';

interface selectLocation {
  id: string,
  name: string
}

function FormInfoAddress({index, componentState: [address, setAddress], saveUser}: PopUpProps) {
  const [statesList, setStatesList] = useState([] as selectLocation[]);
  const [citiesList, setCitiesList] = useState([] as selectLocation[]);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState(defaultErrorsStep2());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getStatesFromApi(){
      try{
        const state = await getStates();
        await populateSelectLocation(state, setStatesList);
      }catch{
        console.log('Erro ao buscar estados');
      }
    }

    if(statesList.length === 0){
      getStatesFromApi();
    }

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [loading]);

  async function onChangeState(e: any) {
    changeInputValue(errors, e, setState)

    const city = await getCities(e.target.value)
    await populateSelectLocation(city, setCitiesList)
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
          <MapImage src="/images/address.png" alt="Mapa endere??o" />
        </ImageAddress>
      </Main>
    )
  }

  // Metodo para lidar com informacoes do usuario
  async function handleFormInfo(data: object, schema: any): Promise<void> {
    setErrors(defaultErrorsStep2())
    setLoading(true);
    const resultForm = await validateForm(data, schema)
    if(resultForm === true){
      if(saveUser){
        await saveUser() ? nextStep(index) : console.log('falha ao salvar user')
      }
    }else{
      const newErrorObj = showErrors(resultForm as ErrorObj[], defaultErrorsStep2())
      setErrors(newErrorObj)
    }

    setLoading(false);
  }

  return (
    <PopUpContainer
      index={index}
      title="Informe sua localiza????o!"
      main={renderMain}
      handleFormValidation={handleFormInfo}
      formData={handleDataAddress(city, state)}
      schema={schemaUserAddress}
      loading={loading}
    />
  );
};

export default FormInfoAddress;
