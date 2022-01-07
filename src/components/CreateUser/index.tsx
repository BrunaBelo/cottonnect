import React, { useState } from 'react';
import FormAddress from './FormAddress';
import FormPhone from './FormPhone';
import FormPersonalInformation from './FormPersonalInformation';
import FormSuccess from './Success';
import { Container, CurrentScreen, FormsDiv } from './styles';

import Navbar from '../Navbar';

export default function CreateUser () {

  function nextDiv(currentDiv: number): void{
    document.getElementById(`${currentDiv}`)!.style.transform = "translateX(-100%)"
    document.getElementById(`${currentDiv+1}`)!.style.display = "flex"  
    setTimeout(function() {
      document.getElementById(`${currentDiv+1}`)!.style.transform = "translateX(0%)"
      document.getElementById(`${currentDiv}`)!.style.display = "none"
    }, 250);
  }
  

  return (
    <Container>
      <Navbar/>
      <FormsDiv>
        <CurrentScreen id="0" show={true}>
          <FormPersonalInformation index={0} nextDivFunc={nextDiv}/>
        </CurrentScreen>
        <CurrentScreen id="1">
          <div style={{width: "50%", backgroundColor: "red"}}>
            olaolaola
          </div>
        </CurrentScreen>
      </FormsDiv>
    </Container>
  );
};


