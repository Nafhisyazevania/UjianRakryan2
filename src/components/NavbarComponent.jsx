import React from 'react';
import logo from '../assets/Logo.png';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';

function NavbarComponent() {
    return (
        <>
            <Navbar bg="white" data-bs-theme="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ maxHeight: '60px', maxWidth: '240px', objectFit: 'contain' }}
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#aboutme">About Me</Nav.Link>
                            <Nav.Link href="#service">Service</Nav.Link>
                            <Nav.Link href="#project">Projects</Nav.Link>
                            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                        <div className="d-flex ms-3">
                            <Button variant="warning" href="#Downloadcv">
                                Download CV
                            </Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;
