import { useParams } from "react-router-dom"
import {useGetCollectionsByUserQuery} from '../slices/collections-slice'


export default function TaskScreen() {
    const {id}=useParams()
    console.log(id)
    const {data,isloading,error}=useGetCollectionsByUserQuery(id)
 
    

    return(
        <>
            isloading?<p>Loading....</p>:error?<p>eroor</p>:<>
            {
                data.map((t)=>{return
                    <p>t.title</p>
                })
            }
            </>
        </>
    )
}
