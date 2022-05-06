import React, { useEffect } from "react";
import { useState } from "react";
import { Container, LoadingCircle, Main, SendLink } from "./styles";
import { AlertMessage } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { confirmationAccount } from "../../../service/user";

export default function ConfirmationEmail(){
  const navigate = useNavigate();
  const search = useLocation().search;
  const userId = new URLSearchParams(search).get("userId") || "";
  const [loading, setLoading] = useState(false);
  const [errorSend, setErrorSend] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setErrorSend(false);
    }, 8000);
  }, [errorSend]);

  async function sendLinkChangePassword() {
    setLoading(true);
    const result = await confirmationAccount(userId);
    if (result === true){
      navigate("/confirmar-conta/sucesso", { state: { userId } });
    }else{
      setErrorSend(true);
    }

    setLoading(false);
  }

  return(
    <Container>
      {
        errorSend ? <AlertMessage severity="error">{"Erro ao confirmar conta."}</AlertMessage> : <></>
      }
      <Main>
        <h1>Confirme seu email 😁</h1>
        <div>
          <p>Contas verificadas tem acesso a mais recursos do Cottonnect.
            Confirmando seu email você poderá ter acesso a funcionalidades como doar itens ou concorrer a doações.</p>
          <p>Para confirmar seu email é simples, basta clicar no botão abaixo. 😀</p>
        </div>

        <SendLink disabled={loading} onClick={() => sendLinkChangePassword()}>
          {
            loading ? <>Aguarde um momento... <LoadingCircle size={20} /></> : <>CONFIRMAR EMAIL</>
          }
        </SendLink>
      </Main>
    </Container>
  )
}

