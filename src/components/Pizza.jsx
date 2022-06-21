import React, {useState} from 'react'
import { Card, Button, Row, Col, Modal } from 'react-bootstrap'

function Pizza(props) {
    const [taille, setTaille] = useState('small');
    const [quantite, setQuantite] = useState(1);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const addPizza = () =>{
        let currentCart = JSON.parse( localStorage.getItem("cart"));
        let a = {
            "_id" : props.lapizza._id,
            "name": props.lapizza.name,
            "varients": taille,
            "quantity" : parseInt(quantite)
        };
        

        let alreadyPizza = currentCart.find(pizza => (pizza._id == props.lapizza._id) && (pizza.varients == taille));
        if (alreadyPizza) {
            alreadyPizza.quantity = alreadyPizza.quantity + parseInt(quantite);
        }
        else{
            currentCart.push(a);
        }


        localStorage.setItem("cart", JSON.stringify(currentCart))
        
        console.table(currentCart);
    }

  return (
    <>
    <Card style={{ width: '18rem',}} >
    <Card.Img variant="top" src={props.lapizza.image} onClick={handleShow} className="cursor"/>
    <Card.Body>
        <Card.Title>{props.lapizza.name}</Card.Title>
        <Card.Text>
            <Row>
                <Col>
                    <h6>
                        Taille : <select value={taille} onChange={(e)=> setTaille(e.target.value)}>
                                    {props.lapizza.varients.map(taille => (
                                        <option value={taille}>
                                            {taille}
                                        </option>
                                    ))}
                                </select>
                    </h6>
                </Col>
                <Col>
                    <h6>
                        Quantité : <select value={quantite} onChange={(e)=> setQuantite(e.target.value)}>
                                    {[...Array(10).keys()].map((v, i) => (
                                        <option value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>
                    </h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    Prix : {props.lapizza.prices[0][taille] * quantite} €
                </Col>
                <Col>
                    <Button className='bg-warning text-light' onClick={addPizza}>Add</Button>
                </Col>
            </Row>
        </Card.Text>
    </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{props.lapizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={props.lapizza.image} className="w-100 mb-4"/>
            <h4>Description</h4>
            <p>{props.lapizza.description}</p>
        </Modal.Body>
        </Modal>
    </>                                    
  )
}

export default Pizza