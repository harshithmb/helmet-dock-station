import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>
                <Link to="/">
                    <img src="https://vogo.in/wp-content/uploads/vogo-logo.png" alt="" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="justify-content-end" >
                <div className="navbar-nav">
                    <Link to="/" className="nav-item nav-link active" >Home</Link>
                    <Link to="/about" className="nav-item nav-link">About Us</Link>
                </div>
            </Navbar.Collapse>

            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Created by: SkyRiders
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;