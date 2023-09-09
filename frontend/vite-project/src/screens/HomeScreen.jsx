import { useState } from 'react';

import NavBar from '../components/appBar.jsx';
import MultiActionAreaCard from '../components/collection.jsx';

import { Typography,TextField,Button} from '@mui/material';

import { useGetCollectionsByUserIdQuery,usePostCollectionMutation} from '../slices/collections-slice.js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function HomeScreen() {
    const userId=useSelector((state)=>state.authUser.userInfo)
    const navigate=useNavigate()

    const [details,setdetails]=useState({
        title:'',
        description:'',
        UserId:userId
    })
    //   console.log(userId)
      const {data,isloading,error}=useGetCollectionsByUserIdQuery(userId)
      const [login,{}]=usePostCollectionMutation()
      // const newdata=data
      // console.log(newdata)
      
    // console.log(data)

    //handlers for form

    const changeHandler=(e)=>{
        const {name,value}=e.target
        setdetails((pre)=>{
            return { ...pre,[name]:value}
        })
    }

    const submithandler=(e)=>{
        // e.preventDefault()
        login(details)
        navigate('/')
       
    }
    return(
        <>
            <NavBar/>

                <body style={{display:'flex',flexDirection:'column',alignItems:'center',width:'70%',margin:'30px auto'}}>

                    <Typography variant='h4' textAlign={'center'} m={2} >All Collections</Typography>
                    <form onSubmit={submithandler} style={{display:'flex',flexDirection:'column',}}>
                        <Typography sx={{marginTop:'8px'}}>Create New Collection</Typography>
                        <TextField  id="outlined-basic" name='title' label="Title" variant="outlined" sx={{width:'550px',marginTop:'8px'}} onChange={changeHandler}/>
                        <TextField id="outlined-basic" name='description' label="Description" variant="outlined" sx={{width:'550px',marginTop:'8px'}} onChange={changeHandler}/>
                        <Button type='submit' sx={{marginTop:'8px'}} variant='contained'>Sumbit</Button>
                    </form>

                    {isloading?<div>loading....</div>:data?data.map((d)=>{return      <MultiActionAreaCard key={data._id} data={d}/>}):<div>No data available</div>}
                </body>
        </>
    )
    
}