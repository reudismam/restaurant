import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavbarBrand, Navbar } from 'reactstrap';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Restaurante</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
