import { useState } from 'react'
import Header from "./components/Header"
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import { Outlet, Link } from 'react-router-dom'


function App() {

  return (
    <Container class="fill-window">
      <Nav>
        <Link to="/Login">Login</Link> |{" "}
        <Link to="/HomePage">Homepage </Link>|{" "}
        <Link to="/ShoppingCart">Shopping Cart</Link>|{" "}
        <Link to="/Shoppingpage">Shopping page</Link>
      </Nav>
      <Outlet />
    </Container>

  );
}

export default App;
