import { useEffect, useState } from 'react';

import {List, ListItem, ListItemIcon, ListItemText,Checkbox} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

import { useToggleTaskStatusMutation, useDeleteTaskMutation } from '../slices/tasks-slice';
import { useDispatch } from 'react-redux';
import { useNavigate,useLocation} from 'react-router-dom';

export default function Tasks({data}) {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const location=useLocation()

    const [sendBool,{}]=useToggleTaskStatusMutation()
    const [deleteReq,{}]=useDeleteTaskMutation()

    const [checked,setchecked]=useState(data.completed)

    const id=data._id
    const toggleStatus=()=>{
        setchecked(!checked)
        dispatch(sendBool({id,checked}))
        
    }
  

    const deleteHandler=()=>{
        console.log('delete handler clicked', id)
        navigate(location.pathname)
        dispatch(deleteReq({id}))

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
                    <ListItemIcon onClick={deleteHandler}>
                        <DeleteIcon  />
                    </ListItemIcon>
                    </Link>
                    {/* <ListItemButton sx={{justifyContent:'flex-end',width:'auto'}}>DELETE</ListItemButton> */}
                </ListItem>
            </List>

       </div>
    )
}

