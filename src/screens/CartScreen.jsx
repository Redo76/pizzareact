import React, {useState, useEffect} from 'react'
import {Container } from 'react-bootstrap'
import axios from 'axios';
import Product from '../components/Product';

function CartScreen() {
    const [data, setData] = useState([]);

    useEffect(() =>{
        const fetchData = async () => {
            let fetch = await axios('http://localhost:8080/pizzas');
            setData(fetch.data);
        }
        fetchData();
    }, [])

  return (
    <>
        <Container>
            {data.map( (product) => {
                <Product lapizza={product}/>
            })}
        </Container>
    </>
  )
}

export default CartScreen