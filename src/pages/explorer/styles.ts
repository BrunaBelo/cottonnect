import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const Main = styled.div`
  width: 100%;
  padding: 30px 50px;
`

export const AuctionList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  row-gap: 30px;
  column-gap: 30px;

  @media(max-width: 1200px){
    column-gap: 100px;
  }

  @media(max-width: 1099px){
    column-gap: 65px;
  }

  @media(max-width: 1012px){
    column-gap: 60px;
  }

  @media(max-width: 999px){
    column-gap: 40px;
  }

  @media(max-width: 950px){
    column-gap: 20px;
  }

  @media(max-width: 900px){
    flex-direction: column;
    align-items: center;
  }
`
export const NoAuctions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  span {
    font-size: 18px;
    font-weight: bold;
    color: var(--primary);
  }
`