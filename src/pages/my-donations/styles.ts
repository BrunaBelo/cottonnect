import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 30px;

  @media (max-width: 920px) {
    padding-top: 45px;
  }
`

export const DonationsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 15px;
  width: 70%;

  @media (max-width: 920px) {
    width: 60%;
  }

  @media (max-width: 599px) {
    width: 100%;
  }
`
