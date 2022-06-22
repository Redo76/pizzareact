import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';

function OrderScreen() {
    const [cart, setCart] = useState([]);


    useEffect(() =>{
        let currentCart = JSON.parse(localStorage.getItem("cart"));
        setCart(currentCart);
        console.log(cart);
    }, [])


  return (
    <>
        <Container className='d-flex'>
            <div>
                <div>
                    <h2 className='mb-3'>Votre adresse :</h2>
                    <p className='mb-0'>17 Rue des 4 Vents</p>
                    <p className='mb-0'>75006 Paris</p>
                    <p >Tél : 01 42 05 09 09</p>
                </div>
                <div>
                    <h2 className='mb-4'>Récapitulatif de commande :</h2>
                    <Table striped bordered hover>
                        <thead className='bg-warning'>
                            <tr>
                                <th className="text-center">Nom de la pizza</th>
                                <th className="text-center">Quantité</th>
                                <th className="text-center">Prix unitaire</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Télephone</td>
                                <td>01 23 45 67 98</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Portable</td>
                                <td>01 98 76 54 32</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Email</td>
                                <td>contact@pizza-delicious.com</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </Container>
    </>
  )
}

export default OrderScreen