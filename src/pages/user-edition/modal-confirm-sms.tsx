import react, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { TextField } from "@material-ui/core";
import { Actions, ButtonSMS, AlertMessage, CheckCellphone } from "./styles";

interface ModalProps {
  open: boolean,
  handleClose: () => void,
  action: (code: string) => Promise<Boolean>,
}

export default function ModalConfirmSMS({ open, handleClose, action }: ModalProps) {
  const [code, setCode] = useState<string>();
  const [validated, setValidated] = useState(false);
  const [notice, setNotice] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    setTimeout(() => {
      setNotice({ show: false, message: "", type: ""});
    }, 5000);
  }, [notice]);

  const runActionAndClose = async () => {
    const result = await action(code as string);

    if(result === true){
      setNotice({ show: true, message: "Celular validado com sucesso", type: "success" });
      setValidated(true);
      setTimeout(() => {
        handleClose();
      }, 1000);

    } else {
      setNotice({ show: true, message: "Código inválido", type: "error" });
    }
  }

  function buldingMessage() {
    if (notice.type === "success"){
      return (<AlertMessage severity="success">{notice.message}</AlertMessage>);
    }else {
      return (<AlertMessage severity="error">{notice.message}</AlertMessage>);
    }
  };

  return(
    <Dialog open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">

      {
        validated === false ?
          <>
            <DialogTitle>Confirme seu número de celular <CheckCellphone /></DialogTitle>
            { notice.show ? buldingMessage() : <></> }
            <DialogContent>
              <DialogContentText>
                Informe abaixo o código enviado via SMS para o número de celular cadastrado na sua conta.
              </DialogContentText>
            </DialogContent>
            <Actions>
              <TextField type="number"
                        InputProps={{inputProps: { maxLength: 10 }}}
                        variant="outlined"
                        onChange={(e) => setCode(e.target.value.toString())}
              >
              </TextField>
              <ButtonSMS onClick={runActionAndClose}>Validar</ButtonSMS>
            </Actions>
          </>
        :
          <>
           <DialogTitle>Sua conta foi verificada <CheckCellphone /></DialogTitle>
            { notice.show ? buldingMessage() : <></> }
          </>
      }
    </Dialog>
  )
}
