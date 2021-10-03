import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0px auto;
  width: 65%;
  border-radius: 15px;

  background-color: var(--primary);
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
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
  margin: 3em 0 0;
`;

export const RowInput = styled.div`
  flex: 50%;

  @media (max-width: 860px) {
    & {
      flex: 100%;
      margin: 0 0 1em 0;
    }
  }
`;

export const AdditionalInf = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;

  margin: 1.3em 3.5em 0 3.5em;

  @media (max-width: 860px) {
    & {
      align-items: center;
    }
  }
`;
