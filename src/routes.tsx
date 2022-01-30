import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import CreateUser from "./components/CreateUser";
import Login from "./components/Login";

export default function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateUser/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}