import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer style={{marginTop: "5rem"}}>
            <Container className="pb-5">
                <Row>
                    <Col md={3}>
                        <img src="assets/Fanconvo-header-logo.png" alt="footer logo" />
                    </Col>

                    <Col md={3} className="text-end">
                        <a href="/" className='footer-link'>How Fanconvo Works?</a>
                    </Col>

                    <Col md={3} className="text-end">
                        <a href="/" className='footer-link'>Terms of Use</a>
                    </Col>

                    <Col md={3} className="text-end">
                        <a href="/" className='footer-link'>Contact Us</a>
                    </Col>

                    <Col xs={12}>
                        <p className='footer-text text-center mt-4'>© 2021 Fanconvo</p>
                    </Col> 
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;