import '../styles/styles.css'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'



const NavBar = () => {
    return (

        <Nav className='navBar'>
            <Link to="/Login" >Login</Link>
            <Link to="/HomePage">Homepage </Link>
            <Link to="/ShoppingCart">Shopping Cart</Link>
            <Link to="/ShoppingPage">Shopping Page</Link>
            <Link to="/Profile">Profile</Link>
        </Nav>

    )
}

export default NavBar;
