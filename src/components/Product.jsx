import React, {useState} from 'react'
import { Card, Button, Row, Col, Modal } from 'react-bootstrap'

function Product(props) {

    const [taille, setTaille] = useState("small");
    const [quantite, setQuantite] = useState("0");

  return (
    <>
    <Card style={{ width: '100%',}} >
    <Card.Img variant="top" src={props.lapizza.image}/>
    <Card.Body>
        <Card.Title>{props.lapizza.name} size : {props.lapizza.varients}</Card.Title>
        <Card.Text>
            <Row>
                <Col>

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
                    <Button className='bg-warning text-light'>Add</Button>
                </Col>
            </Row>
        </Card.Text>
    </Card.Body>
    </Card>
    </>
  )
}

export default Product