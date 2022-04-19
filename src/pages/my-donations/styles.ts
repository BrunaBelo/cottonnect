import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  padding: 30px;
  height: 100%;

  @media (max-width: 920px) {
    padding-top: 45px;
  }
`

export const DonationsCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Loading = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
`
