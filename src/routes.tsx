import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import CreateUser from "./components/CreateUser";

export default function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateUser/>}/>
      </Routes>
    </BrowserRouter>
  )
}