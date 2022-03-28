import "../styles/styles.css";
import React, { useState } from 'react';
import { Container , Form, Button } from "react-bootstrap";

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  // Still unsure about validation. Requires testing
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const adminformat = /^([0-9]|[a-z]|[A-Z])+@([0-9]|[a-z]|[A-Z])+\.my\.utsa\.edu$/;


  function validateForm() {
    if (email.match(adminformat)) {
      setIsAdmin(true);
      return password.length > 0
    }
    else {
      return email.match(mailformat)
        && password.length > 0;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <Container className='Login'>
      <h2 style={{ textAlign: 'center' }}>Create an account</h2>
      <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                  autoFocus
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
          </Form.Group>

          <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
          </Form.Group>

          <Button block size="lg" type="submit" disabled={!validateForm()}>
              Login
          </Button>
      </Form>
    </Container>
  )
}

export default CreateAccount