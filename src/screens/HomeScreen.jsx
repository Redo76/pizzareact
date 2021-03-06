import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Pizza from '../components/Pizza';
import axios from 'axios';

const HomeScreen = () => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        const fetchData = async () => {
            let fetch = await axios('http://localhost:8080/pizzas');
            console.log(fetch.data);
            setData(fetch.data);
        }
        fetchData();
    }, [])

    useEffect(() =>{
        let cart = localStorage.getItem("cart")
        if (!cart) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
        }, [])

  return (
    <>
        <Container>
            <Row>
                {data.map( (pizza , i) => (
                    <Col key={i} md={4}>
                        <Pizza lapizza={pizza}/>
                    </Col>
                ))}
            </Row>
        </Container>
    </>
  )
}

export default HomeScreen