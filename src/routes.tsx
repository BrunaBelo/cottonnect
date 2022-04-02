import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateUser from "./pages/CreateUser";
import Login from "./pages/login";
import AuctionDetails from "./pages/auction-details";
import Explorer from "./pages/explorer";
import Home from "./pages/home";
import Logout from "./pages/logout";
import NewDonation from "./pages/new-donation";
import ProtectedRoute from "./components/protected-route";
import GuestRoute from "./components/guest-route"

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
        <Route path="/about"/>
        <Route path="/app">
          <Route path="logout" element={setAsProtected(<Logout/>)}/>
          <Route path="explorer" element={setAsProtected(<Explorer/>)}/>
          <Route path="new-donation" element={setAsProtected(<NewDonation/>)}/>
          <Route path="leilao/:id" element={setAsProtected(<AuctionDetails/>)}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
