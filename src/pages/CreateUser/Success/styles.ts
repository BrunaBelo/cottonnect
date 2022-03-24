import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const MessageHeader = styled.div`
  margin: 1em 0 2em 0;
  display: flex;
  flex-direction: row;
  align-items: center;
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

export const DoneIcon = styled.img`
  width: 100%;
`

export const SubTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
`

export const IconSmile = styled.div`
  img {
    width: 75%;
    height: 75%;
  }
`;

export const LetsGoButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  
  button{
    background-color: var(--primary);
    padding: 10px 20px;
    color: white;
    font-size: 20px;
    font-weight: 500;
    transition: .2s;
  }

  button:hover{
    opacity: .7;
    background-color: var(--primary);
    padding: 10px 20px;
    color: white;
    font-size: 20px;
    font-weight: 500;
  }
`;
