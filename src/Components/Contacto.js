import React, { Component } from 'react';
import './Contacto.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

class Contacto extends Component {
    render() {
        return (
            <section id="contacto" className="parallax text-white">
                <h1 className="text-uppercase">Formas de contacto</h1>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-1 text-right columna-icono offset-sm-2 offset-lg-3">
                            <i className="fas fa-phone-alt fa-lg"></i>
                        </div>
                        <div className="col-5 col-sm-3 col-lg-2 text-left">
                            4484-4517
                            </div>
                        <div className="col-1 text-right columna-icono">
                            <i className="fas fa-phone-alt fa-lg"></i>
                        </div>
                        <div className="col-5 col-sm-4 col-lg-3 text-left">
                            4484-5385
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-right columna-icono offset-sm-2 offset-lg-3">
                            <i className="fas fa-mobile-alt fa-lg"></i>
                        </div>
                        <div className="col-5 col-sm-3 col-lg-2 text-left">
                            11-2864-8642
                            </div>
                        <div className="col-1 text-right columna-icono">
                            <i className="fas fa-envelope fa-lg"></i>
                        </div>
                        <div className="col-5 col-sm-4 col-lg-3 text-left">
                            info@iglesia-cls.com
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-right columna-icono offset-sm-2 offset-lg-3">
                            <i className="fab fa-instagram fa-lg"></i>
                        </div>
                        <div className="col-5 col-sm-3 col-lg-2 text-left">
                            Alfredo Dimiro
                        </div>
                        <div className="col-1 text-right columna-icono">
                            <i className="fab fa-facebook fa-lg"></i>
                        </div>
                        <div className="col-5 col-sm-4 col-lg-3 text-left">
                            Alfredo Dimiro
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contacto;
