import React from 'react';
import {Typography, Grid, Button, Card, CardMedia,CardContent, CardActions} from '@mui/material';
import useStyles from './styles';
import {Link} from 'react-router-dom';


function Cart({cart, handleCartquantity,total,handleRemoveitem}) {
  const classes = useStyles();
  // console.log(cart);

  const EmptyCart = ()=>(
    <Typography variant="h6">Your cart is Empty!
    <Link to='/' className={classes.link} >Start adding some items.</Link>
    </Typography>
  );

  const FilledCart = ()=>(
    <>
    <Grid container spacing={3}>
      {cart.map((item)=>(
        <Grid item xs={12} sm={4} key={item.id}>
          <Card className={classes.card}>
            <CardMedia className={classes.media} sx={{height:"300px",width:"130px", alignItems:"center", marginLeft:"28%"}} image={item.image}/>
            <CardContent className={classes.cardContent}>
              <Typography variant="h6">{item.title}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <div className={classes.buttons}>
                <Button className={classes.btn} size="small" onClick={()=>{handleCartquantity(item.id,item.quantity-1)}}>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button className={classes.btn} size="small" onClick={()=>{handleCartquantity(item.id,item.quantity+1)}}>+</Button>
              </div>
              <Button variant="contained" color="secondary" onClick={()=>{handleRemoveitem(item.id)}}>Remove</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
    <div className={classes.cardDetails}>
      <div>
      
      <Typography variant='h5'color="secondary">Total : {total}</Typography>
      </div>
      <div>
      <Button component={Link} to='/checkout' className={classes.checkoutButton}  variant="contained" color="primary">Checkout</Button>
      </div>
    </div>
    </>
  )
  // if(cart.length!==0) return 'Loading...' ;

  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant='h4'>Your Shopping Cart</Typography>
      {cart.length===0 ? <EmptyCart/> : <FilledCart/>}
    </div>
  )
}

export default Cart
