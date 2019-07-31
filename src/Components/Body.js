import React, { Component } from 'react';
import './Body.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import SeccionSede from './SeccionSede'
import { sedes } from "../data/sedes.json"

class Body extends Component {
    constructor() {
        super();
        this.state = {
            sedes
        }
    }

    importAll = (r) => {
        return r.keys().map(r);
    };

    render() {
        const sedes = this.state.sedes.map((sede, i) => {
            return (
                <SeccionSede
                    key={i}
                    id={sede.id}
                    nombre={sede.nombre}
                    direccion={sede.direccion}
                    descripcion={sede.descripcion} />
            );
        });

        return (
            <div>
                <section id="home" className="parallax bg-portada text-white">
                    <h1 className="display-1 text-uppercase">Iglesia CLS</h1>
                    <p className="lead">
                        <strong>San Justo, La Matanza, Buenos Aires, Argentina</strong>
                    </p>
                </section>
                <section id="vision" className="parallax text-white">
                    <h1 className="text-uppercase">Bienvenidos</h1>
                    <p className="lead mt-sm-1 mt-4">
                        <strong>Somos una iglesia donde todos son bien recibidos. Una iglesia diferente para diferentes tipos de personas. Creemos en una relación personal con Dios y no en una religión.</strong>
                    </p>
                </section>
                <section className="parallax reunion-general text-white"></section>
                {sedes}
                <section id="contacto" className="parallax text-white">
                    <h1 className="text-uppercase">Formas de contacto</h1>
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-sm-12 col-md">
                                <i className="fas fa-phone-alt fa-lg mr-2"></i>4484-4517
                        </div>
                            <div className="col-sm-12 col-md">
                                <i className="fas fa-phone-alt fa-lg mr-2"></i>4484-5385
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md">
                                <i className="fas fa-mobile-alt fa-lg mr-2"></i>11-2864-8642
                        </div>
                            <div className="col-sm-12 col-md">
                                <i className="fas fa-envelope fa-lg mr-2"></i>info@iglesia-cls.com
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md">
                                <i className="fab fa-instagram fa-lg mr-2"></i>Alfredo Dimiro
                        </div>
                            <div className="col-sm-12 col-md">
                                <i className="fab fa-facebook fa-lg mr-2"></i>Alfredo Dimiro
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Body;
