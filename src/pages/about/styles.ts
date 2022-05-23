import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
`
export const Main = styled.div`
  padding: 20px 150px;

  @media(max-width: 650px) {
    padding: 10px;
  }
`

export const CardInfo = styled.div`
  background-image: linear-gradient(300deg, #D9AFD9 0%, #97D9E1 100%);
  border-radius: 10px;
  padding: 20px 30px;
  margin-bottom: 20px;
  color: #161e29;

  h1{
    margin: 20px 0 30px 0;
  }

  h2 {
    margin: 10px 0;
  }

  h3{
    margin: 10px 0;
  }

  span{
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 12px;
  }

  p{
    margin-bottom: 12px;
  }
`
