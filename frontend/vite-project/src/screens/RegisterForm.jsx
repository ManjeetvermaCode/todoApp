import {Button, Dialog,TextField, DialogContent, DialogTitle, Stack, Typography} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/appBar'
import { useRegisterMutation } from '../slices/login-slice';
import { setCredentials } from '../slices/auth-slice';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function RegisterForm() {
    const [email,setemail]=useState('')
    const [pass,setpass]=useState('')
    const [name,setname]=useState('')
    // const [check,setcheck]=useState(true)

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const [login,{isloading,error}]=useRegisterMutation()


    // useEffect(()=>{
    //   navigate('/')
    // },[userId])
    const handleSubmit=async(e)=>{
      e.preventDefault()
      try {
        const response=await login({email,password:pass,username:name}).unwrap()
        console.log(response)
        dispatch(setCredentials(response))
        navigate('/')

      } catch (error) {
        console.log(error.data)
        
      }
    }

    return(
        <>
            <NavBar/>
          
            <div style={{textAlign:'center'}}>
        
        <Dialog open fullWidth   >{/*additional properties- maxWidth='lg', fullScreen */}
  <DialogTitle>User Registaration</DialogTitle>
    <DialogContent>
      <Stack spacing={2} margin={2}>
        <form onSubmit={handleSubmit} style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
        <TextField variant='outlined' label='UserName' margin='normal' value={name} onChange={(e)=>setname(e.target.value)} type='text' ></TextField>

        <TextField variant='outlined' label='Email' margin='normal' value={email} onChange={(e)=>setemail(e.target.value)} type='email' ></TextField>

        <TextField variant='outlined' label='Password' margin='normal' value={pass} onChange={(e)=>setpass(e.target.value)} type='password' ></TextField>
        <Typography>Already a User ? <Link to='/login'>Login</Link></Typography>

        {/* <FormControlLabel margin='normal'  control={<Checkbox value={check} onClick={()=>setcheck(!check)} defaultChecked color='primary'></Checkbox>} label='agree to terma and condition'></FormControlLabel> */}
        
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <Link  fullwidth='true' to='/'>
          <Button  variant='contained' color='primary'>
            Back
          </Button>
        </Link>

        

        <Button type='submit' color='primary' variant='contained' >Submit</Button>
        </div>
        </form>

      </Stack>
     
    </DialogContent>
    
</Dialog>
</div>
        </>
    )
}