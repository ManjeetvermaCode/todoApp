
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom';
import { useDeleteCollectionMutation } from '../slices/collections-slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function MultiActionAreaCard({data}) {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [deleteColl,{}]=useDeleteCollectionMutation()
  const id=data._id
  const deleteCollection=()=>{
    dispatch(deleteColl({id}))
    navigate('/register')
    
  }

  return (
    <>
        <Card sx={{width:'550px',margin:'15px auto' }}>

      <CardActionArea sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}} >
        <CardContent>
          <Link to={`/collection/${data._id}`}>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
          </Link>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
        <CardContent>
          {/* <Link to='/delete'> */}
            <Button onClick={deleteCollection}>Delete</Button>

          {/* </Link> */}
        </CardContent>
        
      </CardActionArea>

    </Card>
    </>
  );
}