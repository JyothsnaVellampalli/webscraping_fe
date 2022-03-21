import React from 'react';
import {Typography, List, ListItem, ListItemText} from '@mui/material';

function Review({cart,total}) {
  return (
    <div>
      <Typography variant="h6" gutterBottom>Order Summary</Typography>
      <List disablePadding>
          {cart.map((item)=>(
              <ListItem style={{padding: '10px'}} key={item.id}>
                  <ListItemText primary={item.title} secondary={`Quantity : ${item.quantity}`}/>
                  <Typography variant="body2">&#8377;{item.totPrice}</Typography>
                  
              </ListItem>
          ))}
        <ListItem style={{padding: '10px'}}>
            <ListItemText primary="Total :" />
            <Typography variant="subtitle1">&#8377;{total}</Typography>
        </ListItem>
      </List>
    </div>
  )
}

export default Review
