import NavBar from '../components/appBar.jsx';
import LoginForm from './loginForm.jsx';
import {Box} from '@mui/material';

import { useGetCollectionsQuery,useGetCollectionsByUserQuery } from '../slices/collections-slice.js';

export default function HomeScreen() {

      const {data,isloading,error}=useGetCollectionsByUserQuery('64f1b85bf77da9a97f3f8a8e')
      console.log('collection-',data)


  
    return(
    <>
        <NavBar/>
        <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh" // This ensures that the component takes the full height of the viewport
    >

      <Box width="40%" sx={{height:'100vh',alignItems:'center'}}>
        <h2>Centered Component with 40% Width</h2>
      </Box>

    </Box>
    </>
    )
    
}