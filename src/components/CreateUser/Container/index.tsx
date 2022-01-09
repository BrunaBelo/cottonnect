import React from 'react';
import { backStep } from './moveStep';
import { 
  Container, 
  BttSpace, 
  ChangeStepBtt, 
  NextIcon, 
  Title, 
  TopDiv, 
  BackIcon} from './styles'

interface Container {
  title: string,
  main: () => JSX.Element,
  handleFormValidation: (data: object, schema: any) => Promise<void>,
  formData: object,
  schema: any,
  index: number
}

function PopUpContainer({title, handleFormValidation, formData, schema, main, index}: Container){

  return (
    <Container>
      
      <TopDiv>
        {
        index > 0 ?
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
        <BttSpace>
          <ChangeStepBtt 
            type="button" 
            onClick={() => handleFormValidation(formData, schema)}>
            <NextIcon/>
          </ChangeStepBtt>
        </BttSpace>
      </TopDiv>

      {main()}

    </Container>
  );
};

export default PopUpContainer;
