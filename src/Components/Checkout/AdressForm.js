import React,{useState} from 'react';
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@mui/material';
import {useForm, FormProvider} from 'react-hook-form';
import CustomTextField from './CustomTextField';
import {Link} from 'react-router-dom';


function AdressForm({cart, checkdata}) {
  
    const methods = useForm();
    const [city,setCity] = useState("");
    const [state,setState] = useState("");
    let citylist=['Mumbai','Delhi','Hyderabad','Chennai','Banglore'];
    let statelist = ['AndraPradesh',"Maharastra","Tamilnadu","Dehi"]
 
  return (
    <div>
      <Typography variant="h6" gutterBottom>Shipping Adress</Typography>
      <FormProvider {...methods}>
          <form onSubmit ={methods.handleSubmit((data)=>{checkdata({...data,state,city})})}>
              <Grid container spacing={3}> 
               <CustomTextField required name="firstName" label="FirstName"/> 
               <CustomTextField required name="lastName" label="LastName"/> 
               <CustomTextField required name="email" label="Email"/> 
               <CustomTextField required name="address1" label="Adress Line 1"/> 
               
               {/* <CustomTextField requird name="city" label="City"/> 
               <CustomTextField requird name="state" label="State"/>  */}
               <Grid item xs={12} sm={6}>
                 <InputLabel>Shippping State</InputLabel>
                  <Select value={state} displayEmpty onChange={(b)=>{setState(b.target.value)}}>
                    <MenuItem disabled value="">
                    <em>Select State</em>
                    </MenuItem>
                    {statelist.map((b,i)=>(
                    <MenuItem key={i} value={b}>{b}</MenuItem>
                  
                  ))}
                  </Select>
                  </Grid>
               <Grid item xs={12} sm={6}>
                 <InputLabel>Shippping City</InputLabel>
                  <Select value={city} displayEmpty onChange={(b)=>{setCity(b.target.value)}}>
                    <MenuItem disabled value="">
                    <em>Select City</em>
                    </MenuItem>
                    {citylist.map((b,i)=>(
                    <MenuItem key={i} value={b}>{b}</MenuItem>
                  
                  ))}
                  </Select>
                  </Grid>
                  <CustomTextField requird name="Zip" label="ZipCode"/>
                  <Grid item xs={12} sm={6}>
                  <InputLabel>Shippping Country</InputLabel>
                  <Select value="INDIA" displayEmpty FullWidth>
                    <MenuItem disabled value="">
                    <em>Select country</em>
                    </MenuItem>
                    <MenuItem value="INDIA">INDIA</MenuItem>
                  </Select>
                  </Grid>
              </Grid>
              <div style={{display:"flex", justifyContent: "space-between", marginTop:"20px"}}>
                <Button component={Link} to='/cart' variant="outlined" >Back to Cart</Button>
                <Button type="submit" variant="contained" color="primary">Next</Button>
              </div>
          </form>
      </FormProvider>
    </div>
  )
}

export default AdressForm
