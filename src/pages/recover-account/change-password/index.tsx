import React, { useEffect } from "react";
import ErrorObj from "../../../interfaces/error-obj";
import { useState } from "react";
import { changeInputValue, showErrors, validateForm } from "../../../shared/form-configs/validate";
import { Container, PasswordInput, LoadingCircle, Main, ChangePasswordButton, IconLockPassword, AlertMessage } from "./styles";
import { useNavigate } from "react-router-dom";
import { ChangePasswordSchema } from "./yup-schema";
import { changePassword } from "../../../service/user";
import { useLocation } from "react-router-dom";

export default function ChangePassword(){
  const navigate = useNavigate();
  const search = useLocation().search;
  const email = new URLSearchParams(search).get("email") || "";
  const code = new URLSearchParams(search).get("code") || "";

  const defaultErrors = {
    password: { status: false, message: "" },
    confirmPassword: { status: false, message: "" }
  };

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState(defaultErrors);
  const [loading, setLoading] = useState(false);
  const [errorChangePassword, setErrorChangePassword] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setErrorChangePassword(false);
    }, 8000);
  }, [errorChangePassword]);

  async function changeUserPassword() {
    setErrors(defaultErrors);
    setLoading(true);

    const isValidForm = await validateForm({ password, confirmPassword }, ChangePasswordSchema);
    if(isValidForm === true){
      const result = await changePassword(email, password, code);
      if (result == true){
        navigate("/login");
      }else{
        setErrorChangePassword(true);
      }
    }else {
      setErrors(showErrors(isValidForm as ErrorObj[], defaultErrors));
    }

    setLoading(false);
  }

  return(
    <Container>
      {
        errorChangePassword ? <AlertMessage severity="error">{"Erro ao tentar alterar senha. Tente novamente mais tarde."}</AlertMessage> : <></>
      }
      <Main>
        <IconLockPassword />
        <div>
          <h1>Definir nova senha para:</h1>
          <h2>{email}</h2>
        </div>

        <PasswordInput
          name="password"
          error={errors.password.status}
          helperText={errors.password.message}
          required
          value={password}
          onChange={(e)=>changeInputValue(errors, e, setPassword)}
          type="password"
          label="Nova senha"
        />

        <PasswordInput
          name="confirmPassword"
          error={errors.confirmPassword.status}
          helperText={errors.confirmPassword.message}
          required
          value={confirmPassword}
          onChange={(e)=>changeInputValue(errors, e, setConfirmPassword)}
          type="password"
          label="Confirmar nova senha"
        />

        <span>*Certifique-se de que tenha pelo menos 8 caracteres.</span>


        <ChangePasswordButton disabled={loading} onClick={() => changeUserPassword()}>
          {
            loading ? <>Aguarde um momento... <LoadingCircle size={20} /></> : <>ALTERAR</>
          }
        </ChangePasswordButton>
      </Main>
    </Container>
  )
}

