import React, { useState, useEffect } from "react";

import LeftNavBar from "../../components/LeftNavBar";
import { changeInputValue } from "../../shared/formConfigs/validate";
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
import { getCategories } from "../../service/donation-categories";

interface selectCategory {
  value: string,
  label: string
}

export default function NewDonation() {
  const [title, setTitle] = useState("")
  const [closingData, setClosingData] = React.useState<Date | null>(
    null,
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

    getCategoriesFromApi()
  })

  const handleChange = (newValue: Date) => {
    setClosingData(newValue);
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

  return(
    <Container>
      <LeftNavBar />

      <Main>
        <h1>Vamos doar? 🥰</h1>
        <FormDonation>

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
              value={closingData}
              onChange={(e) => handleChange(e as Date)}
              renderInput={(params) => <DonationInput {...params} />}
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
              multiple onChange={e => addPhotos(e.target.files as File[] | null)}
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

          <SubmitDonationBtt>Doar <DonateIcon/></SubmitDonationBtt>

        </FormDonation>

      </Main>
    </Container>
  )
}

