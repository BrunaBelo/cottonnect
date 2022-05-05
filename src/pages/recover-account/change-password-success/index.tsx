import React from "react"
import { Container, IconSuccess, Main } from "./styles"

export default function ChangePasswordSuccess(){

  return(
    <Container>
      <Main>
        <h1>DEFINIR NOVA SENHA</h1>
        <IconSuccess/>
        <div>
          <span>Sua senha foi alterada com sucesso! 😁</span>
        </div>
        <div>
          <span>Agora é só fechar a página e voltar para a tela de entrar na conta.</span>
        </div>
      </Main>
    </Container>
  );
}

