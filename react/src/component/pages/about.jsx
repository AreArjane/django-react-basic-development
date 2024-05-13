import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
    <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
    <div className="about-page">
      <h1>About Electra</h1>
      <p>
        Electra is a leading provider of high-quality electronic components.
        We are dedicated to offering a wide range of products at competitive
        prices, along with exceptional customer service. Our team of
        experienced professionals is passionate about electronics and committed
        to helping you find the perfect components for your needs.
      </p>
      <p>
        Whether you're a hobbyist, a professional engineer, or a business
        owner, Electra has the electronic components you need to get your
        project started. We offer a wide variety of products, including:
      </p>
      <ul>
        <li>Resistors</li>
        <li>Capacitors</li>
        <li>Inductors</li>
        <li>Diodes</li>
        <li>Transistors</li>
        <li>Integrated Circuits (ICs)</li>
        <li>Microcontrollers</li>
        <li>And much more!</li>
      </ul>
      <p>
        In addition to our extensive product selection, we also offer a variety
        of resources to help you get the most out of your electronic
        components. We have a comprehensive library of datasheets, application
        notes, and tutorials. We also offer a knowledgeable customer support
        team that is always happy to help.
      </p>
      <p>
        At Electra, we are committed to providing our customers with the best
        possible experience. We believe that high-quality electronic components
        should be accessible to everyone. That's why we offer competitive
        prices on all of our products. We also ship our products quickly and
        reliably.
      </p>
      <p>Thank you for choosing Electra! We look forward to helping you with
        all of your electronic component needs.</p>
    </div>
    </Col>
    </Row>
    </Container>
  );
};

export default About;

