import styled from 'styled-components';

export const Container = styled.div`
  .additional-infs {
    flex-grow: 1;
    padding: 0 4.5em 0 0;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageCreateAccount = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  @media (max-width: 855px) {
    img{
      display: none;
    }
  }
`;

export const InputsCreateUser = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3em 0 0 0;
  column-gap: 5em;
`;

