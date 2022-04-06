import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const Main = styled.div`
  width: 100%;
  padding: 30px 50px;

  @media(max-width: 900px){
    padding: 30px 10px;
  }
`

export const AuctionList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 30px;

  @media(max-width: 900px){
    flex-direction: column;
    align-items: center;
  }
`
