import React, { useState, useEffect } from "react";

import LeftNavBar from "../../components/left-nav-bar";
import { changeInputValue, showErrors, validateForm } from "../../shared/form-configs/validate";
import { defaultErrorsAuction } from "./handle-data";
import {
  Container,
  Main,
  FormAuction,
  AuctionInput,
  AuctionInputSelect,
  AddFileBtt,
  PicIcon,
  ListPictures,
  FileIcon,
  FilesDiv,
  FileInfo,
  DeleteIcon,
  CreateAuctionBtt,
  DonateIcon,
  LoadingCircle
} from "./styles";

import { useNavigate } from "react-router-dom";
import { LocalizationProvider } from "@mui/lab";
import { getCategories } from "../../service/donation-categories";
import { AuctionFormData } from "../../interfaces/auction-form-data";
import { AlertErrorComponent } from "../../components/alert-error";
import { schemaAuction } from './yup-schema'
import selectCategory from "../../interfaces/select-category";
import ErrorObj from "../../interfaces/error-obj";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { createAuction } from "../../service/auction";
import { TextField } from "@mui/material";

interface AlertInterface {
  show: boolean,
  message: string
}

export default function NewAuction() {
  const navigate = useNavigate();
  const [alertError, setAlertError] = useState({
    show: false,
    message: ''
  } as AlertInterface)
  const [title, setTitle] = useState("")
  const [closingDate, setClosingDate] = React.useState<Date | null>(
    new Date,
  );
  const [categories, setCategories] = useState([] as selectCategory[])
  const [photos, setPhotos] = useState([] as File[] | null)
  const [description, setDescription] = useState("")
  const [errors, setErrors] = useState(defaultErrorsAuction())
  const [categoryList, setCategoryList] = useState([] as selectCategory[])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getCategoriesFromApi(){
      try{
        const { data } = await getCategories()
        const dataAux = data.map((category: any): selectCategory => (
          { "value": category.id, "label": category.name }
        ))

        setCategoryList(dataAux)
      }catch{
        console.log('ERRO AO BUSCAR CATEGORIAS')
      }
    }
    if(categoryList.length == 0){
      getCategoriesFromApi()
    }
  })

  const addPhotos = (files: File[] | null) => {
    if(photos == null){
      setPhotos(files)
      return
    }
    let photosAux = Array.from(photos)
    if(!files){
      return
    }
    Array.from(files).forEach(element => {
      photosAux.push(element)
    })
    setPhotos(photosAux)
  }

  const removeFile = (file: File) => {
    if (photos != null){
      var photos_aux = photos
      var filtered = Array.from(photos_aux).filter(function(value, index, arr){
        return value != file;
      });
      setPhotos(filtered)
    }
  }

  async function saveAuction(): Promise<boolean>{
    setErrors(defaultErrorsAuction())

    const newAuction = {
      title,
      description,
      closingDate: closingDate?.toString(),
      photos: photos,
      categories: categories.map(item => item.value)
    } as AuctionFormData

    const resultForm = await validateForm(newAuction, schemaAuction)

    if(resultForm == true) {
      setLoading(true)
      try {
        const auctionCreated = await createAuction(newAuction);
        setLoading(false)
        navigate(`/app/leiloes/${auctionCreated.data.id}`, { state: { successMessage: 'Leilão cadastrado com sucesso.', showMessage: true } });
        return true
      } catch (error) {
        console.log(error)
        setAlertError({ show: true, message: 'Erro ao criar Leilão!' })
        setTimeout(() => {
          setAlertError({ show: false, message: '' })
        }, 5000)

        setLoading(false)
        return false
      }

    }else{
      console.log(resultForm)
      const newErrorObj = showErrors(resultForm as ErrorObj[], defaultErrorsAuction())
      setErrors(newErrorObj)
    }

    return false
  }

  return(
    <Container>
      <LeftNavBar />

      <Main>
        <h1>Vamos doar? 🥰</h1>
        <FormAuction>
          {
            alertError.show ?
              <AlertErrorComponent show={alertError.show} message={alertError.message}/>
            :
              <></>
          }
          <AuctionInput
              name="title"
              error={errors.title.status}
              helperText={errors.title.message}
              required
              value={title}
              onChange={(e)=>changeInputValue(errors, e, setTitle)}
              label="Título"
            />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Fechamento do leilão"
              inputFormat="dd/MM/yyyy"
              minDate={new Date()}
              value={closingDate}
              onChange={(e) => changeInputValue(errors, {target: {value: e, name: 'closingDate'}}, setClosingDate)}
              renderInput={(params) => <AuctionInput
                {...params}
                name='closingDate'
                error={errors.closingDate.status}
                helperText={errors.closingDate.message}
                />}
            />
          </LocalizationProvider>

          <AuctionInput
            name="description"
            error={errors.description.status}
            helperText={errors.description.message}
            required
            value={description}
            multiline
            minRows="3"
            maxRows="6"
            onChange={(e)=>changeInputValue(errors, e, setDescription)}
            label="Descrição"
            fullWidth
          />

          <AuctionInputSelect
            isMulti
            name="categories"
            value={categories}
            options={categoryList}
            onChange={(e) => setCategories(e as selectCategory[])}
            className="basic-multi-select"
            placeholder="Selecionar Categorias"
            styles={{control: (styles) => ({
              ...styles, padding: '10px 0'
            }), option: (styles) => ({
              ...styles, color: 'var(--primary)'
            }),
            multiValue: (styles) => ({
              ...styles,
              backgroundColor: 'var(--primary)'
            }),
            multiValueLabel: (styles) => ({
              ...styles,
              color: 'white',
              fontWeight: 'bold',
              textTransform: 'lowercase'
            })}}
          />

          <FilesDiv>
            <TextField
              error={errors.photos.status}
              helperText={errors.photos.message}
              type='file'
              inputProps={{ accept: 'image/png, image/gif, image/jpeg', multiple: 'true' }}
              id='uploadImg'
              name='uploadImg'
              onChange={e => {console.log(e.target.value); addPhotos((e.target as HTMLInputElement).files as File[] | null)}}
              InputProps={{
                endAdornment: (
                  <>
                    <AddFileBtt htmlFor="uploadImg">
                      <PicIcon/>
                      Anexar Fotos
                    </AddFileBtt>
                  </>
                ),
              }}
            />


            <ListPictures>
              {
                photos == null ? <></> :
                Array.from(photos).map((photo) => {
                  return(
                    <FileInfo>
                      <span>
                        <FileIcon/>
                        {photo.name}
                      </span>
                      <span>
                        {(photo.size/1000).toFixed(2)} Kb
                        <DeleteIcon onClick={() => removeFile(photo)}/>
                      </span>
                    </FileInfo>
                  )
                })
              }
            </ListPictures>
          </FilesDiv>

          <CreateAuctionBtt disabled={loading} onClick={() => saveAuction()}>
            {
              loading ? <>Criando leilão... <LoadingCircle size={20} /></> : <>Doar <DonateIcon/></>
            }
          </CreateAuctionBtt>

        </FormAuction>
      </Main>
    </Container>
  )
}

