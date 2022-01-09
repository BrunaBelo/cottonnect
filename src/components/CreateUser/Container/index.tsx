import React from 'react';
import { 
  Container, 
  BttSpace, 
  NextBtt, 
  NextIcon, 
  Title, 
  TopDiv } from './styles'

interface Container {
  title: string,
  main: () => JSX.Element,
  handleFormValidation: (data: object, schema: any) => Promise<void>,
  formData: object,
  schema: any
}

function PopUpContainer({title, handleFormValidation, formData, schema, main}: Container){

  return (
    <Container>
      
      <TopDiv>
        <BttSpace></BttSpace>
        <Title>
          <h1>{title}</h1>
        </Title>
        <BttSpace>
          <NextBtt 
            type="button" 
            onClick={() => handleFormValidation(formData, schema)}>
            <NextIcon/>
          </NextBtt>
        </BttSpace>
      </TopDiv>

      {main()}

    </Container>
  );
};

export default PopUpContainer;
