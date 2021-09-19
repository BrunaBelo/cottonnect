import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { UserAccount } from './styles';

export default function Navbar() {

  return (
    <div className="navbar">
      <AppBar position="static" style={{ background: 'var(--primary)'}}>
        <Toolbar>
          <UserAccount>
            <Button className="button-login" color="inherit">Login</Button>
          </UserAccount>
        </Toolbar>
      </AppBar>
    </div>
  );
}
