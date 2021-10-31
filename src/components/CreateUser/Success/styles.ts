import styled from 'styled-components';

export const Container = styled.div`
  h2{
    font-size: 20px;
  }
`;

export const MessageHeader = styled.div`
  margin: 1em 0 2em 0;
  display: flex;
  flex-direction: row;
  align-itens: center;
  justify-content: center;
  margin: 2em 0;
  h1 {
    font-size: 22px;
  }
`;

export const ImageDone = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 3em 0;
`;

export const IconSmile = styled.div`
  img {
    width: 75%;
    heigth: 75%;
  }
`;

export const LetsGoButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  span{
    font-size: 24px;
    font-weight: bold;
  }
`;
