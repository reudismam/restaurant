import React, {useState} from 'react';
import { NavbarBrand, Navbar } from 'reactstrap';
import Menu from '../Menu';
import DishDetail from '../DishDetails';
import {DISHES} from '../../shared/dishes';

export default function Main() {
  const [dishes, setDishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState('');

  function onSelectedDish(dishId) {
      setSelectedDish(dishId);
  }

  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Restaurante</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} onClick={(dishId) => onSelectedDish(dishId)}/>
      <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]}/>
    </div>
  );
}
