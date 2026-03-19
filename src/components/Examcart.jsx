import React from 'react'
import { Link, useNavigate } from "react-router-dom"

function Examcart(props) {
    const navigate = useNavigate()

  return (
    <div className='flex justify-between mx-4 mb-4'>
      <div className='flex flex-col px-6 py-3 w-80 bg-zinc-200 rounded-md border border-blue-500 hover:border-yellow-500 hover:translate-y-1 hover: scale-103 hover:shadow-[0_0_5px_2px_yellow] shadow-[0_0_3px_1px_black]'>
        <div className="flex items-center">
          
            <div className="flex flex-col mx-3 gap-2">
              <p className="text-lg font-semibold line-clamp-1">{props.Question}</p>
          </div>        
        </div>
        <div className='flex flex-col items-start gap-1 pb-1 pt-1'>          
                <p className="line-clamp-1">Last Salary : {props.Option1}</p>
                <p className="line-clamp-1">Qualification : {props.Option2}</p>
                               
                <p className="line-clamp-1">Location : {props.CorrectAnswer}</p>
        </div>     
        <div className="flex flex-col items-center">           
            <button className="text-blue-500 border border-blue-500 px-12 py-1 rounded-md shadow-[0_0_3px_1px]" onClick={()=>{navigate('/proView',{state:props})}}>Details</button>  
        </div>
      </div>
    </div>  
  )
}

export default Examcart
