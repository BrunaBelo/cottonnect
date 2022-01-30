import React, { useState } from "react";

import { IconButton, Input, InputAdornment, InputLabel, TextField } from "@material-ui/core";
import { CurveVetor, Main, FormLogin, Password, FormBox, Email, LoginBtt, UserInput, CredentialActions, ButtonCredentialActions } from "./styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Navbar from "../Navbar";

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

export default function Login() {
  const [values, setValues] = React.useState<State>({
    email: '',
    password: '',
    showPassword: false,
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
                   value={values.email}
                   onChange={(e) => setValues({ ...values, email: e.target.value })} 
            />
          </Email>

          <Password variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <UserInput
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
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

          <LoginBtt>Login</LoginBtt>

          <CredentialActions>
            <ButtonCredentialActions>Esqueceu a senha?</ButtonCredentialActions>
            <ButtonCredentialActions>Não possui conta? Cadastre-se!</ButtonCredentialActions>
          </CredentialActions>
        </FormBox>
      </FormLogin>

      <CurveVetor>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#6A81D1" fill-opacity="1" d="M0,96L80,112C160,128,320,160,480,186.7C640,213,800,235,960,224C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </CurveVetor>
    </Main>
  )
}
