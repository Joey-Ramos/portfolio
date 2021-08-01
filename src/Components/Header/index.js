import React from 'react';
import {Navbar, Container, Nav,} from 'react-bootstrap'


function Header() {
    
    return (
        <Navbar expand="lg" bg='secondary'>
            <Container>
                <Navbar.Brand href="/home">Joseph Ramos</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/about">About Me</Nav.Link>
                        <Nav.Link href="/project">Projects</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;