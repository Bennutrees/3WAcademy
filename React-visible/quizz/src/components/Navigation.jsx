import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Navigation = () => {
    const { authenticated } = useSelector((state) => state);

    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <NavbarBrand >
                <Link className="nav-link" to="/" style={{color: '#ffffff'}}>Home</Link>
            </NavbarBrand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/scoreboard">ScoreBoard</Link>
                    <Link className="nav-link" to="/qcm">QCM</Link>
                    {authenticated
                        ? <Link className="nav-link" to="/sign-out">Déconnexion</Link>
                        : <Fragment>
                            <Link className="nav-link" to="/sign-in">Connexion</Link>
                            <Link className="nav-link" to="/sign-up">Inscription</Link>
                        </Fragment>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default withRouter(Navigation);