import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { NavbarBrand, Navbar } from 'reactstrap';
import Menu from './components/Menu';
import {DISHES} from './shared/dishes';

function App() {
  const [dishes, setDishes] = useState(DISHES);
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Restaurante</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes}/>
    </div>
  );
}

export default App;
