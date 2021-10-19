import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormInfoAddress from '../components/CreateUser/FormInfoAddress';
import FormInfoPhone from "../components/CreateUser/FormInfoPhone";
import FormPersonalInformation from "../components/CreateUser/FormPersonalInformation";
import FormSuccess from "../components/CreateUser/FormSuccess";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={FormPersonalInformation} />
      <Route path='/criar-conta/endereco' component={FormInfoAddress} />
      <Route path='/criar-conta/contato' component={FormInfoPhone} />
      <Route path='/criar-conta/sucesso' component={FormSuccess} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
