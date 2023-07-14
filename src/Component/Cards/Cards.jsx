import { useEffect, useState } from 'react'
import axios from 'axios'
import './Cards.css'


const Cards = () => {

    
      let [jobs, setJobs] = useState([])
    
      useState(()=>{
        axios.get('/Cards_data').then((res)=>{
        
        setJobs(res.data)
        
        console.log(res.data);
        
        })
    
      })
  return <div>

    <div className='job-container'>

    {

jobs.map((data)=>{

  return (
    <div className='job' >
      <p className='title margin'>{data.title}</p>
      <p className='margin'><b>Job Deccription:</b></p>
      <textarea className='textArea' name="" id="" cols="30" rows="5">{data.description}</textarea>
      <p className='title margin'>{data.payment} /PKR</p>
      <button className='apply-btn'>Apply Now</button>
    </div>
  )
})
    }
    </div>

  </div>

}

export default Cards