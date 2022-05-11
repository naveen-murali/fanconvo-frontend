import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <nav>
                <Container className="pt-3 px-3">
                    <Row>
                        <Col md={6} xs={12} className="order-2 order-md-1 d-flex justify-content-md-start justify-content-center">
                            <a href='/' className="fanc-logo">
                                <img src="assets/Fanconvo-header-logo.png" alt="Header logo" />
                            </a>
                        </Col>
                        <Col md={6} xs={12} className="order-1 order-md-2 d-flex justify-content-md-end justify-content-center">
                            <Nav.Link href="#action1" className="text-white">Sign Up</Nav.Link>
                            <Nav.Link href="#action1" className="text-white">Login</Nav.Link>
                        </Col>
                        <Col xs={12} className="order-3">
                            <p className='text-white fanc-tagline text-md-start text-center'>A marketplace for conversations, mentorships and performances.</p>
                        </Col>
                        <Col xs={12} className="order-4">
                            <form action="#" className="search-form d-flex flex-md-row flex-column align-items-center text-white">
                                <label htmlFor="search">Search New Talet</label>
                                <div className="search mx-md-5">
                                    <input type="search" name="search" className="fanc-search" id="search" />
                                    <a href="/" className='p-0 m-0'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
                                    </a>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </nav>
        </>
    );
};
export default Header;