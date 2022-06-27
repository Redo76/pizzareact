import React, {useState} from 'react'
import ReactDOM from "react-dom";

const Paypal = (props) => {
    
    const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
    
    console.log(props.amount)

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

    const onApprove = (data, actions) => {
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