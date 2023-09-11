import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { logout } from '../slices/auth-slice';

import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

export default function ButtonAppBar() {
 const dispatch=useDispatch()
  const logoutHandler=()=>{
    dispatch(logout())
  }

const userInfo=useSelector((state)=>state.authUser)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Link to='/' style={{textDecoration:'none'}}>

          <Typography sx={{color:'white',fontSize:'28px',fontWeight:'bold'}}>Home</Typography>

          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign:'center',fontSize:'24px' }}>
            Your Task Mangement System
          </Typography>
          {userInfo.userInfo!=null?<Link><Button onClick={()=>logoutHandler()} variant='contained' color='secondary'>logout</Button></Link>:<Link to='/login'><Button variant='contained' color="secondary" >Login</Button></Link>} 
        </Toolbar>

      </AppBar>

    </Box>
    
  );
}