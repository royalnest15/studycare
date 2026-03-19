import React from 'react'
import { Link, useNavigate } from "react-router-dom"

function Studycart(props) {
    const navigate = useNavigate()

  return (
    <div className='flex justify-between mx-2 mb-1 w-[72%]'>
      <div className='flex flex-col px-5 py-1  bg-zinc-200 rounded-md border border-blue-500 hover:border-yellow-500 hover:translate-y-1 hover: scale-103 hover:shadow-[0_0_5px_2px_yellow] shadow-lg'>
               
        <div className="flex flex-col">
          <p className="font-semibold line-clamp-2">Q. {props.Question}</p>
        </div>        
        
        <div className='flex flex-col items-start gap-1 pb-1 pt-1'>          
          <p className="text-green-600 line-clamp-2">Answer : {props.CorrectAnswer}</p>                
        </div>     
        
      </div>
    </div>  
  )
}

export default Studycart
