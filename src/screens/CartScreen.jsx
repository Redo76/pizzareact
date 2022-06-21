import React, {useState, useEffect} from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';
import Product from '../components/Product';

function CartScreen() {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() =>{
        const fetchData = async () => {
            let fetch = await axios('http://localhost:8080/pizzas');
            setData(fetch.data);
        }
        fetchData();
    }, [])

    useEffect(() =>{
        let currentCart = JSON.parse(localStorage.getItem("cart"));
        console.table(currentCart);
            setCart(currentCart);
    }, [])




  return (
    <>
        <Container>
            <Row>
                {cart.map( product => (
                    <Product lapizza={product}/>
                ))}
            </Row>
        </Container>
    </>
  )
}

export default CartScreen