
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom';

export default function MultiActionAreaCard({data}) {
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
          <Link to='/delete'>
            <Button>Delete</Button>

          </Link>
        </CardContent>
        
      </CardActionArea>

    </Card>
    </>
  );
}