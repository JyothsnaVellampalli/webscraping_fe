import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    paddingTop: '60%', 
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop:0,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  price:{
    textDecoration: 'line-through',
  }
}));