import React, { useState } from 'react';
import { Media } from 'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

export default function Menu(props) {
    const [dishes, setDishes] = useState(props.dishes);
    const [selectedDish, setSelectedDish] = useState('');

    function onSelectedDish(dish) {
        setSelectedDish(dish);
    }

    function renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div>
                </div>
            );
        }
    }

    const menu = dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => onSelectedDish(dish)}>
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
            </div>
            <div className="row">
                {renderDish(selectedDish)}
            </div>
        </div>
    );
}