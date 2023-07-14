import React from 'react'
import './Header.css'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

export const Header = () => {

  let abc = useSelector((xyz)=>{
    return xyz.userSection.currentUser
  })
console.log(abc);
  
  return (
    <div>
          <nav>
  <div className="container">
    <h1 className="logo">My Website</h1>
    <ul className="menu">
      {abc != undefined && <span className='wel'>Welcome : <h2 className='names'>{abc.Name}</h2></span> }
      <li>
        <Link to = '/'>Cards</Link>
      </li>
      <li>
      <Link to = '/Login'>Login</Link>
      </li>
      <li>
      <Link to = '/SignUp'>SignUp</Link>
      </li>
      <li>
        <Link to='/Users'>Users</Link>
      </li>
      <li>
        <Link to='/Portfolio'>Portfolio</Link>
      </li>
      <li>
        <Link to='/CreateJob'>CreateJob</Link>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
    <div className="toggle" />
  </div>
</nav>
    </div>
  )
}
