import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavbarBrand, Navbar } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Restaurante</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
