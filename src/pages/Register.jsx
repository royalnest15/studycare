import React, { useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { BiMobile } from 'react-icons/bi' 
import { BiMailSend } from 'react-icons/bi'
import { GrGoogle } from 'react-icons/gr'
import { AiOutlineUnlock } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db, provider } from '../firebase.config'
import { ref, set } from "firebase/database";
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'

const Register = () => {

  const [loggedIn, setLoggedIn] = useState(false)
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[displayName, setDisplayName] = useState('')
  const[number, setNumber] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e)=>{e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    const useRef = ref(db, 'Users/'+ number)
    set(useRef, {
      email: email,
      password: password,
      displayName: displayName,
      number: number,            
    }) 
    localStorage.setItem('Name', user.displayName)
      localStorage.setItem('Email', user.email)
    setLoggedIn(true) 
    navigate('/')
  };

  return (
    <div className='text-white h-screen bg-cover' style={{"background": "url(../img/back.jpg)"}}>
      
      <header className="relative bg-transparent">     
        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl" >      
            <div className="flex h-12 items-center">            
              <div className="mx-auto justify-between flex items-center gap-10 w-[85%]">              
                <div>
                   <img className='w-36' src="img/logoname.png"/>   
                </div>  
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">            
                  <div className='flex items-center gap-[6vw]'>
                    <Link to={'/login'} ><button className='bg-slate-400 text-white font-bold px-5 py-1 rounded-full hover:bg-slate-300'> LogIn </button></Link>                                     
                    <Link to={'/register'} ><button className='bg-slate-400 text-white font-bold px-5 py-1 rounded-full hover:bg-slate-300 mr-6'> Register </button></Link>                                                                       
                  </div>
                </div>                               
              </div>
            </div>          
        </nav>
      </header>
      
    <div className='flex justify-end items-center mt-5 mr-[8%]'>      
    <div className='bg-slate-700 border border-white rounded-2xl p-8 shadow-2xl backdrop-filter backdrop-blur-sm bg-opacity-20 relative'>  
    <h1 className='text-white text-4xl font-bold text-center mb-3'>Register</h1>
        <p className='text-white font-bold text-center'>Please Register to use the platform</p>
        
        <form onSubmit={submitHandler} action="">
          <div className='relative my-3'>
            <input onChange={(e)=>{setDisplayName(e.target.value)}} type="text" required className='block w-full py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder=''/>
            <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-5 scale-75 top-0 -z-10 origin-left peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-110 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5'>Full Name</label>
            <BiUser className='absolute top-0 right-3' />
          </div>

          <div className='relative my-3'>
            <input onChange={(e)=>{setNumber(e.target.value)}} type="number" required className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder=''/>
            <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-5 scale-75 top-0 -z-10 origin-left peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-110 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5'>Mobile Number</label>
            <BiMobile className='absolute top-0 right-3' />
          </div>

          <div className='relative my-4'>
            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" required className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder=''/>
            <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-5 scale-75 top-0 -z-10 origin-left peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-110 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5'>Email</label>
            <BiMailSend className='absolute top-0 right-3' />
          </div>

          <div className='relative my-4'>
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" required className='block w-72 py-2.3 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder=''/>
            <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-5 scale-75 top-0 -z-10 origin-left peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-110 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5'>Password</label>
            <AiOutlineUnlock className='absolute top-0 right-3' />
          </div>

          <div className='flex gap-2 items-center'>
            <input type="checkbox" name='' id='' checked='true'/> 
            <label htmlFor='I agree'>Register as a Student</label>
          </div>
          <div className='flex gap-2 items-center'>
            <input type="checkbox" name='' id=''/> 
            <label htmlFor='I agree'>Register as a Teacher</label>
          </div>
          
          <button type="submit" className='w-full mb-2 mt-4 py-1 text-[18px] font-bold rounded-full bg-white text-emerald-800 hover:bg-emerald-500 hover:text-white transition-colors duration-300'>Register Now</button>           
          
          <div>
            <span className='text-center m-2'>Already have an Account ?   <Link className='font-bold text-center hover:text-blue-500  text-emerald-700' to='/login'>LogIn Now</Link></span>
          </div>                 
        </form>  
      </div>
    </div>
    <footer className='absolute bottom-0'>
        <img src="img/bottom.png"/>
      </footer>
    </div>
  )
}

export default Register
