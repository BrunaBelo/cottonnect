import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateUser from "./pages/create-user";
import Login from "./pages/login";
import AuctionDetails from "./pages/auction-details";
import Explorer from "./pages/explorer";
import Home from "./pages/home";
import Logout from "./pages/logout";
import NewAuction from "./pages/new-auction";
import ProtectedRoute from "./components/protected-route";
import GuestRoute from "./components/guest-route"
import MyDonations from "./pages/my-donations";
import WonAuctions from "./pages/won-auctions";
import UserEdition from "./pages/user-edition";
import ForgotAccount from "./pages/forgot-account";
import ForgotAccountSuccess from "./pages/forgot-account-success";

export default function AppRoutes(){

  const setAsProtected = (Component: JSX.Element) => {
    return <ProtectedRoute component={Component} />
  }

  const setAsGuest = (Component: JSX.Element) => {
    return <GuestRoute component={Component} />
  }

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={setAsGuest(<Home/>)}/>
        <Route path="/login" element={setAsGuest(<Login/>)}/>
        <Route path="/create-account" element={setAsGuest(<CreateUser/>)}/>
        <Route path="/recuperar-conta" element={setAsGuest(<ForgotAccount/>)}/>
        <Route path="/recuperar-conta/sucesso" element={setAsGuest(<ForgotAccountSuccess/>)}/>
        <Route path="/about"/>
        <Route path="/app">
          <Route path="logout" element={setAsProtected(<Logout/>)}/>
          <Route path="minha-conta" element={setAsProtected(<UserEdition/>)}/>
          <Route path="explorer" element={setAsProtected(<Explorer/>)}/>
          <Route path="novo-leilao" element={setAsProtected(<NewAuction/>)}/>
          <Route path="leiloes/:id" element={setAsProtected(<AuctionDetails/>)}/>
          <Route path="minhas-doacoes" element={setAsProtected(<MyDonations/>)}/>
          <Route path="leiloes-ganhos" element={setAsProtected(<WonAuctions/>)}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
