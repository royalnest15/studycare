import React from 'react'
import {useEffect, useState} from "react";
import Marquee from 'react-fast-marquee'
import { db } from '../firebase.config';
import { ref, onValue } from "firebase/database";

const Colleges = () => {
    const [clogo, setClogo] = useState([]);

    const fatchLogo = async() => {
       const dataRef = ref(db, 'Assets/Logo');               
       onValue(dataRef, (snapshot)=>{          
        setClogo(snapshot.val()) 
        console.log(snapshot.val());            
     })        
    }

    useEffect(() => {
        fatchLogo()
      },[])

  return (
    <div className='mt-10'>
        <div className='flex justify-center text-4xl font-semibold mb-5'>Trusted by <span className='text-yellow-400 pl-3 pr-3'> 100+ </span> Colleges...</div>
        <Marquee pauseOnHover = {true}>
            {Object.keys(clogo).map((id, index) =>{ 
            const {logo} = id;
            return(     
          <img className="mr-9 mb-3 w-28 hover:bg-slate-400 rounded-xl cursor-pointer shadow-lg" key={id} src={clogo[id].logo}></img>
          )})}
        </Marquee>
    </div>
  )
}

export default Colleges
