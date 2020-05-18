import React, {useState} from 'react';
import Menu from '../Menu';
import Home from '../Home';
import Contact from '../Contact';
import {DISHES} from '../../shared/dishes';
import {COMMENTS} from '../../shared/comments';
import {PROMOTIONS} from '../../shared/promotions';
import {LEADERS} from '../../shared/leaders';

import {Switch, Route, Redirect} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

export default function Main() {
  const [dishes] = useState(DISHES);
  const [comments] = useState(COMMENTS);
  const [promotions] = useState(PROMOTIONS);
  const [leaders] = useState(LEADERS);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={() => <Home 
        dish={dishes.filter((dish) => dish.featured)[0]}
        promotion={promotions.filter((promotion) => promotion.featured)[0]}
        leader={leaders.filter((leader) => leader.featured)[0]} />}/>
        <Route exact path="/menu" component={() => <Menu dishes={dishes}/>}/>
        <Route exact path="/contato" component={Contact}/>
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
