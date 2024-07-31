import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = ({ username }) => {
  
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='mb-4'>
      <Container>
    
      <Navbar.Brand className='brandName'as={Link} to="/">Feastly</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/store">Store</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          {username ? (
            <Nav.Link>Welcome, {username}</Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          )}
        </Nav>
        </Container>
  
    </Navbar>
  );
};

export default Header;
