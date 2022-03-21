import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Typography, Autocomplete, TextField, InputAdornment} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useStyles from './Styles';
import {Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
function Navbar({selected,handleOption}) {
    const classes = useStyles();
    
    let handleChange =(e)=>{
      // console.log(e.target.textContent);
      handleOption(e.target.textContent.toString());}
    
  return (
    <div>
      <AppBar position='fixed' className={classes.appBar} color="inherit">
          <Toolbar>
              <Typography variant='h6' component={Link} to='/' color="inherit" className={classes.title}>
                  <img src="https://iconarchive.com/download/i77853/custom-icon-design/pretty-office-11/shop.ico" alt="Shop Here" height="25px" className={classes.image}/>
                  Commerce.js
              </Typography>
              <div className={classes.grow}/>
              <Autocomplete disablePortal id="searchbar" size="small" className={classes.input}
                  autoComplete = {true} autoHighlight={true} disableClearable
                  loadingText="Loading..."
                  autoSelect={true} onChange={handleChange}
                  // clearIcon={<SearchIcon fontSize="small"/>}
                  // options={products.map((product,i)=>product.title)} 
                    options={['All','Mobiles','Watches']}
                    renderInput={(params)=>(<TextField {...params} label="Search..." 
                    
                     InputProps={{...params.InputProps,type:"search", 
                     startAdornment:<InputAdornment position="start">
                       <IconButton arai-label="search_icon">
                        <SearchIcon/>
                        </IconButton>
                        </InputAdornment>}}
                        />)}
                         /> 
                    
              <div className={classes.button}>
                  
                  <IconButton component={Link} to='/cart' aria-label="Show Cart Items" color="inherit">
                      <Badge  badgeContent={selected} color="secondary">
                          <ShoppingCartIcon/>
                      </Badge>
                  </IconButton>
              </div>
          </Toolbar>
      </AppBar>

    </div>
  )
}

export default Navbar

