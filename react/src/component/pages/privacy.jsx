import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Privacy = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <div className="privacy-page mt-5">
            <h1>Electra Privacy Policy</h1>
            <p>
              This Privacy Policy describes how Electra ("we", "us", or "our")
              collects, uses, and discloses your personal information when you use
              our website ("Website") or services ("Services").
            </p>
            <h3>Information We Collect</h3>
            <p>
              We may collect the following information when you use our Website or
              Services:
            </p>
            <ul>
              <li>Personal information such as your name, email address, and phone
                number (if you provide it).</li>
              <li>Usage data such as the pages you visit, the products you view,
                and the searches you perform.</li>
            </ul>
            <h3>How We Use Your Information</h3>
            <p>
              We may use your information for the following purposes:
            </p>
            <ul>
              <li>To provide and improve our Website and Services.</li>
              <li>To send you marketing communications (if you opt in).</li>
              <li>
                To analyze how you use our Website and Services so that we can
                improve them.
              </li>
              <li>
                To comply with legal and regulatory requirements.
              </li>
            </ul>
            <h3>How We Share Your Information</h3>
            <p>
              We may share your information with third-party service providers who
              help us operate our Website and Services. These service providers
              are contractually obligated to keep your information confidential and
              use it only for the purposes for which we disclose it to them.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Privacy;
