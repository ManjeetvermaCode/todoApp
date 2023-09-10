
// import './App.css'
import NavBar from './components/appBar'
import { Outlet } from 'react-router-dom'

function App() {

  return(
    <main>
      <NavBar/>

      <Outlet/>
    </main>
  )
}

export default App
