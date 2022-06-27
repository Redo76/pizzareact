import React,{useState, useEffect} from 'react';
import {Button, Form, Container} from 'react-bootstrap';
import axios from 'axios';


const Login = () => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        const fetchData = async () => {
            let fetch = await axios('http://localhost:8080/users');
            setData(fetch.data);
        }
        fetchData();
    }, [])

  return (
    <>
        <Container>
            <Form className='mt-3'>
            <Form.Group className="mb-3" >
                <Form.Label>Adresse E-mail</Form.Label>
                <Form.Control type="email" placeholder="Entrez votre mail" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Mot de passe" />
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    </>
  )
}

export default Login