import styled from "styled-components";

export const Container = styled.div`
  border-radius: 20px 20px;
  background-color: #B4C0E8;
  width: 22vw;
  border: solid var(--light-primary) 2px;
  box-shadow: 5px 3px 10px var(--light-primary);

  @media(max-width: 1200px) {
    width: 30vw;
    border-radius: 20px 20px;
  }

  @media(max-width: 900px) {
    width: 40vw;
  }

  @media(max-width: 599px) {
    width: 80vw;
  }
`

export const DonationDetails = styled.div`
  padding: 15px;
  h1 {
    font-size: 18px;
    margin-bottom: 5px;
    white-space: nowrap;
    width: 12em;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: 14px;
    margin-bottom: 20px;
  }

  #lengthBidding {
    font-size: 12px;
    margin-bottom: 10px;
    font-weight: bold;
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
    width: 40vw;
    height: 36vw;
  }

  @media(max-width: 599px) {
    width: 80vw;
    height: 80vw;
  }
`
export const ConfirmYourAccount = styled.span`
  font-size: 10px;
`
