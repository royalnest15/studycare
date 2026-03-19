import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="relative bottom-0 bg-transparent mt-8">
        <nav aria-label="Buttom" className="bg-gray-300 px-4 sm:px-6 lg:px-8 shadow-[5px_0_5px_2px_gray]" >
          <div className="flex items-center justify-between">

            <div>                 
                <img className='w-36 ml-20' src="img/logoname.png"/>   
                <div className='ml-20 mt-2'> © 2026 All rights reserved.</div>
            </div>

            <div className='font-semibold text-gray-700'>
              <p className='hover:text-yellow-500 mb-1 cursor-pointer hover:translate-x-2 hover: scale-103'>&#x27BB; Home</p>
              <p className='hover:text-yellow-500 mb-1 cursor-pointer hover:translate-x-2 hover: scale-103'>&#x27BB; Study Set</p>
              <p className='hover:text-yellow-500 mb-1 cursor-pointer hover:translate-x-2 hover: scale-103'>&#x27BB; Exam Practice</p>
            </div>
            <div className='font-semibold text-gray-700'>
              <p className='hover:text-yellow-500 mb-1 cursor-pointer hover:translate-x-2 hover: scale-103'>&#x27BB; Profile</p>
              <p className='hover:text-yellow-500 mb-1 cursor-pointer hover:translate-x-2 hover: scale-103'>&#x27BB; Courcess</p>
              <p className='hover:text-yellow-500 mb-1 cursor-pointer hover:translate-x-2 hover: scale-103'>&#x27BB; Contact Us</p>
            </div>
            <div className='font-semibold text-gray-700'>
              <p className='hover:text-yellow-500 mb-1 cursor-pointer hover:translate-x-2 hover: scale-103'>&#x27BB; Login</p>
              <p className='hover:text-yellow-500 mb-1 cursor-pointer hover:translate-x-2 hover: scale-103'>&#x27BB; Register</p>
              <p className='hover:text-yellow-500 mb-1 cursor-pointer hover:translate-x-2 hover: scale-103'>&#x27BB; Privacy Policy</p>
            </div>
            
            <div className='flex items-center mr-10'>   
              <div>              
                <img className='w-5 mb-2 mt-3' src="img/fac.png"/>   
                <img className='w-5 mb-2' src="img/youtube.png"/>
                <img className='w-5 mb-3' src="img/insta.png"/>
            </div>
            <div className='font-semibold ml-3 text-gray-700'>
              <p className='hover:text-yellow-500 cursor-pointer hover:translate-x-1 hover: scale-103 mb-1'>www.facebook.com/StudyCare</p>
              <p className='hover:text-yellow-500 cursor-pointer hover:translate-x-1 hover: scale-103 mb-1'>www.youtube.com/StudyCare</p>
              <p className='hover:text-yellow-500 cursor-pointer hover:translate-x-1 hover: scale-103 mb-1'>www.instagram.com/StudyCare</p>
            </div></div>

          </div>
        </nav>
      </footer> 
      
    </div>
  )
}

export default Footer
