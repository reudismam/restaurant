import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Breadcrumb, Form, FormGroup, Row, Label, Col, Button, FormFeedback} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';

import { NavLink } from 'react-router-dom';
import "./style.css";

export default function Header(props) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal() {
        setIsModalOpen(!isModalOpen);
    }

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [telnum, setTelnum] = useState('');
    const [email, setEmail] = useState('');
    const [agree, setAgree] = useState(false);
    const [contactType, setContactType] = useState('Tel.');
    const [message, setMessage] = useState('');
    const [touched, setTouched] = useState({
        firstname: false,
        lastname: false,
        telnum: false,
        email: false
    });

    function handleSubmit(values) {
        console.log('handle submit...');
        alert(JSON.stringify(values));
    }
    
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => (val) && (val.length >= len);
    const isNumber = (val) => !isNaN(Number(val));
    const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

    return (
        <div>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                <ModalBody>
                <LocalForm onSubmit={(values) => handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Control.text 
                                    model=".firstname" 
                                    id="firstname"
                                    name="firstname"
                                    placeholder="Nome"
                                    className="form-control"
                                    validators={
                                        {
                                            required, 
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }
                                    }
                                />
                                <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Control.text
                                    model=".lastname"
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Last Name"
                                    className="form-control"
                                    validators={
                                        {
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }
                                    }
                                />
                                <Errors
                                    className="text-danger"
                                    model=".lastname"
                                    show="touched"
                                    messages={
                                        {
                                            required:'Campo obrigatório ',
                                            minLength: 'Deve ser maior que 2',
                                            maxLength: 'Deve conter 15 caracteres ou menos'
                                        }
                                    }
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="telnum" md={2} id="telnum" name="telnum">Contact Tel.</Label>
                            <Col md={10}>
                                <Control.text
                                    model=".telnum"
                                    id="telnum"
                                    name="telnum"
                                    placeholder="Telefone"
                                    className="form-control"
                                    validators={
                                        {
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15),
                                            isNumber,
                                        }
                                    }
                                    />
                                    <Errors 
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={
                                            {
                                                required: 'Campo requerido',
                                                minLength: 'Deve ser maior que 2 caracteres',
                                                maxLength: 'Deve ser menor ou igual a 15',
                                                isNumber: 'Precisa ser número',
                                            }
                                        }
                                    />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Control.text
                                    model=".email"
                                    id="email"
                                    name="email"
                                    placeholder="seunome@examplo.com"
                                    className="form-control"
                                    validators={
                                        {
                                            required,
                                            validEmail,
                                        }
                                    }
                                />
                                <Errors 
                                    className='text-danger'
                                    model=".email"
                                    show="touched"
                                    messages={
                                        {
                                            required: "Campo obrigatório",
                                            validEmail: "Informe um e-mail válido"
                                        }
                                    }
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{ size: 6, offset: 2 }}>
                                <div className="form-check">
                                    <Label check>
                                        <Row>
                                        <Control.checkbox
                                            model=".agree"
                                            id="agree"
                                            name="agree"
                                            className="form-check"
                                            /> {'    '}
                                        <strong className="ml-2">Podemos contactar você?</strong>
                                        </Row>
                                    </Label>
                                </div>
                            </Col>
                            <Col md={{ size: 3, offset: 1 }}>
                                <Control.select 
                                    model=".contactType"
                                    id="contactType"
                                    name="contactType"
                                    className="form-control"
                                    >
                                        <option>Tel.</option>
                                    <option>E-mail</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="message" md={2}>Seu feeedback</Label>
                            <Col md={10}>
                                <Control.textarea
                                    model=".message"
                                    id="message"
                                    name="message"
                                    className="form-control"/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size:10, offset: 2}}>
                                <Button type="submit" color="primary">
                                    Enviar Feedback
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>

            <Navbar dark expand="md" className="navegacao">
                <div className="container">
                    <NavbarToggler onClick={() => setIsNavOpen(!isNavOpen)} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.png" height="30" width="41" alt="Restaurante" />
                    </NavbarBrand>
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span>
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span>
                                    Sobre
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span>
                                    Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contato">
                                    <span className="fa fa-address-card fa-lg"></span>
                                    Contato
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button outline onClick={toggleModal}>
                                <span className="fa fa-sign-in fa-lg">
                                </span> Login
                            </Button>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Restaurante</h1>
                            <p>
                                Oferecemos os melhores pratos para fornecer ainda mais sabor a sua vida!
                        </p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </div>
    );
}