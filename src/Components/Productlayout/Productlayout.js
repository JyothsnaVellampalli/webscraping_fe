import React from 'react';
import {Card,CardMedia, CardContent, CardActions, Typography, IconButton, Box, Rating} from '@mui/material';
import useStyles from './styles';

import { AddShoppingCart } from '@mui/icons-material';

function Productlayout({product, AddtoCart}) {
  const classes = useStyles();
  
  return (
   <Card className={classes.root}>
     {product.producttype == "Mobile"?(
     <CardMedia className={classes.media} image={product.image} sx={{height:"100px",width:"120px", alignItems:"center", marginLeft:"28%"}} title={product.title}/>) 
     :(<CardMedia className={classes.media} image={product.image} sx={{height:"100px",width:"200px", alignItems:"center", marginLeft:"28%"}} title={product.title}/>) }
     <CardContent>
      <div className={classes.cardContent}>
        <Typography variant='h7' gutterBottom>{product.title}</Typography>
        <div>
        {product.producttype == "Mobile"?(
        <Typography variant='h7' className={classes.price}>&#8377;{product.MRP}</Typography>)
        : (<Typography variant='h7' className={classes.price}>&#8377;{product.MRP}</Typography>)}
        <br></br>
        {product.producttype == "Mobile"?(
        <Typography variant='h7'>&#8377;{product.OfferPrice}</Typography>)
        : (<Typography variant='h7'>&#8377;{product.OfferPrice}</Typography>)}
        </div>
      </div>
      <Typography variant='body2' color='textSecondary'>Product Details : {product.producttype}</Typography>
      <Box display="flex" justifyContent="space-between">
          <Typography>Rating</Typography>
          <Typography variant="subtitle1"> <Rating size="small" value={product.rating ? Number(product.rating) : 3} readOnly/> </Typography>
        </Box>
     </CardContent>
     <CardActions className={classes.cardActions}>
       <IconButton aria-label="Add to Cart"  onClick={()=>{AddtoCart(product)}}>
         <AddShoppingCart/>
       </IconButton>
     </CardActions>

   </Card>
  )
}

export default Productlayout




