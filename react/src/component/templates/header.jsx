import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = ({ cartTotal }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Electra</Navbar.Brand>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        
        <Nav className="m1-auto">
    
          
          <Nav.Link as={Link} to="/cart">Shoping: ${cartTotal}</Nav.Link>
          <Nav.Link as={Link} to="/about">about</Nav.Link>
          <Nav.Link as={Link} to="/privacy">privacy</Nav.Link>
        </Nav>
      </Container>
     </Navbar>
  );
};

export default Header;

