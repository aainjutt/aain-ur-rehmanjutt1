import React from 'react'
// import Home from './Component/Home/Home'
import Cards from './Component/Cards/Cards'
import { Header } from './Component/Header/Header'
import { Login } from './Component/Login/Login'
import SignUp from './Component/SignUp/SignUp'
import Users from './Component/Users/Users'
import { Portfolio } from './Component/Portfolio/Portfolio'
import CreateJob from './Component/CreateJob/CreateJob'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import axios from 'axios'
import { useDispatch } from 'react-redux'

const App = () => {

  let dispatch = useDispatch()
  axios.post('/Section_Check',{token:localStorage.getItem('meratoken')}).then((res)=>{
    console.log(res.data);
   if( res.data){
    dispatch({
      type : 'Header_Name',
      payload : res.data
    })
   }
  })
  return (
    <div>

<BrowserRouter>

<Header/>

<Routes>
 

<Route path='/' element={<Cards/>}></Route>
<Route path='/Login' element={<Login/>}></Route>
<Route path='/SignUp' element={<SignUp/>}></Route>
<Route path='/SignUp/:id' element={<SignUp/>}></Route>
<Route path='/Users' element={<Users/>}></Route>
<Route path='/Portfolio' element={<Portfolio/>}></Route>
<Route path='/CreateJob' element={<CreateJob/>}></Route>


</Routes>

     <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
       />


</BrowserRouter>

    </div>
  )
}

export default App
