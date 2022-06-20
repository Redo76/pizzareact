import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import {FiPhoneCall} from 'react-icons/fi';
import {ImMobile} from 'react-icons/im';
import {AiOutlineMail} from 'react-icons/ai';
// import { farmhouse } from "../../public/images/farmhouse.jpg";

const Contact = () => {
  return (
    <>
        <Container className='d-flex'>
        <div>
            <Row>
                <Col>
                    <h1>Pizza Delicious</h1>
                    <h2>Notre adresse :</h2>
                    <p>103 Rue des Olives noires</p>
                    <p>75021 Paris</p>
                    <p>POUR VOTRE INFORMATION! Nous offrons un service traiteur complet pour tout événement, grand ou petit.Nous comprenons vos besoins et nous préparerons nos plats pour satisfaire les critères les plus importants, à la fois esthétiques et gustatifs.</p>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead className='bg-warning'>
                    <tr>
                        <th colSpan={3} className="text-center">--Nos Coordonnées--</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><FiPhoneCall/></td>
                        <td>Télephone</td>
                        <td>01 23 45 67 98</td>
                    </tr>
                    <tr>
                        <td><ImMobile/></td>
                        <td>Portable</td>
                        <td>01 98 76 54 32</td>
                    </tr>
                    <tr>
                        <td><AiOutlineMail/></td>
                        <td>Email</td>
                        <td>contact@pizza-delicious.com</td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <img src={"/images/farmhouse.jpg"} alt="Pizza farmhouse" className='mx-4 my-2'/>
        </Container>
    </>
  )
}

export default Contact;
