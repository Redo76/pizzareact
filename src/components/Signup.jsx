import React,{useState, useEffect} from 'react';
import {Button, Form, Container, Alert} from 'react-bootstrap';
import axios from 'axios';


function Signup() {
    const [data, setData] = useState([]);

    const [email, setEmail] = useState("");
    const [pseudo, setPseudo] = useState("");
    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState([]);
    const [emailCreated, setEmailCreated] = useState(false);

    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    
    const validity = async (event) => {
        event.preventDefault();
        let data = "";
        const fetchData = async () => {
            let fetch = await axios('http://localhost:8080/users/' + email);
            return fetch.data
        }
        data = await fetchData();
        
        let detectedError;
        setErrorMessage([]);
        let tableErrorMessage = [];

        setEmailCreated(false)
        
        if (!validPassword.test(password)) {
            tableErrorMessage.push("Entrez un mot de passe valide.")
            detectedError = true;
        }

        if (password != confPassword) {
            tableErrorMessage.push("Les mots de passe ne correspondent pas.")
            detectedError = true;
        }
        console.log("ERREUR ??? " + detectedError);

        if (data == "AlreadyEmail"){
            tableErrorMessage.push("Cet email existe déja.")
            detectedError = true;
        }

        if (detectedError) {
            setError(true)
            setErrorMessage(tableErrorMessage)
        }
        else{
            setError(false);
            setEmailCreated(true);
            console.log(prenom);
            console.log(nom);
            try {
                let res = await axios.post('http://localhost:8080/users/adduser',
                    {
                        "username" : pseudo,
                        "email" : email,
                        "first_name" : prenom,
                        "last_name" : nom,
                        "password" : password
                    })
                } catch (error) {
                    console.log(error);
                }
        }
        console.log(emailCreated);
    }

  return (
    <>
        <Container>
            <Form id='signupForm' className='mt-3' name='signupFrom'>
                <Form.Group className="mb-3">
                    <Form.Label>Adresse e-mail</Form.Label>
                    <Form.Control type="email" placeholder="Entrez votre mail" name='email' required onChange={(e) =>setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Pseudo</Form.Label>
                    <Form.Control type="text" placeholder="pseudo" name='username' required onChange={(e) =>setPseudo(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Prenom</Form.Label>
                    <Form.Control type="text" placeholder="prenom" name='firstName' required onChange={(e) =>setPrenom(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" placeholder="nom" name='lastName' required onChange={(e) =>setNom(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control type="password" placeholder="mot de passe" name='password' required onChange={(e) =>setPassword(e.target.value)}/>
                    <Form.Text className="text-muted">
                        Le mot de passe doit contenir au moins 6 caractères, une majuscule, une minuscule, et un chiffre. <br/>
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Mot de passe de confirmation</Form.Label>
                    <Form.Control type="password" placeholder="confirmer le mot de passe" name='confPassword' required onChange={(e) => setConfPassword(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="button" onClick={validity}>Confirmer</Button>

                {   error
                    ? 
                    <Alert variant='danger' className='mt-3'>
                        <p>Liste des erreurs : </p>
                        {console.log(errorMessage)}
                        {errorMessage.map((message)=>(
                            <p>{message}</p>
                        ))}
                    </Alert>
                    : 
                    ""
                }

                {   emailCreated 
                    ?
                    <Alert variant='success' className='mt-3'>
                        Vous avez créez un compte utilisateur.
                    </Alert>
                    :
                    ""
                }
            </Form>
        </Container>
    </>
  )
}

export default Signup