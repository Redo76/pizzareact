import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Card, Button, Row, Col} from 'react-bootstrap'
import { FaTrash } from "react-icons/fa";


function Product(props) {

    const [taille, setTaille] = useState("small");
    const [quantite, setQuantite] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() =>{
        const fetchData = async () =>{
            let fetch = await axios("http://localhost:8080/pizzas/" + props.lapizza._id);
            setData(fetch.data);
            setQuantite(props.lapizza.quantity)
            setTaille(props.lapizza.varients)
        }
        fetchData()
    }, [props.delete])

    const updatePizza = (e) =>{
        let cart = JSON.parse( localStorage.getItem("cart"));
        let alreadyPizza = cart.find(pizza => (pizza._id == props.lapizza._id) && (pizza.varients == taille))
        if (alreadyPizza) {
            alreadyPizza.quantity = parseInt(e.target.value);
            localStorage.setItem("cart", JSON.stringify(cart))
        }
        setQuantite(e.target.value);
        console.table(cart);
        console.log(alreadyPizza.quantity);
        

        // useEffect(()=>{
        //     const suppression = props.;
        // }, [props.deletePizza()])
    } 

    const deletePizza = () =>{
        let cart = JSON.parse( localStorage.getItem("cart"));
        let alreadyPizza = cart.find(pizza => (pizza._id == props.lapizza._id) && (pizza.varients == taille))
        console.log(alreadyPizza);
        let newCart =cart.filter( pizza => pizza != alreadyPizza)
        localStorage.setItem("cart", JSON.stringify(newCart));
        props.remove(newCart);

        console.table(newCart);
    }


  return (
    <>
    <Card className='flex-row' style={{ width: '100%',}} >
        <Card.Img  src={data.image} style={{ width: '35%',}}/>
        <Card.Body >
            <Card.Title>{props.lapizza.name} -- size : {props.lapizza.varients}</Card.Title>
            <Card.Text>
                <Row>
                    <Col>
                        
                    </Col>
                    <Col>
                        <h6>
                            Quantité : <select value={quantite} onChange={(e)=> updatePizza(e)}>
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
                        Prix : { data.prices ? data.prices[0][taille] * parseInt(quantite) : ""} €
                    </Col>
                    <Col>
                        <Button className='bg-danger text-light' onClick={deletePizza}><FaTrash/></Button>
                    </Col>
                </Row>
            </Card.Text>
        </Card.Body>
    </Card>
    </>
  )
}

export default Product