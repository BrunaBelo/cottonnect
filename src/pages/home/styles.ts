import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #D9AFD9;
  background-image: linear-gradient(300deg, #D9AFD9 0%, #97D9E1 100%);
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 80px;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 40%;
  row-gap: 3em;

  @media (max-width: 700px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }

  h1 {
    font-size: 40px;
    color: var(--primary);
    font-weight: bolder;
  }

  p {
    color: var(--text-blue-color);
  }

  button {
    padding: 10px;
    background-color: var(--primary);
    border-radius: 5px;
    font-size: 12px;
    font-weight: 500;
    color: white;
    text-transform: uppercase;
  }

  a {
    color: var(--primary);
  }

  a:hover {
    cursor: pointer;
    opacity: .75;
  }
`

export const HomeImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 45%;

  @media (max-width: 700px) {
    width: 0%;
    display: none;
  }
`

export const Image = styled.img`
  width: 100%;

  @media (max-width: 700px) {
    width: 0%;
    display: none;
  }
`
