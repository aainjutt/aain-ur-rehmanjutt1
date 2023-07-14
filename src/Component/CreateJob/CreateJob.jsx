import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios';
import './CreateJob.css'

 export default ()=>{

   let {register,handleSubmit} = useForm()

   let [data, setData] = useState([])

//   function submitIts (data) {
//     data.id = v4()
   
//     axios.post('/createjob',data).then((res)=>{

//       console.log(res.data); 
//     })
//   }




function createJob(data){

 axios.post('/Createjob_data', data)


// setData(res.data)
 

 

  console.log(data);

}



   return <>
     <div>
       <form onSubmit={handleSubmit(createJob)}>

           <div>
           <input className="col_2"
            {...register('title')}
            type="text" placeholder='Job Title' />
            </div>
           

           <div>
           <input className="col_2"
           {...register('description')}
            type="text" placeholder='Description' />
            </div>
           

           <div>
           <input className="col_2"
            {...register('payment')}
             type="text" placeholder='Payement' />
             </div>
           

           {/* <div>
           <input
            {...register('img')} 
            type="file" placeholder='img_Adress' />
           </div> */}

           <div>
               <button  className="row">
                 Submit
                 </button>
           </div>


</form>


   </div>

   
   </>



}
