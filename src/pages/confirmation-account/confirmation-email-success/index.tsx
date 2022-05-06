import React from "react"
import { Container, IconSuccess, Main } from "./styles"

export default function ConfirmationEmailSuccess(){
  return(
    <Container>
      <Main>
        <h1></h1>
        <IconSuccess/>
        <div>
          <span>Sua conta foi confirmada com sucesso! 😁</span>
        </div>
        <div>
          <span>Agora é só fechar a página e voltar para a tela de entrar na conta.</span>
        </div>
      </Main>
    </Container>
  );
}

