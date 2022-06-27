import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap';
import Paypal from '../components/Paypal';

// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

function OrderScreen() {
    const [cart, setCart] = useState([]);
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(null);
    

    useEffect(() =>{
        const fetchData = async () => {
            let fetch = await axios('http://localhost:8080/pizzas');
            console.log(fetch.data);
            setData(fetch.data);
        }
        fetchData();
    }, [])

    useEffect(() =>{
        let currentCart = JSON.parse(localStorage.getItem("cart"));
        setCart(currentCart);
        console.log(cart);
    }, [])

    useEffect(()=>{
        let currentCart = JSON.parse(localStorage.getItem("cart"));
        let somme = 0;
        if (data.length > 0) {
            let newCart =[];
            for (const pizza of currentCart) {
                let a =  data.find(element => element.name == pizza.name)
                console.table(pizza);
                somme += pizza.quantity * parseInt(a.prices[0][pizza.varients]);
                pizza.prix = parseInt(a.prices[0][pizza.varients]);
                newCart.push(pizza);
            }
            setTotal(somme);
            setCart(newCart);
        }
    },[data])


  return (
    <>
        <Container className='d-flex'>
            <div>
                <div>
                    <h2 className='mb-2'>Votre adresse :</h2>
                    <p className='mb-0'>17 Rue des 4 Vents</p>
                    <p className='mb-0'>75006 Paris</p>
                    <p>Tél : 01 42 05 09 09</p>
                </div>
                <div>
                    <h2 className='mb-4'>Récapitulatif de commande :</h2>
                    <Table striped bordered hover>
                        <thead className='bg-warning'>
                            <tr>
                                <th className="text-center">Nom de la pizza</th>
                                <th className="text-center">Quantité</th>
                                <th className="text-center">Taille</th>
                                <th className="text-center">Prix unitaire</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cart.map( (pizza , i) => (
                            <tr key={i}>
                                <td>{pizza.name}</td>
                                <td className="text-center">{pizza.quantity}</td>
                                <td className="text-center">{pizza.varients}</td>
                                <td className="text-center">{pizza.prix ? pizza.prix : "--"} </td>
                                {console.log(data.find(element => element == pizza.name))}
                            </tr>
                        ))}
                            <tr>
                                <td>Total à payer :</td>
                                <td className="text-center" colSpan={3}>{total ? total : "--"} €</td>
                            </tr>
                        </tbody>
                    </Table>
                    {total ? <Paypal amount={total}/> : ""}
                </div>
            </div>
        </Container>
    </>
  )
}

export default OrderScreen