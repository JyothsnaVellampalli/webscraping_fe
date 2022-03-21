import React,{useState} from 'react';
import {Typography, Button, Divider} from '@mui/material';
import Review from './Review';
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, ElementsConsumer} from "@stripe/react-stripe-js";
import axios from "axios";


const stripePromise = loadStripe("pk_test_51Kd6IhSJIOVQ4oboy8lok1cMAfD6xW031I3wggfBHPAD2qDsXxT2KWUFuq3ufNXkPb7FidD4J7yBypgDJudMda1U004ext1SXY");
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function PaymentForm({cart,total,prevstep,shippingData,setCart,setTotal}) {
  let [order,setOrder] = useState({});
  const handleSubmit = async (event, elements, stripe)=>{
    event.preventDefault();

    if(!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({type : 'card', card: cardElement});

    if(error) {
      console.error(error);
    } else {
      const orderData = {
        items : cart,
        Customer : {firstname : shippingData.firstname , lastname : shippingData.lastname, email : shippingData.email},
        Shipping : {street : shippingData.address1, city: shippingData.city, state : shippingData.state, zipCode : shippingData.zipCode},
        fulfillment : {},
        payment : {
            gateway : 'stripe',
            stripe : {
              payment_method_id : paymentMethod.id
            }
        }
      }
      setOrder(orderData);

      let response = axios.post("http://localhost:4000/users/orderdetails/",{orderData: orderData});
      console.log(response);
     
      // if(response.data.statuscode === 200) {
        let redirect = window.location.replace("http://localhost:3000/orderstatus");
      // }
      let refreshcart = axios.delete("http://localhost:4000/users/refreshcart");
      setCart([]);
      setTotal(0);
      
    }

  }
  return (
    <>
    <Review cart={cart} total={total}/>
    <Divider />
    <Typography variant='h6' gutterBottom>Payment Method</Typography>
    <Elements stripe={stripePromise}>
    <ElementsConsumer>
      {({elements, stripe}) => (
        <form onSubmit={(b)=>handleSubmit(b, elements, stripe)}>
          <CardElement/>
          <div style={{display:'flex', justifyContent: 'space-between'}}>
            <Button variant='outlined' onClick={prevstep}>Back</Button>
            <Button type="submit" variant='contained' disabled={!stripe} color="primary">Pay &#8377;{total}</Button>
          </div>
        </form>
      )}
    </ElementsConsumer>
    </Elements>
    </>

  )
}

export default PaymentForm
