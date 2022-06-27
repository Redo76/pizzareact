import React,{useState, useEffect} from 'react';
import {Button, Form, Container} from 'react-bootstrap';
import axios from 'axios';


function Signup() {
    const [data, setData] = useState([]);

    useEffect(() =>{
        const fetchData = async () => {
            let fetch = await axios('http://localhost:8080/users');
            setData(fetch.data);
        }
        fetchData();
    }, [])

    console.log(document.querySelector('#signupForm').email);

  return (
    <>
        <Container>
            <Form id='signupForm' className='mt-3' action='/users/adduser' method='post' name='signupFrom'>
                <Form.Group className="mb-3">
                    <Form.Label>Adresse e-mail</Form.Label>
                    <Form.Control type="email" placeholder="Entrez votre mail" name='email' required/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Pseudo</Form.Label>
                    <Form.Control type="text" placeholder="pseudo" name='username' required/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Prenom</Form.Label>
                    <Form.Control type="text" placeholder="prenom" name='firstName' required/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" placeholder="nom" name='lastName' required/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control type="password" placeholder="mot de passe" name='password' required/>
                    <Form.Text className="text-muted">
                        Le mot de passe doit contenir ....
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Mot de passe de confirmation</Form.Label>
                    <Form.Control type="password" placeholder="confirmer le mot de passe" name='confPassword' required/>
                </Form.Group>

                <Button variant="primary" type="submit">Confirmer</Button>
            </Form>
        </Container>
    </>
  )
}

export default Signup