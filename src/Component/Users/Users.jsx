import React, { useEffect } from 'react'
import './Users.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Users = () => {

  let[ users, setUsers] = useState([])
  


  let dispatch = useDispatch()

  useEffect(()=>{

    
      axios.get('/user_data').then((res)=>{
        setUsers(res.data)
    
        console.log(res.data);
      })
  },[])



  // users = useSelector((store)=>{

  //   return store.userSection.user
  // })

  return (
  <table>

    {
      users.map((user, index)=>{
   return <>
   <table className='tabl' border='2px solid #102121'>
    
   <tr className='content'>
      <th>Name</th>
      <th>Email</th>
      <th>Password</th>
      <th>Delete </th>
      <th>Edit </th>

    </tr>

    <tr className='trr'>
    <td>{user.Name}</td>
    <td>{user.Email}</td>
    <td>{user.Password}</td>
    
    <div className='btn'>

      <td><button onClick={()=>{
        
        dispatch({
          type : 'user_Delete',
          payload : index
        })
        
        setUsers ([...users])
        toast.success('user Delete ( ✔ )')
        
      }}>Delete</button></td>

      <td>
      
       
      <Link to = {'/SignUp/' +user.id}>Edit</Link>
        </td>

    </div>

   </tr>
   </table>
   </>
      })
    }
  </table>
  )
}

export default Users