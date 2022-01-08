import { BttSpace, InfoAboutUser, NextBtt, NextIcon, Title, TopDiv, UserInput, UserInputMoreInfo } from "./styles"
import React, {useState} from 'react';

import { InputsCreateUser, ImageCreateAccount, Main, Container } from './styles';
import ReactInputMask from "react-input-mask";
import * as yup from "yup";
import { setLocale } from 'yup';
import Input from "../../../shared/components/input";


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

  setLocale({
    string: {
      min: ({ min, path }) => ({ path,  message: `Deve ter no mínimo ${min} caracteres`}),
      max: ({ max, path }) => ({ path,  message: `Deve ter no máximo ${max} caracteres`})
    },
    mixed: {
      required: ({ path }) => ({ path, message: 'Campo obrigatório' }),
      oneOf: ({ path }) => ({ path, message: 'Senhas devem ser iguais' })
    }
  });

  const schema = yup.object().shape({
    name: yup.string().required().min(3),
    email: yup.string().email().required(),
    phone: yup.string().required().min(11).max(11),
    cpf: yup.string().required().min(11).max(11),
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

  const validateForm = async() => {
    const data = sanitazeDataStep1()
    let result = true
    let errorMessage = ""

    return schema.validate((data), { abortEarly: false })
      .then(() => {
        console.log('proxima div')
      })
      .catch((err) => {
        console.log("erro", err.errors)
      })

    //console.log(0, data)
    //nextDivFunc(index)
  }

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
            
            <UserInput required value={name} onChange={(e)=>setName(e.target.value)} label="Nome" />
            <UserInput required value={email} onChange={(e)=>setEmail(e.target.value)} label="Email" />
            <ReactInputMask mask="(99)99999-9999" value={phone} onChange={(e)=>setPhone(e.target.value)}>
              {() => <UserInput required type="text" label="Telefone" /> } 
            </ReactInputMask>
            <ReactInputMask mask="999.999.999-99" value={cpf} onChange={(e)=>setCpf(e.target.value)}>
              {() => <UserInput required type="text" label="CPF" />}
            </ReactInputMask>
            <UserInput required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" label="Senha"  />
            <UserInput required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} type="password" label="Confirmar Senha" />
          </InfoAboutUser>
          <UserInputMoreInfo value={moreInfo} onChange={(e)=>setMoreInfo(e.target.value)} multiline minRows="3" maxRows="6" label="Informações Adicionais" />
        </InputsCreateUser>

      </Main>

    </Container>
  );
};

export default FormPersonalInformation;
