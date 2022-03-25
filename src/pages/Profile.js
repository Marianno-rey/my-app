import { Container } from 'react-bootstrap'
import "../styles/styles.css";
import React from 'react';

const Profile = () => {

  return (
    <Container>
      <Container className='sidenav'>

        <a href=''>Personal Information</a>
        <a href=''>Orders</a>
        <a href=''>Security</a>
        <a href=''>Admin</a>

      </Container>
    </Container>

  );
}

export default Profile;