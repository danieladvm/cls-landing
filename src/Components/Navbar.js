import React, { Component } from 'react';
import './Navbar.css';
import logo from '../img/logo-cls.png';
import { sedes } from "../data/sedes.json"

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            sedes
        }
    }

    render() {

        const sedes = this.state.sedes.map((sede, i) => {
            return (
                <a key={i} className="dropdown-item" href={sede.url}>
                    {sede.nombre}
                </a>
            );
        });

        return (
            <nav id="navbar-spy" className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <div className="d-sm-flex mx-auto">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#vision">Visión</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#sj">Reuniones</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="d-none d-sm-block py-1 px-2" href="#home">
                                    <img src={logo} width="30" height="30" alt="" />
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#tienda">Tienda</a>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sedes
        </a>
                                <div className="dropdown-menu bg-dark border border-white" aria-labelledby="navbarDropdownMenuLink">
                                    {sedes}
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
