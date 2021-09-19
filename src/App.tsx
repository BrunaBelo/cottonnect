import React from 'react';
import CreateUser from './components/CreateUser';
import Navbar from './components/Navbar';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Navbar />
      <CreateUser />
      
      <GlobalStyles />
    </>
  );
}

export default App;
