import { useState } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import NavBar from './components/NavBar'
import { Outlet, Link } from 'react-router-dom'
import "./styles/styles.css";


function App() {
  // Nav will likely be changed to a single NavBar component
  return (
    <Container className='main'>
      <h1 style={{ textAlign: 'center' }}>RoadRunners Closet</h1>
      <Nav className='navBar'>
        <Link to="/Login">Login</Link> |{" "}
        <Link to="/HomePage">Homepage </Link>|{" "}
        <Link to="/ShoppingCart">Shopping Cart</Link>|{" "}
        <Link to="/Shoppingpage">Shopping page</Link>|{" "}
        <Link to="/Profile">Profile</Link>
      </Nav>
      <Outlet />
    </Container>

  );
}

export default App;
