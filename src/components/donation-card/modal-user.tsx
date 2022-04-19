import react from "react";
import { Modal, Typography } from "@mui/material";
import { UserData } from "../../interfaces/user-data";
import { WhatsappLink, WhatsappIcon, EmailIcon, BoxModal, TelIcon, UserIcon, InfoIcon } from "./styles";

interface ModalProps {
  open: boolean,
  handleOpen: () => void,
  handleClose: () => void,
  user: UserData
}


export default function UserModal({ open, handleOpen, handleClose, user }: ModalProps) {
  const defaultMessage = 'Ganhei'

  return(
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxModal>
        <h2>Dados do Usuário</h2>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {
            user ?
              <>
                <p><UserIcon/>{user.name}</p>
                <p><EmailIcon/>{user.email}</p>
                <p><TelIcon/>{user.phoneNumber}</p>
                {
                  user.additionalInformation != null && user.additionalInformation.length > 0 ?
                    <p><InfoIcon/>{user.additionalInformation}</p>
                    :
                    <></>
                }
                <WhatsappLink
                  href={`https://api.whatsapp.com/send?phone=55${user.phoneNumber}&text=${defaultMessage}`}
                  target='blank'
                >
                  <WhatsappIcon/>Chama no zap!
                </WhatsappLink>
              </>
            :
              <></>
          }
        </Typography>
      </BoxModal>
    </Modal>
  )
}

