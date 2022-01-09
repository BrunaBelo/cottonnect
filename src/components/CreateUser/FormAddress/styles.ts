import { FormHelperText } from '@material-ui/core';
import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 3em;
  row-gap: 3em;

  @media (max-width: 855px) {
    width: 100%;
  }
`; 

export const ImageAddress = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  justify-content: flex-end;
  width: 50%;
  //padding: 0 1em 0 0;

  @media (max-width: 855px) {
    img{
      display: none;
    }
    display: none;
  }

  @media (max-width: 1000px) {
    width: 40%;
  }
`;

export const MapImage = styled.img`
  //width: 50px;
  transform: scale(.8);
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 3px;
`