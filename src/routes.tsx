import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import CreateUser from "./components/CreateUser";
import Login from "./components/Login";
import DonationDetails from "./pages/donation-details";
import Explorer from "./pages/explorer";
import Home from "./pages/home";
import Logout from "./pages/logout";
import NewDonation from "./pages/new-donation";

export default function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about"/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/create-account" element={<CreateUser/>}/>
        <Route path="/explorer" element={<Explorer/>}/>
        <Route path="/new-donation" element={<NewDonation/>}/>
        <Route path="/donation/:id" element={<DonationDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}
