import React, { Component } from 'react';
import './Body.css';
import SeccionSede from './SeccionSede'
import Contacto from './Contacto'
import { sedes } from "../data/sedes.json"

class Body extends Component {
    constructor() {
        super();
        this.state = {
            sedes
        }
    }

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
                <section id="home" className="parallax bg-portada text-white d-flex flex-column align-content-center justify-content-center">
                    <h1 className="display-1 text-uppercase">Cristo la Solución</h1>
                    <p className="lead">
                        <strong>San Justo, La Matanza, Buenos Aires, Argentina</strong>
                    </p>
                </section>
                <section id="vision" className="bienvenidos text-white">
                    <h1 className="text-uppercase">Bienvenidos</h1>
                    <p className="lead mt-sm-1 mt-4">
                        <strong>Somos una iglesia donde todos son bien recibidos. Una iglesia diferente para diferentes tipos de personas. Creemos en una relación personal con Dios y no en una religión.</strong>
                    </p>
                </section>
                <section className="parallax reunion-general text-white"></section>
                {sedes}
                <Contacto />
            </div>
        );
    }
}

export default Body;
