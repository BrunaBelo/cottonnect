import react from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

interface ModalProps {
  open: boolean,
  handleOpen: () => void,
  handleClose: () => void,
  action: () => Promise<void>,
}

export default function ModalConfirm({ open, handleOpen, handleClose, action }: ModalProps) {
  const runActionAndClose = async () => {
    await action();
    handleClose();
  }

  return(
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title"></DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Você tem certeza que deseja executar essa ação?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>Não</Button>
        <Button onClick={runActionAndClose}>Sim</Button>
      </DialogActions>
    </Dialog>
  )
}
