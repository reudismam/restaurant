import React, {useState} from 'react';
import Menu from '../Menu';
import Home from '../Home';
import Contact from '../Contact';

import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';

const mapeieEstadoParaProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

function Main(props) {
  const [dishes] = useState(props.dishes);
  const [comments] = useState(props.comments);
  const [promotions] = useState(props.promotions);
  const [leaders] = useState(props.leaders);

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


export default withRouter(connect(mapeieEstadoParaProps)(Main));
