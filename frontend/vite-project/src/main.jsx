import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import {RouterProvider,createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store.js'

import HomeScreen from './screens/HomeScreen.jsx'
import LoginForm from './screens/loginForm.jsx'
import RegisterForm from './screens/RegisterForm.jsx'
import TaskScreen from './screens/TaskScreen.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='/' index element={<HomeScreen/>}/>
      <Route path='/collection/:id' element={<TaskScreen/>} />
        
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/register' element={<RegisterForm/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
      <Provider store={store} >
        <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>,
)
