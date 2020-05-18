import React, { Component, useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("DishDetail component mounted.");
    }

    componentDidUpdate() {
        console.log("DishDetail component updated.");
    }

    render() {
        const dish = this.props.dish;
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
}

export default DishDetails;