import styled from "styled-components";
import Select from 'react-select'
import { OutlinedInput, TextField } from "@material-ui/core";
import { Search } from "@styled-icons/bootstrap";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 10;
`

export const Main = styled.div`
  width: 100%;
  padding: 20px 50px;
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

export const Filters = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  column-gap: 5px;
  row-gap: 5px;
  flex-wrap: wrap;
  margin-bottom: 15px;
`

export const TitleInput = styled(TextField)`
  flex-grow: 1;
`

export const SelectInput = styled(TextField)`
  width: 20%;

  @media(max-width: 900px){
    width: 100%;
  }
`

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  padding: 18px 20px;
  border-radius: 5px;
  z-index: 10;
`

export const SearchIcon = styled(Search)`
  width: 20px;
  color: white;
`

export const SelectField = styled(OutlinedInput)`

`

export const SearchDiv = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  column-gap: 5px;
  @media(max-width: 900px){
    width: 100%;
  }
`