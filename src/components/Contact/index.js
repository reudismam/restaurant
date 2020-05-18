import React from 'react';
import './style.css';

export default function Contact(props) {
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
        </div>
    );
}