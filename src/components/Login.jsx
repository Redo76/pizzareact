import React,{useState, useEffect} from 'react';
import {Button, Form, Container, Alert} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from 'axios';



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false)
    
    const [connected, setConnected] = useState(false);

    let navigate = useNavigate();

    
    const connect = async () =>{
        let data;
        setConnected(false);
        const fetchData = async () => {
            let fetch = await axios.post('http://localhost:8080/users/connect', {
                "email" : email,
                "password" : password
            });
            console.log(email);
            console.log(fetch.data);
            return fetch.data;
        }
        data = await fetchData();

        
        if (email == "" || password == "") {
            setErrorEmail(true);
        }
        
        else if (data == "il existe pas !!" ) {
            setErrorEmail(true);
        }
        else if (data == "WrongPassword" ) {
            console.log(data.password);
            setErrorPassword(true);
        }
        else {
            navigate(-1, { replace: true })
            sessionStorage.setItem('loggedUser', JSON.stringify(data));
        }
            console.log(data);
            console.log(email);
        console.log(password);
    }



  return (
    <>
        <Container>
            <Form className='mt-3'>
            <Form.Group className="mb-3" >
                <Form.Label>Adresse E-mail</Form.Label>
                <Form.Control type="email" placeholder="Entrez votre adresse email" onChange={(e)=> setEmail(e.target.value)}/>
                {   errorEmail
                    ?
                    <Alert variant='danger' className='mt-3'>
                        <p>Email Invalide.</p>
                    </Alert>
                    :
                    ""
                }
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Mot de passe" onChange={(e)=> setPassword(e.target.value)}/>
                {   errorPassword
                    ?
                    <Alert variant='danger' className='mt-3'>
                        <p>Mot de passe Incorrect</p>
                    </Alert>
                    :
                    ""
                }
            </Form.Group>

            <Button variant="primary" type="button" onClick={connect}>Connexion</Button>
            {   connected
                    ?
                    <Alert variant='success' className='mt-3'>
                        <p>Vous êtes connecté!</p>
                    </Alert>
                    :
                    ""
                }
            </Form>

        </Container>
    </>
  )
}

export default Login