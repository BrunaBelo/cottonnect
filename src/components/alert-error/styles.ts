import styled from "styled-components";
import { Collapse } from '@material-ui/core';
import { Alert } from "@mui/material";

interface ErrorDivProps {
  width: number
}

export const CollapseError = styled(Collapse)<ErrorDivProps>`
  width: 70%;
  width: ${(props) => props.width}%;
`

export const ErrorAlert = styled(Alert)`
  width: 100%;
`
