import { Container } from 'react-bootstrap'
import "../styles/styles.css";
import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Profile = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
      <Container className='sidenav'>

        <Link to="/PersonalInformation">Personal Information</Link> |{" "}
        <Link to="/Orders">Orders</Link>|{" "}
        <Link to="/Security">Security</Link>|{" "}
        {  isAdmin === true &&
          <Link to="/Admin">Admin</Link>
        }
      </Container>

  );
}

export default Profile;