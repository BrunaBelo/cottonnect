import React, {useState} from 'react';
import { 
  InputsCreateUser, 
  ImageCreateAccount, 
  Main, 
  InfoAboutUser, 
  UserInput, 
  UserInputMoreInfo,} from "./styles"

import ReactInputMask from "react-input-mask";
import {schemaUserInfos} from './yupSchemas';
import { changeInputValue, showErrors, validateForm } from '../../../shared/formConfigs/validate';

import ErrorObj from '../../../interfaces/errorObj';
import PopUpProps from '../../../interfaces/popUp';
import { defaultErrorsStep1, formatData, handleDataStep1 } from './handleData';
import PopUpContainer from '../Container';
import { nextStep } from '../Container/moveStep';
import { UserData } from '../../../interfaces/userData';

function FormPersonalInformation({index, componentState: [userInfo, setUserInfo]}: PopUpProps){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")
  const [cpf, setCpf] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [moreInfo, setMoreInfo] = useState("")
  const [errors, setErrors] = useState(defaultErrorsStep1())

  // Metodo para lidar com informacoes do usuario
  async function handleFormInfo(data: UserData, schema: any): Promise<void> {
    setErrors(defaultErrorsStep1())
    const resultForm = await validateForm(data, schema)

    if(resultForm === true){
      setUserInfo({
        name, 
        email, 
        password, 
        moreInfo,
        phoneNumber: formatData.phoneNumber(phoneNumber),
        cpf: formatData.cpf(cpf)
      })
      
      nextStep(index)
    }else{
      const newErrorObj = showErrors(resultForm as ErrorObj[], defaultErrorsStep1())
      setErrors(newErrorObj)
    }
  }

  function renderMain(): JSX.Element {
    return(
      <Main>
        <ImageCreateAccount>
          <img src="/images/jumping.png" alt="Criar Conta" />
        </ImageCreateAccount>
        <InputsCreateUser>
          <InfoAboutUser>
            
            <UserInput 
              name="name"
              error={errors.name.status} 
              helperText={errors.name.message} 
              required 
              value={name} 
              onChange={(e)=>changeInputValue(errors, e, setName)} 
              label="Nome" 
            />
            
            <UserInput 
              name="email"
              error={errors.email.status} 
              helperText={errors.email.message} 
              required 
              value={email} 
              onChange={(e)=>changeInputValue(errors, e, setEmail)} 
              label="Email" 
            />
            
            <ReactInputMask 
              name="phoneNumber"
              mask="(99)99999-9999" 
              value={phoneNumber} 
              onChange={(e)=>changeInputValue(errors, e, setphoneNumber)}
            >
              {() => 
                <UserInput 
                  error={errors.phoneNumber.status} 
                  helperText={errors.phoneNumber.message} 
                  required 
                  type="text" 
                  label="Telefone" 
                /> 
              } 
            </ReactInputMask>
            
            <ReactInputMask
              name="cpf"
              mask="999.999.999-99" 
              value={cpf} 
              onChange={(e)=>changeInputValue(errors, e, setCpf)}
            >
              {() => 
                <UserInput 
                  error={errors.cpf.status} 
                  helperText={errors.cpf.message} 
                  required 
                  type="text" 
                  label="CPF" 
                />
              }
            </ReactInputMask>
            
            <UserInput 
              name="password"
              error={errors.password.status} 
              helperText={errors.password.message} 
              required 
              value={password} 
              onChange={(e)=>changeInputValue(errors, e, setPassword)} 
              type="password" 
              label="Senha"  
            />
            
            <UserInput 
              name="confirmPassword"
              error={errors.confirmPassword.status} 
              helperText={errors.confirmPassword.message} 
              required 
              value={confirmPassword} 
              onChange={(e)=>changeInputValue(errors, e, setConfirmPassword)} 
              type="password" 
              label="Confirmar Senha" 
            />

          </InfoAboutUser>

          <UserInputMoreInfo 
            name="moreInfo"
            value={moreInfo} 
            onChange={(e)=>setMoreInfo(e.target.value)} 
            multiline 
            minRows="3" 
            maxRows="6" 
            label="Informações Adicionais" 
          />
        </InputsCreateUser>
        
      </Main>
    )
  }

  return (
    <PopUpContainer 
      index={index}
      title="Crie sua conta!"
      main={renderMain}
      handleFormValidation={handleFormInfo}
      formData={handleDataStep1(name, email, phoneNumber, cpf, password, confirmPassword, moreInfo)}
      schema = {schemaUserInfos}
    />
  );
};

export default FormPersonalInformation;
