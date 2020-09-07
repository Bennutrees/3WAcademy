import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';

const Navigation = () => {

    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <NavbarBrand >
                <Link className="nav-link" to="/" style={{color: '#ffffff'}}>Home</Link>
            </NavbarBrand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/authors">Authors</Link>
                    <Link className="nav-link" to="/author">Add Author</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default withRouter(Navigation);