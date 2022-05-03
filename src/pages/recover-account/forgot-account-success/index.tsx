import React from "react"
import { useLocation } from "react-router-dom";
import { Container, IconSuccess, Main } from "./styles"

interface State {
  email: string;
}

export default function ForgotAccountSuccess(){
  const state = useLocation().state as State;

  return(
    <Container>
      <Main>
        <h1>Esqueci minha senha</h1>
        <IconSuccess/>
        <div>
          <h2>Enviamos um link para</h2>
          <h3>{state?.email}</h3>
        </div>
        <div>
          <span>Próximos passos:</span>
          <ul>
            <li>Abrir o link enviado para seu e-mail (conferir se ele não foi parar na pasta de spam);</li>
            <li>Definir nova senha;</li>
            <li>Clicar em entrar na conta, usar seu e-mail cadastrado e a nova senha.</li>
          </ul>
        </div>
      </Main>
    </Container>
  );
}

