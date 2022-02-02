import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import CreateUser from "./components/CreateUser";
import Login from "./components/Login";
import Home from "./pages/home";

export default function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about"/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create-account" element={<CreateUser/>}/>
      </Routes>
    </BrowserRouter>
  )
}