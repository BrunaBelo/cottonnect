import styled from "styled-components";

export const Container = styled.div`
  border-radius: 20px 20px;
  background-color: #B4C0E8;
  width: 22vw;

  @media(max-width: 1200px) {
    width: 30vw;
    border-radius: 20px 20px;
  }

  @media(max-width: 900px) {
    width: 60vw;
  }

  @media(max-width: 599px) {
    width: 80vw;
  }
`

export const DonationDetails = styled.div`
  padding: 15px;
  h1 {
    font-size: 20px;
    margin-bottom: 5px;
    word-wrap: break-word;
  }

  p {
    font-size: 14px;
    margin-bottom: 20px;
  }

  #link-buttons {
    margin-bottom: 20px;
    a {
      text-decoration: none;
      color: black;
      font-weight: bold;
      font-size: 14px;
      background-color: white;
      padding: 7px;
      border-radius: 5px;

      &:hover {
        opacity: .75;
      }
    }

  }
`

export const CardPhoto = styled.img`
  width: 22vw;
  height: 22vw;
  border-radius: 20px 20px 0 0;

  @media(max-width: 1200px) {
    width: 30vw;
    height: 30vw;
    border-radius: 20px 20px 0 0;
  }

  @media(max-width: 900px) {
    width: 60vw;
    height: 60vw;
  }

  @media(max-width: 599px) {
    width: 80vw;
    height: 80vw;
  }
`

