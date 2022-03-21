import React from 'react';
import {useFormContext, Controller} from 'react-hook-form';
import {TextField, Grid, InputLabel} from '@mui/material';

function CustomTextField({name, label, required}) {
    const {control} = useFormContext();
    const isError = false;

  return (
   <Grid item xs={12} sm={6}>
      <InputLabel>{label}</InputLabel>
      
       <Controller as={TextField} 
       render={({ field }) => <TextField {...field} />}
       name={name} control={control} label={label} fullWidth required={required} error={isError}/>
   </Grid>
  )
}

export default CustomTextField
