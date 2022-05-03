import React, { useEffect } from "react";
import ErrorObj from "../../../interfaces/error-obj";
import { useState } from "react";
import { changeInputValue, showErrors, validateForm } from "../../../shared/form-configs/validate";
import { Container, EmailInput, LoadingCircle, Main, SendLink } from "./styles";
import { forgotAccount } from "../../../service/user";
import { AlertMessage } from "./styles";
import { useNavigate } from "react-router-dom";
import { ForgotAccountSchema } from "./yup-schema";

export default function ForgotAccount(){
  const navigate = useNavigate();
  const defaultErrors = { email: { status: false, message: "" }};
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState(defaultErrors);
  const [loading, setLoading] = useState(false);
  const [errorSend, setErrorSend] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setErrorSend(false);
    }, 8000);
  }, [errorSend]);

  async function sendLinkChangePassword() {
    setErrors(defaultErrors);
    setLoading(true);

    const isValidForm = await validateForm({ email }, ForgotAccountSchema);
    if(isValidForm === true){
      const result = await forgotAccount(email);
      if (result === true){
        navigate("/recuperar-conta/sucesso", { state: { email } });
      }else{
        setErrorSend(true);
      }
    }else {
      setErrors(showErrors(isValidForm as ErrorObj[], defaultErrors));
    }

    setLoading(false);
  }

  return(
    <Container>
      {
        errorSend ? <AlertMessage severity="error">{"Erro enviar link para recuperação da conta. Confira se o e-mail esta correto."}</AlertMessage> : <></>
      }
      <Main>
        <h1>Esqueci minha senha</h1>
        <div>
          <h2>Não se preocupe, podemos te ajudar a recuperá-la.</h2>
          <h3>Com qual e-mail você se cadastrou?</h3>
        </div>

        <EmailInput
          name="email"
          type="email"
          label="Email"
          error={errors.email.status}
          helperText={errors.email.message}
          required
          value={email}
          onChange={(e)=>changeInputValue(errors, e, setEmail)}
          onKeyDown={(e) => e.key === "Enter" ? sendLinkChangePassword() : false}
        />

        <span>Enviaremos um link que expira em 1 hora para que você possa redefinir sua senha.</span>


        <SendLink disabled={loading} onClick={() => sendLinkChangePassword()}>
          {
            loading ? <>Aguarde um momento... <LoadingCircle size={20} /></> : <>ENVIAR</>
          }
        </SendLink>
      </Main>
    </Container>
  )
}

