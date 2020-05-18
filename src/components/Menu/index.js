import React, { useState } from 'react';
import DishDetail from '../DishDetails';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

export default function Menu(props) {
    const [selectedDish, setSelectedDish] = useState('');

    function onSelectedDish(dishId) {
        setSelectedDish(dishId);
    }
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => onSelectedDish(dish.id)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                {menu}
                <DishDetail dish={props.dishes.filter((dish) => dish.id === selectedDish)[0]}/>
            </div>
        </div>

    );
}