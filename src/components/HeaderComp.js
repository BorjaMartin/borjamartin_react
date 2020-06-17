import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
//import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


class HeaderComp extends Component {
    render() {
        return (
            <header id="header">
                <div class="row">
                    <Navbar bg="dark" variant="dark" class="navbar navbar-light ">
                    <Navbar.Brand className="navbar-brand" href="#home">Navbar</Navbar.Brand>
                    <Nav className="nav nav-pills flex-column">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    </Navbar>
                </div>
                {/*  
        <Navbar bg="dark" variant="dark" class="navbar navbar-light ">
                    <Navbar.Brand className="navbar-brand" href="#home">Navbar</Navbar.Brand>
                    <Nav className="nav nav-pills flex-column">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
</Navbar>
        position: relative;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
padding: .5rem 1rem;
width: 100px;
height: 100%;
        
        
        */ }


            </header>
        );
    }
}

export default HeaderComp;