import React from 'react';
import Grid from '@mui/material/Grid';
import Productlayout from '../Productlayout/Productlayout';
import useStyles from './styles';


function Products({products, AddtoCart, filtered}) {
    const classes = useStyles();
    // console.log({products});
  return (
    <main className={classes.content}>
        
        <Grid container spacing={3} justifyContent="center">
            {filtered.map((product) =>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Productlayout product={product} AddtoCart={AddtoCart}/>
                </Grid>
            ))}

        </Grid>

    </main>
  )
}

export default Products
