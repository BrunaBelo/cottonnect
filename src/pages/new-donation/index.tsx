import React, { useState, useEffect } from "react";

import LeftNavBar from "../../components/LeftNavBar";
import { changeInputValue, showErrors, validateForm } from "../../shared/formConfigs/validate";
import { defaultErrorsDonation } from "./handleData";
import {
  Container,
  Main,
  FormDonation,
  DonationInput,
  DonationInputSelect,
  AddFileBtt,
  PicIcon,
  ListPictures,
  FileIcon,
  FilesDiv,
  FileInfo,
  DeleteIcon,
  SubmitDonationBtt,
  DonateIcon
} from "./styles";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { LocalizationProvider } from "@mui/lab";
import { createDonation, getCategories } from "../../service/donation-categories";
import { DonationData } from "../../interfaces/donationData";
import selectCategory from "../../interfaces/select-category";
import { AlertErrorComponent } from "../../components/AlertError";
import { schemaDonation } from './yup-schema'
import ErrorObj from "../../interfaces/errorObj";
import savePhoto from "../../service/external-apis/cloudinary/save-photo";

interface AlertInterface {
  show: boolean,
  message: string
}

export default function NewDonation() {
  const [alertError, setAlertError] = useState({
    show: false,
    message: ''
  } as AlertInterface)
  const [title, setTitle] = useState("")
  const [closingDate, setClosingDate] = React.useState<Date | null>(
    new Date,
  );
  const [categories, setCategories] = useState([] as selectCategory[])
  const [photos, setPhotos] = useState(null as File[] | null)
  const [description, setDescription] = useState("")
  const [errors, setErrors] = useState(defaultErrorsDonation())
  const [categoryList, setCategoryList] = useState([] as selectCategory[])

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

  const handleChange = (newValue: Date) => {
    setClosingDate(newValue);
  }

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

  async function saveDonation(): Promise<boolean>{
    setErrors(defaultErrorsDonation())

    const responsePhotos = await savePhoto(photos as File[])

    const newDonation = {
      title,
      description,
      closingDate: closingDate?.toString(),
      photos: responsePhotos,
      categories: categories.map(item => item.value)
    } as DonationData

    const resultForm = await validateForm(newDonation, schemaDonation)

    if(resultForm == true) {
      try {
        await createDonation(newDonation);
        return true
      } catch (error) {
        setAlertError({ show: true, message: 'Erro ao criar Doação!' })
        setTimeout(() => {
          setAlertError({ show: false, message: '' })
        }, 5000)

        return false
      }
    }else{
      console.log(resultForm)
      const newErrorObj = showErrors(resultForm as ErrorObj[], defaultErrorsDonation())
      setErrors(newErrorObj)
    }

    return false
  }

  return(
    <Container>
      <LeftNavBar />

      <Main>
        <h1>Vamos doar? 🥰</h1>
        <FormDonation>
          {
            alertError.show ?
              <AlertErrorComponent show={alertError.show} message={alertError.message}/>
            :
              <></>
          }
          <DonationInput
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
              renderInput={(params) => <DonationInput
                {...params}
                name='closingDate'
                error={errors.closingDate.status}
                helperText={errors.closingDate.message}
                />}
            />
          </LocalizationProvider>

          <DonationInput
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

          <DonationInputSelect
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
            <input
              type='file'
              accept="image/png, image/gif, image/jpeg"
              id='uploadImg'
              name='uploadImg'
              multiple onChange={e => {console.log(e.target.value); addPhotos(e.target.files as File[] | null)}}
            />
            <AddFileBtt htmlFor="uploadImg">
              <PicIcon/>
              Anexar Fotos
            </AddFileBtt>

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

          <SubmitDonationBtt onClick={() => saveDonation()}>Doar <DonateIcon/></SubmitDonationBtt>

        </FormDonation>
      </Main>
    </Container>
  )
}

