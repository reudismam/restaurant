import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default function Footer(props) {
    return (
        <div>
            <ul className="footer">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/aboutus">Sobre</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </div>
    );
}