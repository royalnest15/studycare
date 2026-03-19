import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import { db } from "../firebase.config";
import { ref, set } from "firebase/database";
import Layout from '../components/Layout'


const ProfileEdit = () => {

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [mail, setMail] = useState('')
  const [location, setLocation] = useState('')
  const [gender, setGender] = useState('') 
  const [dob, setDob] = useState('')
  const [quali, setQualification] = useState('')
  const [cname, setCname]= useState('')
  const [pic, setPic] = useState('')
  const [notify, setNotify] = useState('')
  

  const handleSubmit = (e) => {e.preventDefault();
      const date = Date.now()
      
      const useRef = ref(db, 'Users/Profiles/'+ mail)
      set(useRef, {
          Name: name,
          Email: mail,
          Pic: pic,
          Location: location,
          Quali: quali,
          CollegeName: cname,
          Gender: gender,
          DOB: dob,
          Number: number,
          Date: date,
          Id: number
        
      })
      setNotify('Data Added') 
    };

  return (
    <Layout>
      <div className='flex justify-center'>
        <span className="notify">{notify}</span>
        <div className='flex flex-col w-[75%] items-center mt-4 bg-zinc-200 rounded-md border border-blue-500 shadow-[0_0_3px_2px] hover:shadow-[0_0_3px_2px_blue] hover:translate-y-1 hover: scale-103'>
          <div className='relative'>
            <img className="rounded-xl shadow-xl" src="img/pbk.png" alt=""></img>
            <div className='flex'>
            <img input type="file" onChange={(e)=>handleUpload(e)} className="w-28 h-28 absolute -bottom-1 mb-5 left-14 rounded-full shadow-lg" src="img/profile.png"></img>
            
          </div>
        </div>
        <div className='w-full' >  
          <form onSubmit={handleSubmit}>
            <div className='flex gap-5 justify-center'>
              <div className="w-[22%]"><p className="mt-5 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">Full Name : </p>  </div>        
              <input required value={name} onChange={(e) => setName(e.target.value)}         
                  type="text" className="inputField w-[65%] px-5 py-1 mt-5 rounded-lg shadow-lg bg-white" placeholder="Your Name..." />
            </div>
            <div className='flex gap-5 justify-center'>
              <div className="w-[22%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">Email Id : </p>  </div>        
              <input required value={mail} onChange={(e) => setMail(e.target.value)}         
                  type="text" className="inputField w-[65%] px-5 py-1 mt-4 rounded-lg shadow-lg bg-white" placeholder="Write your Career Object..." />
            </div>
            <div className='flex gap-5 justify-center'>
              <div className="w-[22%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">Location : </p> </div>          
              <input required value={location} onChange={(e) => setLocation(e.target.value)}         
                  type="text" className="inputField w-[65%] px-5 py-1 mt-4 rounded-lg shadow-lg bg-white" placeholder="Your Address..." />
            </div>
            <div className='flex gap-5 justify-center'>
              <div className="w-[22%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">Qualification : </p>   </div>       
              <input required value={quali} onChange={(e) => setQualification(e.target.value)}         
                  type="text" className="inputField w-[65%] px-5 py-1 mt-4 rounded-lg shadow-lg bg-white" placeholder="Your last Qualification..." />
            </div>      
            <div className='flex gap-5 justify-center'>
              <div className="w-[22%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">Number : </p></div>          
              <input required value={number} onChange={(e) => setNumber(e.target.value)}         
                  type="text" className="inputField w-[65%] px-5 py-1 mt-4 rounded-lg shadow-lg bg-white" placeholder="Mobile Number..." />
            </div>
            
            <div className='flex gap-5 justify-center'>
              <div className="w-[22%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">College Name : </p> </div>          
              <input required value={cname} onChange={(e) => setCname(e.target.value)}         
                  type="text" className="inputField w-[65%] px-5 py-1 mt-4 rounded-lg shadow-lg bg-white" placeholder="Your Email ID..." />
            </div>                  
            <div className='flex gap-5 justify-center'>
              <div className="w-[22%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">Date of Birth : </p>  </div>        
              <input required value={dob} onChange={(e) => setDob(e.target.value)}         
                  type="text" className="inputField w-[65%] px-5 py-1 mt-4 rounded-lg shadow-lg bg-white" placeholder="Your Date of Birth..." />
            </div>
            <div className='flex gap-5 justify-center'>
              <div className="w-[22%]"><p className="mt-4 bg-slate-300 px-6 py-1 shadow-lg rounded-lg text-lg font-bold">Gender : </p>  </div>        
              <input required value={gender} onChange={(e) => setGender(e.target.value)}         
                  type="text" className="inputField w-[65%] px-5 py-1 mt-4 rounded-lg shadow-lg bg-white" placeholder="Gender..." />
            </div>
            
            <div className="flex flex-col items-center gap-4">           
              <button className="mt-10 mb-10 text-blue-500 border border-blue-500 px-20 py-2 rounded-md shadow-[0_0_3px_2px]">SUBMIT</button>  
            </div>
            </form>
          </div>
        </div>
      </div>    
     
    </Layout>
  )
}

export default ProfileEdit
