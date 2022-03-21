import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    appBar: {
      position: 'relative',
    },
   
    layout: {
      marginTop: '100px',
      width: 'auto',
    marginLeft: "5%",
    marginRight: "5%",
    },
    paper: {
      paddingBottom:"5%",
      paddingTop : '2%',
      marginLeft:'15%',
      marginRight: '15%',
      paddingLeft:'7%',
      paddingRight: '7%',
      
    },
    stepper: {
    paddingTop : '5%',
    paddingLeft : '5%',
    paddingRight : '5%',
    },
    form:{
      marginTop : "5%",
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
    },
    divider: {
      margin: '20px 0',
    },
    spinner: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }));