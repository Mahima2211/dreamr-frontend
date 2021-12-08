import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/esm/Navbar';
import Row from 'react-bootstrap/esm/Row';
import icon from '../../images/bulb.png';
import './Brandbar.css';

export default function Brandbar() {
  return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <Row>
                        <Col>
                            <img
                                alt="Bulbs"
                                src={icon}
                                width="30"
                                height="60"
                                className="d-inline-block align-center"
                            />{' '}
                        </Col>
                        <Col>
                            <h1>dreamr</h1>
                        </Col>
                    </Row>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}
