import styled from "styled-components";
import { CircularProgress } from '@material-ui/core';
import { MenuItem, Select, TextField } from '@mui/material';
import { Save } from "@styled-icons/bootstrap/"
import { User } from '@styled-icons/boxicons-regular';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 100px;
  width: 100%;
  height: 100%;

  h2 {
    color: var(--primary);
    margin-bottom: 50px;
  }
`

export const UpdateUser = styled.button`
  background-color: var(--primary);
  color: white;
  padding: 15px 10px;
  border-radius: 15px;
  width: 82%;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => props.disabled ? '0.60' : '1'};
  &:hover {
    cursor: ${(props) => props.disabled ? 'default' : 'pointer'};
    opacity: .6;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const EditIcon = styled(Save)`
  width: 16px;
  margin-left: 10px;
`

export const LoadingCircle = styled(CircularProgress)`
  margin-left: 10px;
`

export const Options = styled(Select)`
  text-transform: capitalize;
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 3px;
`

export const Item = styled(MenuItem)`
  text-transform: capitalize;
`

export const UserIcon = styled(User)`
  width: 26px;
  margin-bottom: 7px;
`

export const EditUserInput = styled(TextField)`
  width: 100%;
`

export const FormUpdateUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  row-gap: 20px;
  column-gap: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const EditInput = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const EditAdditionalInformationInput = styled.div`
  width: 82%;
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
  }
`
