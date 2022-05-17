import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  row-gap: 10px;

  h1 {
    font-size: 20px;
    font-weight: 500;
  }

  h3 {
    font-size: 17px;
    font-weight: 500;
  }

  h5 {
    font-size: 15px;
    font-weight: 900;
  }
`

export const IconSmile = styled.div`
  img {
    width: 75%;
    height: 75%;
  }
`;

export const ImageDone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DoneIcon = styled.img`
  width: 100%;
`
