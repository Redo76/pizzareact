import React, {useState, useEffect, } from 'react'
import {Container, Row, Col, Table } from 'react-bootstrap'
import axios from 'axios';
import Product from '../components/Product';
import { LinkContainer } from 'react-router-bootstrap';

function CartScreen() {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() =>{
        const fetchData = async () => {
            let fetch = await axios('http://localhost:8080/pizzas');
            setData(fetch.data);
        }
        fetchData();
        setCount(count +1)
    }, [cart])
    
    useEffect(() =>{
        let currentCart = JSON.parse(localStorage.getItem("cart"));
        setCart(currentCart);
    }, [])
    
    const remove = () =>{
        setCount(count+1);
    }
    const updateCart = (newCart) =>{
        setCart(newCart);
    }
    
    useEffect(()=>{
        let currentCart = JSON.parse(localStorage.getItem("cart"));
        let somme = 0;
        if (data.length > 0) {
            for (const pizza of currentCart) {
                let a =  data.find(element => element.name == pizza.name)
                console.table(pizza);
                somme += pizza.quantity * parseInt(a.prices[0][pizza.varients]);
            }
        }
        setTotal(somme);
    },[count, data])

    return (
        <>
        <Container>
            <Row>
                {cart.map( (product, i) => (
                    <Product key={i} lapizza={product} remove={remove} updateCart={updateCart}/>
                ))}
            </Row>
            <div className='d-flex justify-content-end align-items-center my-3'>
                <h4 className='mx-5'>Prix total : {total} €</h4>
                {   sessionStorage.getItem("loggedUser")
                    ?
                    <LinkContainer to={"/Order"}>
                        <button className='btn btn-primary'>Confirmer la commande</button>
                    </LinkContainer>
                    :
                    <LinkContainer to={"/Login"}>
                        <button className='btn btn-primary'>Confirmer la commande</button>
                    </LinkContainer>
                }
            </div>
        </Container>
    </>
  )
}

export default CartScreen