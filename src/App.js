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
      <NavBar/>
      <Outlet />
    </Container>

  );
}

export default App;
