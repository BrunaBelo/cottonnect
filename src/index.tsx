import React from 'react';
import ReactDOM from 'react-dom';
import CreateUser from './components/CreateUser';
import Navbar from './components/Navbar';
import { GlobalStyles } from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <GlobalStyles />
    <CreateUser />
  </React.StrictMode>,
  document.getElementById('root')
);
