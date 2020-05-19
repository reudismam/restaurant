import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Breadcrumb, Form, FormGroup, Label, Input, Col, Button, FormFeedback} from 'reactstrap';

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

    function handleSubmit(event) {
        console.log('handle submi...');
    }

    function handleBlur(field) {
        setTouched({...touched, [field]:true});
    }

    function validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email:''
        }

        if (touched.firstname && firstname.length < 3) {
            errors.firstname = 'O primeiro nome deve ser maior ou igual a 3.'
        }
        else if (touched.firstname && firstname.length > 10) {
            errors.firstname = "O primeiro nome deve ser menor ou igual a 10."
        }
        if (touched.lastname && lastname.length < 3) {
            errors.lastname = 'O último nome deve ser maior ou igual a 3.'
        }
        else if (touched.lastname && lastname.length > 10) {
            errors.lastname = "O último nome deve ser menor ou igual a 10."
        }

        const reg = /^\d+$/;
        if (touched.telnum && !reg.test(telnum)) {
            errors.telnum = "O telefone deve incluir apenas números";
        }

        if (touched.email && email.split('').filter(x => x === '@').length !== 1) {
            errors.email = "O email deve conter um @";
        }
        return errors;  
    }

    const errors = validate(firstname, lastname, telnum, email);

    return (
        <div>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                <ModalBody>
                <Form onSubmit={handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input type="text" id="firstname"
                                    name="firstname"
                                    placeholder="First Name"
                                    value={firstname}
                                    valid={errors.firstname === ''}
                                    invalid={errors.firstname !== ''}
                                    onBlur={()=>handleBlur('firstname')}
                                    onChange={e => setFirstname(e.target.value)}
                                />
                                <FormFeedback>{errors.firstname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input type="text"
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Last Name"
                                    value={lastname}
                                    valid={errors.lastname === ''}
                                    invalid={errors.lastname !== ''}
                                    onBlur={() => handleBlur('lastname')}
                                    onChange={e => setLastname(e.target.value)}
                                />
                                <FormFeedback>{errors.lastname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telnum" md={2} id="telnum" name="telnum">Contact Tel.</Label>
                            <Col md={10}>
                                <Input type="tel"
                                    id="telnum"
                                    name="telnum"
                                    placeholder="Tel. number"
                                    value={telnum}
                                    valid={errors.telnum === ''}
                                    invalid={errors.telnum !== ''}
                                    onBlur={() => handleBlur('telnum')}
                                    onChange={e => setTelnum(e.target.value)} />
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    valid={errors.email === ''}
                                    invalid={errors.email !== ''}
                                    onBlur={() => handleBlur('email')}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{ size: 6, offset: 2 }}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox"
                                            name="agree"
                                            checked={agree}
                                            onChange={e => setAgree(e.target.value)} /> {' '}
                                        <strong>Podemos contactar você?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{ size: 3, offset: 1 }}>
                                <Input type="select" name="contactType">
                                    value={contactType}
                                    onChange={e => setContactType(e.target.value)}>
                                        <option>Tel.</option>
                                    <option>E-mail</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="message" md={2}>Seu feeedback</Label>
                            <Col md={10}>
                                <Input type="textarea"
                                    id="message"
                                    name="message"
                                    rows="12"
                                    value={message}
                                    onChange={e => setMessage(e => e.target.value)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:10, offset: 2}}>
                                <Button type="submit" color="primary">
                                    Enviar Feedback
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
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