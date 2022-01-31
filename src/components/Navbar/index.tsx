import React from 'react';
import { Main, LoginButton, Options, UserInfo, Login, PageOption } from './styles';
import { Link } from "react-router-dom";

interface ScreenStyle {
  dark?: boolean,
  actionButton?: boolean
}

export default function Navbar({dark = false, actionButton = false}: ScreenStyle) {

  return (
    <Main>
      <UserInfo>
        <Options>
          <Link to="/index">
            <PageOption dark={dark}>Início</PageOption>
          </Link>
          <Link to="/about">
            <PageOption dark={dark}>Sobre nós</PageOption>
          </Link>
        </Options>
        <Login>
          {
            actionButton ?
            <Link to="/create-account">
              <LoginButton dark={dark}>Cadastre-se</LoginButton>
            </Link>
            :
            <Link to="/login">
              <LoginButton dark={dark}>Login</LoginButton>
            </Link>
          }
        </Login>
      </UserInfo>
    </Main>
  );
}
