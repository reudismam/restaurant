import React, { useState } from 'react';
import './style.css';
import { Breadcrumb, Form, FormGroup, Label, Input, Col } from 'reactstrap';

export default function Contact(props) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [telnum, setTelnum] = useState('');
    const [email, setEmail] = useState('');
    const [agree, setAgree] = useState(false);
    const [contactType, setContactType] = useState('Tel.');
    const [message, setMessage] = useState('');

    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (name === "firstname") setFirstname(value);
        if (name === "lastname") setLastname(value);
        if (name === "telnum") setTelnum(value);
        if (name === "email") setEmail(value);
        if (name === "agree") setAgree(value);
        if (name === "contactType") setContactType(value);
        if (name === "message") setMessage(value);
    }

    function handleSubmit(event) {
        console.log('handle submi...');
    }

    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12 banner">
                    <h3>Informações de localização</h3>
                </div>
                <div className="col-12 col-sm-3 offset-sm-1">
                    <h5>Nosso endereço</h5>
                    <address>
                        Rua São Geraldo, BR-X, Pau dos Ferros, Rio Grande do Norte - Brasil.
                        <br />
                        <i className="fa fa-phone"></i>(84) 99999-9999<br />
                        <i className="fa fa-fax"></i>(XXX XXXX XXXX)<br />
                        <i className="fa fa-envelope"></i><a href="mailto:example@restaurant.com">contato@example.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-3 offset-sm-1">
                    <h5>Mapa de nossa localização</h5>
                </div>
                <div className="col-12 col-sm-3 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="+558490000-0000">
                            <i className="fa fa-phone"></i>Chamada
                        </a>
                        <a role="button" className="btn btn-info">
                            <i className="fa fa-skype">Skype</i>
                        </a>
                        <a role="button" className="btn btn-success" href="mailto:contato@exemplo.com">
                            <i className="fa fa-envelope-o"></i> Email
                        </a>
                    </div>
                </div>
            </div>
            <div className="row row-content form">
                <div className="col-12">
                    <h3>Nos envie o seu feeedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Form onSubmit={handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input type="text" id="firstname"
                                    name="firstname"
                                    placeholder="First Name"
                                    value={firstname}
                                    onChange={handleInputChange}
                                />
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
                                    onChange={handleInputChange}
                                />
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
                                    onChange={handleInputChange} />
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
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{ size: 6, offset: 2 }}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox"
                                            name="agree"
                                            checked={agree}
                                            onChange={handleInputChange} /> {' '}
                                        <strong>Podemos contactar você?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{ size: 3, offset: 1 }}>
                                <Input type="select" name="contactType">
                                    value={contactType}
                                    onChange={handleInputChange}>
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
                                    onChange={handleInputChange} />
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    );
}