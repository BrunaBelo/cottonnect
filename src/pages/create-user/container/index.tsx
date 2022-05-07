import { CircularProgress } from '@mui/material';
import React from 'react';
import { backStep } from './move-step';
import {
  Container,
  BttSpace,
  ChangeStepBtt,
  NextIcon,
  Title,
  TopDiv,
  BackIcon } from './styles'

interface Container {
  title: string,
  main: () => JSX.Element,
  handleFormValidation?: (data: object, schema: any) => Promise<void>,
  formData?: object,
  schema?: any,
  index: number,
  width?: number,
  loading?: boolean
}

function PopUpContainer({title, handleFormValidation, formData, schema, main, index, width = 70, loading = false}: Container){
  return (
    <Container width={width}>
      <TopDiv>
        {
        index == 1?
        <BttSpace>
          <ChangeStepBtt
            type="button"
            onClick={() => backStep(index)}>
            <BackIcon/>
          </ChangeStepBtt>
        </BttSpace>
        :
        <></>
        }
        <Title>
          <h1>{title}</h1>
        </Title>
        {
          index < 2 ?
          <BttSpace>
            <ChangeStepBtt
              type="button"
              disabled={loading}
              onClick={() => handleFormValidation ? handleFormValidation(formData as object, schema) : false}>
              {
                loading ? <><CircularProgress style={{'color': 'white'}} size={10} /></>
                : <><NextIcon/></>
              }
            </ChangeStepBtt>
          </BttSpace>
          :
          <></>
        }
      </TopDiv>

      {main()}

    </Container>
  );
};

export default PopUpContainer;
