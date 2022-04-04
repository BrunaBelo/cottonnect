import styled from "styled-components";
import { TextField } from '@mui/material';
import Select from 'react-select'
import { Attach2Outline } from '@styled-icons/evaicons-outline'
import { Photograph } from '@styled-icons/heroicons-outline'
import { Close } from '@styled-icons/evaicons-solid'
import { DonateHeart } from '@styled-icons/boxicons-regular'
import { CircularProgress } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  height: 100%;
`

export const Main = styled.div`
  width: 100%;
  padding: 30px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    opacity: .7;
    margin-bottom: 30px;
    text-transform: uppercase;
    font-size: 25px;
  }

  @media (max-width: 900px) {
    padding: 50px;
  }
`

export const FormAuction = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 15px;
  #uploadImg {
    display: none;
  }
`

export const AuctionInput = styled(TextField)`
  width: calc(50% - 8px);

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const AuctionInputSelect = styled(Select)`
  width: 100%;
  .basic-multi-select {
    height: 100px;
  }
`

export const BiddingInput = styled(TextField)`
  display: none;
`

export const AddFileBtt = styled.label`
  width: 100%;
  background-color: transparent;
  color: rgb(127,111,127);
  border-radius: 5px;
  padding: 12px 20px;
  transition: .5s;

  &:hover {
    cursor: pointer;
  }
`

export const DeleteIcon = styled(Close)`
  width: 20px;
  margin-left: 5px;

  &:hover {
    cursor: pointer;
  }
`

export const PicIcon = styled(Attach2Outline)`
  width: 20px;
  margin-bottom: 3px;
  margin-right: 9px;
`

export const FilesDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const FileInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--primary);
  opacity: .75;
  padding: 7px 10px;
  border-radius: 5px;
  font-size: 13px;
`

export const FileIcon = styled(Photograph)`
  width: 20px;
  margin-right: 10px;
`

export const ListPictures = styled.div`
  margin-top: 10px;
  padding: 5px 0px;
  display: flex;
  flex: 0;
  flex-direction: column;
  row-gap: 5px;
`

export const CreateAuctionBtt = styled.button`
  background-color: var(--primary);
  color: white;
  padding: 15px 10px;
  border-radius: 15px;
  width: 100%;
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
`

export const DonateIcon = styled(DonateHeart)`
  width: 20px;
`

export const LoadingCircle = styled(CircularProgress)`
  margin-left: 10px;
`