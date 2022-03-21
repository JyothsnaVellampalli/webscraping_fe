import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({

toolbar :{},

container:{
    marginTop:"85px",
    marginLeft:"10%",
    marginRight : '5%',
},

  title: {
    marginTop: '5%',
    color : 'red',
  },

  emptyButton: {
    minWidth: '150px',
    marginRight : '20px',
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
  card: {
    marginTop: '20px',
  },
  media: {
    height: '300px',
    
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
},
btn : {
    border: '1px solid black',
},
}));