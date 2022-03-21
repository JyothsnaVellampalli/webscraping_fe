import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  title: {
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  image: {
    marginRight: '10px',
  },
  grow: {
    flexGrow: 1,
  },
  input : {
    width : "280px",
    borderRadius : "5px",
    backgroundColor : "#e0e0e0",
    color: "black",
    marginTop:"10px",
    marginBottom:"10px",
    marginRight : "5px",
    '&:hover':{
      backgroundColor : 'white',
    }
  },
  

  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
}));