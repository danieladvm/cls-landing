import React, { Component } from 'react';
import './SeccionSede.css';

class SeccionSede extends Component {
    render() {
        return (
            <section id={this.props.id} className="parallax text-white">
                <h3 className="text-uppercase">{this.props.descripcion}</h3>
                <strong className="display-3 text-uppercase">{this.props.nombre}</strong>
                <p className="lead">
                    <strong>{this.props.direccion}</strong>
                </p>
                <button type="button" className="btn btn-outline-light">+ información</button>
            </section>
        );
    }
}

export default SeccionSede;
