import { useParams } from "react-router-dom";
import { useGetCollectionsByUserQuery } from '../slices/collections-slice';
import { useEffect, useState } from "react";
import Tasks from "../components/tasks";
import {Box, Button, FormGroup, TextField,FormControl,InputLabel,Select,MenuItem,Dialog,DialogContent,DialogActions} from "@mui/material";
import {useAddTaskMutation} from '../slices/tasks-slice'
import { useDispatch } from "react-redux"; 
import { useNavigate,Link } from "react-router-dom";

export default function TaskScreen() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const { id } = useParams();
    // const UserId=useSelector((state)=>state.authUser.userInfo)
    const [open,setOpen]=useState(false)
   

    const [details,setdetails]=useState({
        id,
        title:'',
        description:'',
        dueDate:null,
        priority:'Medium',
        completed:false
    })
    const { data, isLoading, error } = useGetCollectionsByUserQuery(id);
    const [sendData,{}]=useAddTaskMutation()


    if (isLoading) {
        return <div>loading...</div>;
    }

    if (error) {
        return <div>{error.error}</div>;
    }

    if (!data || !Array.isArray(data)) {
        return (
            <h1>No Tasks apparently</h1>
        )
    }
// useEffect(()=>{

// },[details])

    //form Handlers
    const ChangeHandler=(e)=>{
        const {name,value}=e.target
        setdetails((pre)=>{
            return {...pre,[name]:value}
        })
    }
    const SubmitHandler=(e)=>{
        try{
            dispatch(sendData(details))
        }catch(e){
            console.log('unable to send submit task data',e)
        }
    }

    //dialog handlers
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

const refreshHandler=()=>{
    window.location.reload()
}
   
    return (
        <>

<div>
    <Box sx={{width:'60%',m:'20px auto',display:'flex',flexDirection:'row',justifyContent:'space-evenly'}} >
        <Button variant="contained" color="primary" onClick={refreshHandler} >
            Refresh
        </Button>
        <Button variant="contained" color="secondary"  onClick={handleClickOpen}>
        Click to add Task
      </Button>
    </Box>
      
    
     
    <Dialog
        open={open}
        onClose={handleClose}
      >

        <DialogContent sx={{width:'300px'}}>
        <form onSubmit={SubmitHandler} >
           <FormGroup sx={{width:'80%',margin:'20px auto'}}>
                <TextField sx={{my:2}} name='title' label="Task" variant="outlined" onChange={ChangeHandler} />
                <TextField name='description' label="Description" variant="outlined" onChange={ChangeHandler}/>
           </FormGroup>
           <FormControl sx={{width:'80%',margin:'10px auto', display:'flex',flexDirection:'column'}} >
              <InputLabel>priority</InputLabel>
                <Select
                
                    name="priority"
                    value={details.priority}
                    label="Age"
                    onChange={ChangeHandler}
                >
                    <MenuItem value={'High'}>High</MenuItem>
                    <MenuItem value={'Medium'}>Medium</MenuItem>
                    <MenuItem value={'Low'}>Low</MenuItem>
                </Select>
  <                 Button variant="contained" centered='true' sx={{m:2}} type="submit" >Submit</Button  >

            </FormControl>
        </form>
        </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Discard</Button>
                <Button onClick={SubmitHandler}>Add Task</Button>
        </DialogActions>
    </Dialog>
</div>


        <div style={{width:'60%',margin:'20px auto'}}>
            {data.map((d) => (
                <Tasks key={d._id} data={d} coll_id={id}/>
            ))}
        </div>
        </>
    );
}
