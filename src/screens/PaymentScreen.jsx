
import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { Container, Table } from 'react-bootstrap';


function PaymentScreen() {
    const {state} = useLocation();

    const cart = state.cart

    console.log(state);
  return (
    <>
        <Container>
            <h1 className='my-4'>Merci d'avoir commandé chez nous !</h1>
            <p>ID de commande : {state.paypal.orderID}</p>
            <p>Date : {state.date}</p>
            <p>Montant payé : {state.total} €</p>
            <p>Email de l'utilisateur : {state.user.email}</p>
            <h4 className='mb-4'>Récapitulatif du panier :</h4>
            <Table>
                <thead className='bg-secondary'>
                    <tr>
                        <th className="text-center">Nom de la pizza</th>
                        <th className="text-center">Quantité</th>
                        <th className="text-center">Taille</th>
                        <th className="text-center">Prix unitaire</th>
                    </tr>
                </thead>
                <tbody>
                {cart.map((product, i) =>(
                    <tr key={i}>
                        <td>{product.name}</td>
                        <td className="text-center">{product.quantity}</td>
                        <td className="text-center">{product.varients}</td>
                        <td className="text-center">{product.prix ? product.prix : "--"} </td>
                    </tr>
                ))}                    
                </tbody>       
            </Table>
        </Container>
    </>
  )
}

export default PaymentScreen