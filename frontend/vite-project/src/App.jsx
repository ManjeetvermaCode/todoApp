
// import './App.css'
import NavBar from './components/appBar'
import { Outlet } from 'react-router-dom'

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function App() {

  return(
    <main>
      <NavBar/>
      {/* <ToastContainer position='top-right'/> */}
      <Outlet/>
    </main>
  )
}

export default App
