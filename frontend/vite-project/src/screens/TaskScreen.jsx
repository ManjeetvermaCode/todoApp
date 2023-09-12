import { useParams } from "react-router-dom";
import { useGetCollectionsByUserQuery } from '../slices/collections-slice';
import { useState } from "react";
import Tasks from "../components/tasks";
import { Button, FormGroup, TextField,FormControl,InputLabel,Select,MenuItem,Dialog,DialogContent,DialogActions} from "@mui/material";
import {useAddTaskMutation} from '../slices/tasks-slice'
import { useDispatch,useSelector } from "react-redux"; 
import { useNavigate } from "react-router-dom";

export default function TaskScreen() {
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const UserId=useSelector((state)=>state.authUser.userInfo)
    const [open,setOpen]=useState(false)

    const [details,setdetails]=useState({
        id:UserId,
        title:'',
        description:'',
        dueDate:null,
        priority:'Medium',
        completed:false
    })
    const { id } = useParams();
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

    //form Handlers
    const ChangeHandler=(e)=>{
        const {name,value}=e.target
        setdetails((pre)=>{
            return {...pre,[name]:value}
        })
    }
    const SubmitHandler=(e)=>{
        e.preventDefault()
        console.log(details)
        dispatch(sendData(details))
        setdetails({title:'',description:'',dueDate:null,priority:'',completed:false})

        navigate(`/collections/${id}`)
    }

    //dialog handlers
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    //SubmitTaskHandler

   

    return (
        <>
        


<div>
      <Button variant="contained" color="secondary"  sx={{width:'60%',margin:'20px 20%'}} onClick={handleClickOpen}>
        Click to add Task
      </Button>
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
                // <div key={d.id}>
                //     <h1>Task - {d.title}</h1>
                //     <p>Description - {d.description}</p>
                // </div>
                <Tasks key={d._id} data={d}/>
            ))}
        </div>
        </>
    );
}
