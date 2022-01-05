import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Container, Content, LoginButton, UserInfo } from './styles';
import { Link } from "react-router-dom";


export default function Navbar() {

  return (
    <Container>
      <UserInfo></UserInfo>
      <Content></Content>
      <UserInfo>
        <Link to="/login">
          <LoginButton>Login</LoginButton>
        </Link>
      </UserInfo>
    </Container>
  );
}
