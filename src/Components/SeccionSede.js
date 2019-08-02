import React, { Component } from 'react';
import './SeccionSede.css';

class SeccionSede extends Component {
    render() {
        return (
            <section id={this.props.id} className="parallax text-white d-flex flex-column align-content-center justify-content-center">
                <h3 className="text-uppercase">{this.props.descripcion}</h3>
                <strong className="display-3 text-uppercase">{this.props.nombre}</strong>
                <p className="lead">
                    <strong>{this.props.direccion}</strong>
                </p>
                <div className="text-center">
                    <button type="button" className="btn btn-outline-light informacion">+ información</button>
                </div>
            </section>
        );
    }
}

export default SeccionSede;
