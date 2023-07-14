import './SignUp.css'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { v4 } from 'uuid'
import axios from 'axios'

const SignUp = () => {


  let move = useNavigate()

  let [update, setUpdate] = useState()
  let params = useParams()

  let { register, handleSubmit, reset, setValue } = useForm()
  let dispatch = useDispatch()

  let editData = useSelector((abc) => {
    return abc.userSection.user
  })

  let [userKaindex, setuserKaindex] = useState();

  useEffect(() => {
    let usermila = editData.find((xyz) => {
      if (xyz.id == params.id) {

        return true;
      }
    })

    if (usermila) {
      setuserKaindex(editData.indexOf(usermila));
      console.log(userKaindex);
      setUpdate(usermila)
    }

    if (params.id) {
      reset(update)
    }
  }, [update])

  console.log(update);

  function addUser(data) {
    if (params.id) {
      dispatch({
        type: 'update_user',
        payload: data,
        index: userKaindex
      })
    } else {

      

      move('/Login')
      let newform = new FormData
      newform.append('Name', data.Name)
      newform.append('Email', data.Email)
      newform.append('Password', data.Password)
      newform.append('id', v4())
      newform.append('pic', data.pic)

      axios.post('/signup_data',newform)
    }
  }


  return (
    <div>
      <div className="signup-form">
        <div className="container">
          <div className="header">
            <h1>Create an Account</h1>
            <p>Get started for free!</p>
          </div>
          <form onSubmit={handleSubmit(addUser)}>
            <div className="input">
              <i className="fa-solid fa-user" />
              <input {...register('Name', { require: true })} type="text" placeholder="Username" />
            </div>
            <div className="input">
              <i className="fa-solid fa-envelope" />
              <input {...register('Email', { require: true })} type="email" placeholder="Email" />
            </div>
            <div className="input">
              <i className="fa-solid fa-lock" />
              <input {...register('Password', { require: true })} type="password" placeholder="Password" />
            </div>
            <div className="input">
              <i className="fa-solid fa-lock" />  
              <input type="file" name='pic' onChange={(e) => {
                setValue('pic', e.target.files[0]);
              }} />
            </div>
            <input className="signup-btn" type="submit" defaultValue="SIGN UP" />
          </form>
          <p>
            Already have an account <Link to='/Login'>sign in</Link>
          </p>
        </div>
      </div>

    </div>
  )
}

export default SignUp