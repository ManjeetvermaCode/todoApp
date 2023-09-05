import {Button, Dialog, DialogActions,TextField, DialogContent, DialogTitle, Stack, FormControlLabel, Checkbox, IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import NavBar from '../components/appBar'

export default function LoginForm() {
    

    return(
        <>
            <NavBar/>
            <div style={{textAlign:'center'}}>
        <h1>Mui-Diologue</h1>
        <Button color='primary' variant='contained'>Open POPUP</Button>
        <Dialog open={open}   fullWidth   >{/*additional properties- maxWidth='lg', fullScreen */}
          <DialogTitle>User Registaration</DialogTitle>
            <DialogContent>
              <Stack spacing={2} margin={2}>
                <TextField variant='outlined' label='Username'></TextField>
                <TextField variant='outlined' label='Password'></TextField>
                <TextField variant='outlined' label='Email'></TextField>
                <FormControlLabel control={<Checkbox defaultChecked color='primary'></Checkbox>} label='agree to terma and condition'></FormControlLabel>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Link  fullWidth='true' to='/'>
                  <Button  variant='contained' color='primary'>
                    Back
                  </Button>
                </Link>

                

                <Button color='primary' variant='contained' >Submit</Button>
                </div>

              </Stack>
             
            </DialogContent>
            <DialogActions>
            {/* <Button color='success' variant='contained' onClick={closeModal}>Yes</Button>{/*onClick we can pass another function for some specific task */}

              {/* <Button color='error' variant='contained' onClick={closeModal}>Close</Button>  */}
            </DialogActions>
        </Dialog>
      </div>
        </>
    )
}