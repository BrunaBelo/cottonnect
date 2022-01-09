import React, {useState} from 'react';
import { 
  InputsCreateUser, 
  ImageCreateAccount, 
  Main, 
  Container, 
  BttSpace, 
  InfoAboutUser, 
  NextBtt, 
  NextIcon, 
  Title, 
  TopDiv, 
  UserInput, 
  UserInputMoreInfo } from "./styles"

import ReactInputMask from "react-input-mask";
import {schemaUserInfos} from './yupSchemas';
import { showErrors, validateForm } from '../../../shared/formConfigs/validate';

import ErrorObj from '../../../interfaces/errorObj';
import { defaultErrorsStep1, handleDataStep1 } from './handleData';
interface Props {
  nextDivFunc: (currentDiv: number) => void,
  index: number
}

function FormPersonalInformation({nextDivFunc, index}: Props){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [cpf, setCpf] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [moreInfo, setMoreInfo] = useState("")
  const [errors, setErrors] = useState(defaultErrorsStep1())

  // Metodo para lidar com informacoes do usuario
  async function handleFormInfo(data: object, schema: any) {
    setErrors(defaultErrorsStep1())
    const resultForm = await validateForm(data, schema)
    if(resultForm === true){
      nextDivFunc(index)
    }else{
      const newErrorObj = showErrors(resultForm as ErrorObj[], defaultErrorsStep1())
      setErrors(newErrorObj)
    }
  }

  return (
    <Container>
      
      <TopDiv>
        <BttSpace></BttSpace>
        <Title>
          <h1>Crie sua Conta!</h1>
        </Title>
        <BttSpace>
          <NextBtt 
            type="button" 
            onClick=
              {
                () => handleFormInfo(
                  handleDataStep1(name, email, phone, cpf, password, confirmPassword, moreInfo), schemaUserInfos)
              }
          >
            <NextIcon/>
          </NextBtt>
        </BttSpace>
      </TopDiv>

      <Main>
        <ImageCreateAccount>
          <img src="/images/jumping.png" alt="Criar Conta" />
        </ImageCreateAccount>
        <InputsCreateUser>
          <InfoAboutUser>
            
            <UserInput 
              error={errors.name.status} 
              helperText={errors.name.message} 
              required 
              value={name} 
              onChange={(e)=>setName(e.target.value)} 
              label="Nome" 
            />
            
            <UserInput 
              error={errors.email.status} 
              helperText={errors.email.message} 
              required 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)} 
              label="Email" 
            />
            
            <ReactInputMask 
              mask="(99)99999-9999" 
              value={phone} 
              onChange={(e)=>setPhone(e.target.value)}
            >
              {() => 
                <UserInput 
                  error={errors.phone.status} 
                  helperText={errors.phone.message} 
                  required 
                  type="text" 
                  label="Telefone" 
                /> 
              } 
            </ReactInputMask>
            
            <ReactInputMask 
              mask="999.999.999-99" 
              value={cpf} 
              onChange={(e)=>setCpf(e.target.value)}
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
              error={errors.password.status} 
              helperText={errors.password.message} 
              required 
              value={password} 
              onChange={(e)=>setPassword(e.target.value)} 
              type="password" 
              label="Senha"  
            />
            
            <UserInput 
              error={errors.confirmPassword.status} 
              helperText={errors.confirmPassword.message} 
              required 
              value={confirmPassword} 
              onChange={(e)=>setConfirmPassword(e.target.value)} 
              type="password" 
              label="Confirmar Senha" 
            />

          </InfoAboutUser>

          <UserInputMoreInfo 
            value={moreInfo} 
            onChange={(e)=>setMoreInfo(e.target.value)} 
            multiline 
            minRows="3" 
            maxRows="6" 
            label="Informações Adicionais" 
          />
        </InputsCreateUser>
        
      </Main>
    </Container>
  );
};

export default FormPersonalInformation;
