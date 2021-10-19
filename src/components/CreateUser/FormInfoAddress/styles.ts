import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  flex: 50%;
  margin: 3em;
  row-gap: 3em;

  @media (max-width: 855px) {
    & {
      margin: 2em 0 5em 3.5em;
      flex: 100%;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const SelectState = styled.div`
  margin: 0 0 3em 0;
`;  

export const ImageAddress = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 1em 0 0;

  @media (max-width: 855px) {
    img{
      display: none;
    }
  }
`;
