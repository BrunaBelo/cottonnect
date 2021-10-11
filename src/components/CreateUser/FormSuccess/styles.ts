import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0px auto;
  width: 65%;
  border-radius: 15px;

  background-color: var(--white);

  h2 {
    font-size: 18px;
  }
`;

export const MessageHeader = styled.div`
  margin: 1em 0 2em 0;
  display: flex;
  flex-direction: row;
  align-itens: center;
  justify-content: center;

  h1 {
    font-size: 25px;
  }
`;

export const ImageDone = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2em 0;
`;

export const IconSmile = styled.div`
  img {
    width: 75%;
    heigth: 75%;
  }
`;

export const FinishButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 1em;
  margin: 1em 0;

  .finish{
    background-color: #5969F5;
    color: white;

    &:hover { 
      background-color: #ABB2EB;
      color: grey;
    }
  }
`;
