// import '/../public/stylesheets/taskscreen.css'

import {List, ListItem, ListItemIcon, ListItemText,Checkbox} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
export default function Tasks({data}) {
    return (
       <div className='task'>
            <List sx={{border:'1px solid grey',margin:'20px auto',display:'flex',justifyContent:'space-between'}}>
                <ListItem>
                <Checkbox
                  edge="start"
                  sx={{margin:'auto 12px'}}
                />
                    <ListItemText primary={data.title}/>
                    <Link to='/'>
                    <ListItemIcon>
                        <DeleteIcon/>
                    </ListItemIcon>
                    </Link>
                    {/* <ListItemButton sx={{justifyContent:'flex-end',width:'auto'}}>DELETE</ListItemButton> */}
                </ListItem>
            </List>

       </div>
    )
}

