import React from "react";

import { IconButton, InputAdornment, InputLabel } from "@material-ui/core";
import {
  CurveVetor,
  Main,
  FormLogin,
  Password,
  FormBox,
  Email,
  LoginBtt,
  UserInput,
  CredentialActions,
  ButtonCredentialActions,
  LoginErrorMessage } from "./styles";

import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { login } from "../../service/user";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";

interface State {
  email: string;
  password: string;
  showPassword: boolean;
  showErrorMessage: boolean;
}

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = React.useState<State>({
    email: '',
    password: '',
    showPassword: false,
    showErrorMessage: false
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const validLogin = async (): Promise<boolean> => {
    if(values.email !== '' && values.password !== '') {
      const credentialsValid = await login(values.email, values.password)
      if (credentialsValid){
        return true
      }
    }
    return false
  }

  const checkLogin = async () => {
    setValues({...values, showErrorMessage: false})
    const valid = await validLogin()

    if(valid){
      navigate("/app/explorer")
    } else{
      setValues({...values, showErrorMessage: true})
    }
  }

  return (
    <Main>
      <Navbar dark={false} actionButton={true} />
      <FormLogin>
        <FormBox>
          <h1>Olá, bom te ver!</h1>
          <Email variant="standard">
            <InputLabel htmlFor="field-email">E-mail</InputLabel>
            <UserInput id="field-email"
                   type="email"
                   error={values.showErrorMessage}
                   value={values.email}
                   onChange={(e) => setValues({ ...values, email: e.target.value })}
                   onSubmit={() => checkLogin()}
                   onKeyDown={(e) => e.key === "Enter" ? checkLogin() : false}
            />
          </Email>

          <Password variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <UserInput
              error={values.showErrorMessage}
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              onKeyDown={(e) => e.key === "Enter" ? checkLogin() : false}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Password>

          {
            values.showErrorMessage ?
              <LoginErrorMessage>E-mail ou senha incorretos</LoginErrorMessage>
              :
              <></>
          }

          <LoginBtt type="button" onClick={() => { checkLogin() }}>Login</LoginBtt>

          <CredentialActions>
            <Link to="/forgot-account">
              <ButtonCredentialActions>Esqueceu a senha?</ButtonCredentialActions>
            </Link>
            <Link to="/create-account">
              <ButtonCredentialActions>Não possui conta? Cadastre-se!</ButtonCredentialActions>
            </Link>
          </CredentialActions>
        </FormBox>
      </FormLogin>

      <CurveVetor>
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
          <defs>
            <linearGradient id="gradient" x1="19%" y1="89%" x2="81%" y2="11%">
              <stop offset="5%" stop-color="#002bdcff"></stop><stop offset="95%" stop-color="#32ded4ff"></stop>
            </linearGradient>
          </defs>
          <path d="M 0,400 C 0,400 0,200 0,200 C 128.75,190.96428571428572 257.5,181.92857142857142 378,201 C 498.5,220.07142857142858 610.75,267.25 729,262 C 847.25,256.75 971.5,199.07142857142858 1091,180 C 1210.5,160.92857142857142 1325.25,180.46428571428572 1440,200 C 1440,200 1440,400 1440,400 Z"
           stroke="none" stroke-width="0" fill="url(#gradient)" className="transition-all duration-300 ease-in-out delay-150 path-0">
          </path>
        </svg>
      </CurveVetor>
    </Main>
  )
}
