import '../styles/styles.css'
import {
    Link, Outlet, BrowserRouter, Switch,
    Route, useParams, useRouteMatch
} from 'react-router-dom'
import { Nav } from 'react-bootstrap'



const NavBar = () => {
    return (

        <Nav className='navBar'>
            <Link to="/Login">Login</Link> |{" "}
            <Link to="/HomePage">Homepage </Link>|{" "}
            <Link to="/ShoppingCart">Shopping Cart</Link>|{" "}
            <Link to="/Shoppingpage">Shopping page</Link>|{" "}
            <Link to="/Profile">Profile</Link>
        </Nav>

    )
}

export default NavBar;


{/* <Link to='/PersonalInformation'>Personal Information</Link>
<Link to='/Orders'>Orders</Link>
<Link to='/Security'></Link>
<Link to='/Admin'></Link> */}