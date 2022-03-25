import 'react-bootstrap';
import 'bootstrap';
import '../styles/styles.css'
import { Link, Outlet } from 'react-router-dom'
import { Nav } from 'react-bootstrap'



const NavBar = () => {
    return (

        <Nav className='navBar'>
            <Link to="/Login">Login</Link> |{" "}
            <Link to="/HomePage">Homepage </Link>|{" "}
            <Link to="/ShoppingCart">Shopping Cart</Link>|{" "}
            <Link to="/Shoppingpage">Shopping page</Link>|{" "}
            <Link to="/Profile">Profile</Link>|{" "}
            <Link to="/Admin">Admin</Link>
            
        </Nav>

    )
}

export default NavBar;