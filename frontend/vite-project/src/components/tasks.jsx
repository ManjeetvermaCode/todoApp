import { useState } from 'react';

import {List, ListItem, ListItemIcon, ListItemText,Checkbox} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

import { useToggleTaskStatusMutation } from '../slices/tasks-slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Tasks({data}) {
    // console.log(data.completed)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const [sendBool,{}]=useToggleTaskStatusMutation()
    const [checked,setchecked]=useState(data.completed)
    console.log(checked)

    const id=data._id
    const toggleStatus=()=>{
        setchecked(!checked)
        dispatch(sendBool({id,checked}))
        navigate(`/collection/${data._id}`)
        
    }

    return (
       <div className='task'>
            <List sx={{border:'1px solid grey',margin:'20px auto',display:'flex',justifyContent:'space-between'}}>
                <ListItem>
                <Checkbox
                checked={checked}
                onChange={toggleStatus}
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

