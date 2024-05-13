import React, { useState } from 'react';
import { Modal, Button, Form, Tab, Tabs } from 'react-bootstrap';
import axios from 'axios';

function AuthModal({ show, onHide }) {
  const [key, setKey] = useState('login');
  const [userData, setUserData] = useState({
      user_username: '',
      password: '',
      user_email: '',
      user_firstname: '',
      user_lastname: '',
      user_address: ''
  });

  const handleChange = (event) => {
      const { name, value } = event.target;
      setUserData(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      try {
          const response = await axios.post('http://localhost:8080/backend/user-login/', {
              user_username: userData.user_username,
              password: userData.password
          });
          console.log('Login successful:', response.data);
          alert('Login successful');
      } catch (error) {
          console.error('Login error:', error.response?.data);
          alert('Failed to login');
      }
      onHide();
  };

  const handleRegis = async (event) => {
      event.preventDefault();
      try {
          const response = await axios.post('http://localhost:8080/backend/user-create/', userData);
          console.log('User created:', response.data);
          alert('User created successfully!');
      } catch (error) {
          console.error('Creation error:', error.response?.data);
          alert('Failed to create user');
      }
      onHide(); 
  };

  return (
      <Modal show={show} onHide={onHide} centered>
          <Modal.Header closeButton>
              <Modal.Title>{key === 'login' ? 'Login' : 'Sign Up'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
                  <Tab eventKey="login" title="Login">
                      <Form onSubmit={handleSubmit}>
                          <Form.Group>
                              <Form.Label>Username</Form.Label>
                              <Form.Control
                                  name="user_username"
                                  type="text"
                                  placeholder="Enter username"
                                  required
                                  value={userData.user_username}
                                  onChange={handleChange}
                              />
                          </Form.Group>
                          <Form.Group>
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                  name="password"
                                  type="password"
                                  placeholder="Password"
                                  required
                                  value={userData.password}
                                  onChange={handleChange}
                              />
                          </Form.Group>
                          <Button variant="primary" type="submit">
                              Login
                          </Button>
                      </Form>
                  </Tab>
                  <Tab eventKey="signup" title="Sign Up">
                      <Form onSubmit={handleRegis}>
                          <Form.Group>
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                  name="user_email"
                                  type="email"
                                  placeholder="Enter email"
                                  required
                                  value={userData.user_email}
                                  onChange={handleChange}
                              />
                          </Form.Group>
                          <Form.Group>
                              <Form.Label>Username</Form.Label>
                              <Form.Control
                                  name="user_username"
                                  type="text"
                                  placeholder="Choose a username"
                                  required
                                  value={userData.user_username}
                                  onChange={handleChange}
                              />
                          </Form.Group>
                          <Form.Group>
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                  name="password"
                                  type="password"
                                  placeholder="Choose a password"
                                  required
                                  value={userData.password}
                                  onChange={handleChange}
                              />
                          </Form.Group>
                          <Form.Group>
                              <Form.Label>FirstName</Form.Label>
                              <Form.Control
                                  name="user_firstname"
                                  type="text"
                                  placeholder="Write your first name"
                                  required
                                  value={userData.user_firstname}
                                  onChange={handleChange}
                              />
                          </Form.Group>
                          <Form.Group>
                              <Form.Label>LastName</Form.Label>
                              <Form.Control
                                  name="user_lastname"
                                  type="text"
                                  placeholder="Write your last name"
                                  required
                                  value={userData.user_lastname}
                                  onChange={handleChange}
                              />
                          </Form.Group>
                          <Form.Group>
                              <Form.Label>Address</Form.Label>
                              <Form.Control
                                  name="user_address"
                                  type="text"
                                  placeholder="Write your address"
                                  required
                                  value={userData.user_address}
                                  onChange={handleChange}
                              />
                          </Form.Group>
                          <Button variant="primary" type="submit">
                              Sign Up
                          </Button>
                      </Form>
                  </Tab>
              </Tabs>
          </Modal.Body>
      </Modal>
  );
}

export default AuthModal;


