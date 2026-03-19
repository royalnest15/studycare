import React, { useEffect, useState } from 'react'
import { BiMailSend } from 'react-icons/bi'
import { GrGoogle } from 'react-icons/gr'
import { AiOutlineUnlock } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { auth, provider } from '../firebase.config'
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userData, setUserData] = useState({})
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const navigate = useNavigate()
  const [notify, setNotify] = useState('')

  const logInWithGoogle = () => {
    signInWithPopup(auth, provider).then((data)=>{
        const {displayName, email, photoURL} = data.user;
        setUserData({displayName, email, photoURL})
        localStorage.setItem("Email", data.user.email)
        localStorage.setItem("Name", data.user.displayName)
        localStorage.setItem("Pic", data.user.photoURL)
        console.log(userData)
        setLoggedIn(true)
        window.location.href = '/'        
    })
  }

  const submitHandler = (e)=>{e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      localStorage.setItem('Name', user.displayName)
      localStorage.setItem('Email', user.email)
      navigate('/')
    })
    .catch((error) => {
      setNotify('Check your Emsil and Password')
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  };

  const logout = () =>{
    signOut(auth).then(() => {
      setUserData({})
      localStorage.clear
      console.log(userData)
      console.log(localStorage)
      setLoggedIn(false)
    })   
  }

  useEffect(()=>{
      
  })

  return (
    <div className='text-white h-screen bg-cover' style={{"background": "url(../img/back.jpg)"}}>
      <span className="notify">{notify}</span>
      <header className="relative bg-transparent">     
        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl" >      
            <div className="flex h-12 items-center">            
              <div className="mx-auto justify-between flex items-center gap-10 w-[85%]">              
                <div>
                   <img className='w-36' src="img/logoname.png"/>   
                </div>  
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">            
                  <div className='flex items-center gap-[6vw]'>
                    <button onClick={logout} className='bg-slate-400 text-white font-bold px-5 py-1 rounded-full hover:bg-slate-300'> LogIn </button>                                    
                    <Link to={'/register'} ><button className='bg-slate-400 text-white font-bold px-5 py-1 rounded-full hover:bg-slate-300 mr-6'> Register </button></Link>                                                                       
                  </div>
                </div>                               
              </div>
            </div>          
        </nav>
      </header>

      <div className='flex justify-end items-center mt-5 w-[92%]'>      
        <div className='bg-slate-800 border border-white rounded-2xl p-7 shadow-2xl backdrop-filter backdrop-blur-sm bg-opacity-20 relative'>  
            <h1 className='text-white text-4xl font-bold text-center mb-3'>LogIn</h1>
            <p className='text-white font-bold text-center mb-4'>Please LogIn to use the platform</p>
        
          <form onSubmit={submitHandler} action="">
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

            <div className='flex justify-between items-center'>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" name='' id=''/>  
                <label htmlFor='Remember Me'>Remember Me</label>
              </div>
                <Link to='' className='text-blue-600 hover:text-white'>Forget Password</Link>
            </div>
            
              <button type="submit" className='w-full mb-2 mt-4 py-1 text-[18px] font-bold rounded-full bg-white text-emerald-800 hover:bg-emerald-500 hover:text-white transition-colors duration-300'>
                LogIn</button>    
          </form>
           
              <p className='font-bold text-center text-black'>Or</p>
            <div className='relative'>
            
              <button onClick={logInWithGoogle} type="submit" className='w-full mb-4 mt-2 py-1 text-[17px] font-bold rounded-full bg-white text-blue-500 hover:bg-blue-400 hover:text-white transition-colors duration-300'><GrGoogle className='absolute left-10 top-4'/>
              LogIn With Google</button>   
            </div>
            <div>
              <span className='text-center m-2'>Don't have Account ?   <Link className='font-bold text-center hover:text-blue-500  text-emerald-700' to='/register'> Register Now</Link></span>
            </div>                
            
        </div>
      </div>
      <footer className='absolute bottom-0'>
        <img className='relative flex items-end' src="img/bottom.png"/>
      </footer>
    </div>
  )
}

export default Login
