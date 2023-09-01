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
        <h1>This is HomeScreen</h1>
    </>
    )
    
}