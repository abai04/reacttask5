import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link } from 'react-router-dom';

function HeaderNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/"><Navbar.Brand>Home</Navbar.Brand></Link>
            <Link to="/cards"><Navbar.Brand>Cards</Navbar.Brand></Link>
            <Link to="/texts"><Navbar.Brand>Texts</Navbar.Brand></Link>
            <Link to="/scrollbar"><Navbar.Brand>Scrollbar</Navbar.Brand></Link>
            <Link to="/pagination"><Navbar.Brand>Pagination</Navbar.Brand></Link>
            <Link to="/stars"><Navbar.Brand>Stars</Navbar.Brand></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;