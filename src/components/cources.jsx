import React from 'react'
import { Link, useNavigate } from "react-router-dom"

const cources = (props) => {
    const navigate = useNavigate()

  return (
    <div className='mt-5'>
        
        <div className='flex justify-between mx-4 mb-4'>
            <div className='flex flex-col items-center w-48 bg-zinc-300 rounded-lg border border-blue-500 hover:border-yellow-500 hover:translate-y-1 hover: scale-103 hover:shadow-[0_0_5px_2px_yellow] shadow-[0_0_3px_1px_black]'>               
                <img className=" rounded-t-lg mb-3" src={props.icon}></img>                   
                                     
                <div className="flex flex-col items-center mb-2 font-semibold">           
                    <button className="text-blue-500 border border-blue-500 px-3 py-1 text-lg rounded-md shadow-[0_0_3px_1px]" onClick={()=>{navigate('/proView',{state:props})}}>{props.name}</button>  
                </div>
            </div>
        </div>  
    </div>
  )
}

export default cources
