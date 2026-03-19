import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Link, useLocation } from "react-router-dom"
import { getDatabase, ref, get, onValue, set, } from "firebase/database";
import { db } from "../firebase.config";

const Profile = () => {
  const [data, setData] = useState([]);

  const fatchProfile = async() => {
           const dataRef = ref(db, 'Users/Profiles/9073809580');               
           onValue(dataRef, (snapshot)=>{          
            setData(snapshot.val()) 
            console.log(snapshot.val());            
         })        
        }

  useEffect(() => {        
      fatchProfile()            
   },[])

  return (
    <Layout>
      <div className='flex justify-center'>
        <div className='flex flex-col w-[75%] items-center mt-4 bg-zinc-200 rounded-md border border-blue-500 shadow-[0_0_3px_2px] hover:shadow-[0_0_3px_2px_blue] hover:translate-y-1 hover: scale-103'>
          <div className='relative'>
            <img className="rounded-xl shadow-xl" src="img/pbk.png" alt=""></img>
            <div className='flex'>
            <img className="w-28 h-28 absolute -bottom-1 mb-5 left-14 rounded-full shadow-lg" src={localStorage.getItem('Pic')}></img>
            <p className="mb-20 text-3xl font-bold absolute -bottom-1 left-44">{localStorage.getItem('Name')}</p>
            <p className="ml-20 mb-8 text-xl font-bold absolute -bottom-1 left-24">{localStorage.getItem('Email')}</p>
          </div>
        </div>

        <div className='w-full' >  
            <div className='flex gap-5 justify-center'>
              <div className="w-[22%]"><p className="mt-5 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">Location : </p>  </div>        
              <div className="w-[65%]"><p className="mt-5 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">{data.Location}</p></div>
            </div>
            <div className='flex gap-5 justify-center'>
              <div className="w-[22%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">Qualification : </p>   </div>       
              <div className="w-[65%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">{data.Quali}</p></div>
            </div>
            <div className='flex gap-5 justify-center'>
              <div className="w-[22%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">College Name : </p>  </div>        
              <div className="w-[65%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">{data.CollegeName}</p></div>
            </div>
            <div className='flex gap-5 justify-center'>
              <div className="w-[22%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">Gender : </p> </div>          
              <div className="w-[65%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">{data.Gender}</p></div>
            </div>
            <div className='flex gap-5 justify-center'>
              <div className="w-[22%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">Date of Birth : </p>   </div>       
              <div className="w-[65%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">{data.DOB}</p></div>
            </div>
            <div className='flex gap-5 justify-center'>
              <div className="w-[22%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">Contact No : </p>  </div>        
              <div className="w-[65%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">{data.Number}</p></div>
            </div>                       
            <div className='flex gap-5 justify-center'>
              <div className="w-[22%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">Create Date : </p>  </div>        
              <div className="w-[65%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">{data.Date}</p></div>
            </div>
            <div className='flex gap-5 justify-center'>
              <div className="w-[22%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">Profile Id : </p>  </div>        
              <div className="w-[65%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">{data.Id}</p></div>
            </div>                               
            
          </div>
                 
            <div className="flex flex-col items-center gap-4">           
            <Link to={'/profileedit'}><button className="mt-10 mb-10 text-blue-500 border border-blue-500 px-20 py-2 rounded-md shadow-[0_0_3px_2px]">Update Now</button></Link>  
            </div>
        
        </div>
        </div>
    </Layout>
    
  )
}

export default Profile
