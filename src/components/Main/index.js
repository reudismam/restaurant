import React, {useState} from 'react';
import { NavbarBrand, Navbar } from 'reactstrap';
import Menu from '../Menu';
import DishDetail from '../DishDetails';
import Home from '../Home';
import {DISHES} from '../../shared/dishes';

import {Switch, Route, Redirect} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

export default function Main() {
  const [dishes, setDishes] = useState(DISHES);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={() => <Home />} />
        <Route exact path="/menu" component={() => <Menu dishes={dishes}/>}/>
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

/*
<Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Restaurante</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} onClick={(dishId) => onSelectedDish(dishId)}/>
      <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]}/>
*/
