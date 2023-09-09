import NavBar from '../components/appBar.jsx';
import MultiActionAreaCard from '../components/collection.jsx';

import { Typography } from '@mui/material';

import { useGetCollectionsByUserIdQuery} from '../slices/collections-slice.js';
import { useSelector } from 'react-redux';

export default function HomeScreen() {
      const userId=useSelector((state)=>state.authUser.userInfo)
      console.log(userId)
      const {data,isloading,error}=useGetCollectionsByUserIdQuery(userId)
      // const newdata=data
      // console.log(newdata)
      
    console.log(data)

  
    return(
    <>
        <NavBar/>
        <body>
        <Typography variant='h4' textAlign={'center'} m={2} >All Collections</Typography>

{isloading?<div>loading....</div>:data?data.map((d)=>{return      <MultiActionAreaCard key={data._id} data={d}/>}):<div>No data available</div>}
        </body>
    </>
    )
    
}