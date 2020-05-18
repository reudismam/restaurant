import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import "./style.css";

export default function Header(props) {
    const [isNavOpen, setIsNavOpen] = useState(true);

    return (
        <div>
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