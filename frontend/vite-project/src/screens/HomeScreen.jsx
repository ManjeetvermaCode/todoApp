import NavBar from '../components/appBar.jsx';
import {Box} from '@mui/material';

import axios from 'axios'


export default function HomeScreen() {
    try {
        axios.get('http://localhost:3000/api/tasks')
        .then((response) => {
          const allTasks = response.data; // Access the response data here
          console.log(allTasks);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } catch (error) {
        console.log(error)
    }



  
    return(
    <>
        <NavBar/>
        <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh" // This ensures that the component takes the full height of the viewport
    >

      <Box width="40%" sx={{height:'100vh'}}>
        <h2>Centered Component with 40% Width</h2>

      </Box>

    </Box>
    </>
    )
    
}