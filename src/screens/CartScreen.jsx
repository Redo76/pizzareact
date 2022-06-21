import React, {useState, useEffect, } from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';
import Product from '../components/Product';

function CartScreen() {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() =>{
        const fetchData = async () => {
            let fetch = await axios('http://localhost:8080/pizzas');
            setData(fetch.data);
            setCount(count+1)
        }
        fetchData();
    }, [cart])

    useEffect(() =>{
            let currentCart = JSON.parse(localStorage.getItem("cart"));
            setCart(currentCart);
            console.log(123);
    }, [])
    
    const remove = (newCart) =>{
        setCart(newCart);
    }

    return (
        <>
        <Container>
            <Row>
                {cart.map( (product) => (
                    <Product lapizza={product} remove={remove}/>
                ))}
            </Row>
        </Container>
    </>
  )
}

export default CartScreen