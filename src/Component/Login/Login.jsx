import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Login.css'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'

export const Login = () => {
  let [user, setUser] = useState([])
  let { register, handleSubmit, reset } = useForm()

  let move = useNavigate()

  let dispatch = useDispatch()

  axios.get('/login_data').then((res) => {
    setUser(res.data);
  })


  // let some =useSelector((store)=>{
  //   return store.userSection.user

  //    })
  //    console.log(some);


  async function submitIts(logKia) {


    let useraye = await axios.post('/Log_data', logKia)
    let usermilgya=useraye.data
    console.log(usermilgya);




if (usermilgya) {
  move('/Users')
  dispatch({
    type: 'Header_Name',
    payload: logKia
  })
  
  localStorage.setItem('meratoken',usermilgya.mytoken)
  toast.success('User Found ( ❗ )', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  })

} else{
  toast.error('User Not Found ( ❌ )', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  })
}

    



    
      

    }



  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit(submitIts)}>
          <h2>Login</h2>
          <div className="input">
            <div className="inputBox">
              <label>Username</label>
              <input {...register('Name', { required: true })} type="text" placeholder="example@xyz.com" />
            </div>
            <div className="inputBox">
              <label>Password</label>
              <input {...register('password', { required: true })} type="password" placeholder="······" />
            </div>
            <div className="inputBox">
              <input type="submit" defaultValue="Signin" />

            </div>
          </div>
          <p className="forget">
            Forgot Password? <Link to='/SignUp'>Click Here</Link>
          </p>
        </form>
      </div>

    </div>
  )
}
