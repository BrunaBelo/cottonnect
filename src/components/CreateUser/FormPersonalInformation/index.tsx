import { BttSpace, InfoAboutUser, NextBtt, NextIcon, Title, TopDiv, UserInput, UserInputMoreInfo } from "./styles"
import React, {useState} from 'react';

import { InputsCreateUser, ImageCreateAccount, Main, Container } from './styles';
import ReactInputMask from "react-input-mask";
import * as yup from "yup";
import { setLocale } from 'yup';

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
  const [errors, setErrors] = useState(inputErrors())

  setLocale({
    string: {
      min: ({ min, path }) => ({ path,  message: `Deve ter no mínimo ${min} caracteres`}),
      max: ({ max, path }) => ({ path,  message: `Deve ter no máximo ${max} caracteres`}),
      email: ({ path }) => ({ path,  message: `Email inválido`})
    },
    mixed: {
      required: ({ path }) => ({ path, message: 'Campo obrigatório' }),
      oneOf: ({ path }) => ({ path, message: 'Senhas devem ser iguais' })
    }
  });

  const schema = yup.object().shape({
    name: yup.string().required().min(3),
    email: yup.string().email().required(),
    phone: yup.string().required().min(11).max(11, "Telefone inválido"),
    cpf: yup.string().required().min(11).max(11, "CPF inválido"),
    password: yup.string().required().min(8).max(30),
    confirmPassword: yup.string().required().oneOf([yup.ref('password'), null]),
    moreInfo: yup.string().max(280)
  })

  function sanitazeDataStep1() {
    return {
      name,
      email,
      phone: phone.replace("(", "").replace(")", "").replaceAll("_", "").replace("-", ""),
      cpf: cpf.replaceAll(".", "").replace("-", "").replaceAll("_", ""),
      password,
      confirmPassword,
      moreInfo
    }
  }

  function inputErrors() {
    return {
      name: {status: false, message: ""},
      email: {status: false, message: ""},
      phone: {status: false, message: ""},
      cpf: {status: false, message: ""},
      password: {status: false, message: ""},
      confirmPassword: {status: false, message: ""}
    }
  }

  function showErrors(err: any) {
    interface ErrorObj {
      path: string,
      message: string
    }
    let newErrorObj = inputErrors()

    err.errors.forEach(
      (e: ErrorObj) => {
        console.log('oioioioioi', newErrorObj[e.path as keyof typeof errors])
        if(!newErrorObj[e.path as keyof typeof errors].status){
          newErrorObj[e.path as keyof typeof errors] = {status: true, message: e.message}
        }
      }
    )

    setErrors(newErrorObj)
  }

  const validateForm = async() => {
    const data = sanitazeDataStep1()
    let result = true
    let errorMessage = ""

    await schema.validate((data), { abortEarly: false })
      .then(() => {
        setErrors(inputErrors())
        console.log('proxima div')
        //nextDivFunc(index)
      })
      .catch((err) => {
        setErrors(inputErrors())
        showErrors(err)
      })
  }

  console.log(errors)

  return (
    <Container>
      
      <TopDiv>
        <BttSpace></BttSpace>
        <Title>
          <h1>Crie sua Conta!</h1>
        </Title>
        <BttSpace>
          <NextBtt type="button" onClick={() => validateForm()}>
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
