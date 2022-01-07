import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Container, LoginButton, UserInfo } from './styles';
import { Link } from "react-router-dom";


export default function Navbar() {

  return (
    <Container>
      <UserInfo>
        <Link to="/login">
          <LoginButton>Login</LoginButton>
        </Link>
      </UserInfo>
    </Container>
  );
}
