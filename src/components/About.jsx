import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <>
        <Container style={{"margin-top": "50px"}}>
            <h1>Qui sommes-nous ?</h1>
            <p>Lorem200</p>
            <h1>Notre spécialité</h1>
            <Row>
                <Col md={6}>
                    <p>Lorem200</p>
                </Col>
                <Col md={6}>
                    <p>Lorem200</p>
                </Col>
            </Row>
            <Row>
                <h1>Le Chef</h1>
                <Col md={3}>
                    <p>Lorem100</p>
                </Col>
                <Col md={3}>
                    <p>Lorem100</p>
                </Col>
                <Col md={3}>
                    <p>Lorem100</p>
                </Col>
                <Col md={3}>
                    <p>Lorem100</p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default About