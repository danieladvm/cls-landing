import React, { Component } from 'react';
import './Body.css';
import Navbar from './Navbar'
import Landing from './Landing'

class Body extends Component {
    render() {
        return (
            <div className="body">
              <Navbar />
              <Landing />
            </div>
        );
    }
}

export default Body;
