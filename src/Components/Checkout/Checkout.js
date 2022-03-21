import React,{useState} from 'react';
import useStyles from './styles';
import {Typography, Paper, Stepper, Step, StepLabel} from '@mui/material';
import AdressForm from './AdressForm';
import PaymentForm from './PaymentForm';

function Checkout({cart,total,setCart,setTotal}) {
    const classes = useStyles();
    const [activeStep,setActiveStep] = useState(0);
    const steps = ['Shipping address', 'Payment details'];
    const [shippingData,setShippingData] = useState({});
    // console.log({cart});
    // console.log({total});

    const nextStep = ()=>{setActiveStep((step)=>step+1)};
    const prevstep = ()=>{setActiveStep((step)=>step-1)};

    const checkdata = (data)=>{
        setShippingData(data);
        nextStep();
    }

    // console.log({shippingData});

    const Form = ()=>
        activeStep===0 ? <AdressForm cart={cart} setShippingData={setShippingData} nextStep={nextStep} checkdata={checkdata}/> 
        : <PaymentForm cart={cart} total={total} prevstep={prevstep} shippingData={shippingData} setCart={setCart} setTotal={setTotal}/>

    const Confirmation = ()=>(
        <div>Confirmation</div>
    )
    
  return (
    <div className={classes.layout}>
        <Paper className={classes.paper}>
            <Typography variant="h4" align="center">Checkout</Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((step)=>(
                    <Step key={step}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className={classes.form}>
            {activeStep===steps.length ? <Confirmation/> : <Form/>}
            </div>
        </Paper>
    </div>
      
  )
}

export default Checkout
