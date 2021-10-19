import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Routes from './routes/routes';
import { GlobalStyles } from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <GlobalStyles />

    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
