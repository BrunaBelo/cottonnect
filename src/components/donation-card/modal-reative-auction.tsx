import react, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { LocalizationProvider } from "@mui/lab";
import { ActionReactive, ButtonReactive, DateInput } from "./styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

interface ModalProps {
  open: boolean,
  handleClose: () => void,
  action: (closingDate: Date) => Promise<void>
}

export default function ModalReactiveAuction({ open, handleClose, action }: ModalProps) {
  const [closingDate, setClosingDate] = useState<Date>(new Date(new Date().setDate(new Date().getDate() + 1)));

  const runActionAndClose = async () => {
    await action(closingDate);
    handleClose();
  }

  return(
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Reativar leilão</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Insira uma nova data para o fechamento do leilão.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <ActionReactive>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Fechamento do leilão"
              inputFormat="dd/MM/yyyy"
              minDate={new Date().setDate(new Date().getDate() + 1)}
              value={closingDate}
              onChange={(e) => setClosingDate(new Date(e as number))}
              renderInput={(params) => <DateInput
                {...params}
                name='closingDate'
              />}
            />
          </LocalizationProvider>
          <ButtonReactive onClick={runActionAndClose}>Reativar</ButtonReactive>
        </ActionReactive>
      </DialogActions>
    </Dialog>
  )
}
