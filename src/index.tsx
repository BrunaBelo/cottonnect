import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routes';
import { GlobalStyles } from './styles/GlobalStyles';
import './shared/yupConfigs/locales'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);
