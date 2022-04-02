import { Close } from "@material-ui/icons";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { CollapseError, ErrorAlert } from './styles'

interface AlertInterface {
  show: boolean,
  message: string,
  width?: number
}

function AlertErrorComponent({show, message, width = 100}: AlertInterface) {
  return(
    <CollapseError in={show} width={width}>
      <ErrorAlert
        severity="error"
        action = {
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            // onClick={() => {
            //   setAlertError({ show: false, message: '' })
            // }}
          >
          {/* <Close fontSize="inherit" /> */}
          </IconButton>
         }
         >{message}</ErrorAlert>
    </CollapseError>
  )
}

export { AlertErrorComponent }