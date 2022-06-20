import React, {useState} from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

function Pizza(props) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.lapizza.image} />
    <Card.Body>
        <Card.Title>{props.lapizza.name}</Card.Title>
        <Card.Text>
            <Row>
                <Col>
                    <h6>
                        Taille : <select>
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
                        Quantité : <select>
                                    {[...Array(10).keys()].map((v, i) => (
                                        <option value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>
                    </h6>
                </Col>
            </Row>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>

  )
}

export default Pizza