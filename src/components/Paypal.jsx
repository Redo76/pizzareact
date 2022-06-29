import axios from 'axios';
import React, {useState} from 'react'
import ReactDOM from "react-dom";

const Paypal = (props) => {
    
    const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

    const createOrder = (data, actions) => {
    return actions.order.create({
        purchase_units: [
            {
                amount: {
                    value: props.amount,
                },
            },
        ],
    });
    };

    const onApprove = async (data, actions) => {
        let res = await axios.post("http://localhost:8080/orders/addOrder",{
            "paypal" : data,
            "user" : sessionStorage.getItem("loggedUser"),
            "cart" : props.cart 
        })
        return actions.order.capture();
    };


    return (
    <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
    />
    );
}

export default Paypal