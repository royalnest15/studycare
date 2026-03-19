import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { BiMenu } from "react-icons/bi"
import { BiUser } from 'react-icons/bi'
import { BiMobile } from 'react-icons/bi' 
import { HiHome } from "react-icons/hi"
import { FiLogOut } from "react-icons/fi"
import { RiDashboardFill } from "react-icons/ri"
import { CgProfile } from "react-icons/cg";
import { BsAppIndicator } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { signOut } from 'firebase/auth'
import { imgDb } from '../firebase.config'


function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  
  const onToggleMenu = (e) => {
    setOpen(!open)
  }
  const [profilePic, setProfilePic] = useState(null)

  const fileInputRef = useRef(null)
  
  const logout = () =>{
    signOut(auth).then(() => {
      setUserData({})
      localStorage.clear
      console.log(userData)
      console.log(localStorage)
      setLoggedIn(false)
    })    
  }
     

  return (
    <div>
      <header className="relative bg-transparent left-0 right-0 top-0">     
        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl relative" >      
          <div className="flex h-12 items-center"> 
              
            <BiMenu onClick={() => setOpen(!open)} className="text-3xl cursor-pointer"/>           
              <div className="mx-auto justify-between flex items-center gap-10 w-[90%]">              
                <div>                 
                   <img className='w-36' src="img/logoname.png"/>   
                </div>  
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">            
                  <div className='flex items-center gap-[4vw]'>
                  <Link to={'/'} className="text-sm text-gray-700 bg-slate-200 font-bold px-5 py-1 rounded-full hover:bg-slate-400 hover:text-white" >
                    <p onClick={()=> setActive("Home")} className='to-blue-500' ></p>
                    Home
                  </Link>
                  
                  <Link to={'/study'} className="text-sm text-gray-700 bg-slate-200 font-bold px-5 py-1 rounded-full hover:bg-slate-400 hover:text-white" >
                    Study Set
                  </Link>
                  <Link to={'/profile'} className="text-sm text-gray-700 bg-slate-200 font-bold px-5 py-1 rounded-full hover:bg-slate-400 hover:text-white" >
                    Profile
                  </Link>  
                  <Link to={'/contact'} className="text-sm text-gray-700 bg-slate-200 font-bold px-5 py-1 rounded-full hover:bg-slate-400 hover:text-white" >
                  Contact Us
                  </Link>                                                         
                  </div>
                </div> 
                
                <div className="flex gap-9 cursor-pointer bg-slate-300 rounded-full p-1 ml-5"> 
                  
                  <IoIosNotificationsOutline onClick={() => setOpen(!open)} />
                </div>
                <div className="flex gap-9">
                  <Link to={'/login'}><img src={localStorage.getItem('Pic')} onClick={logout} className='w-8 border-spacing-1 border-violet-900 rounded-full cursor-pointer'/> </Link>
                </div>                            
              </div>
            </div>          
        </nav>
      </header>

      {open? 
      <div className="flex">        
        <div className='bg-gray-100 h-screen p-4 pt-3 shadow-xl duration-300 absolute'>
          <div className="">
            <img className="w-10 h-10 rounded-full" src={localStorage.getItem('Pic')}/>
          </div>          
          <div className="">               
            <p className="font-bold mb-1">{localStorage.getItem('Name')}</p>
            <p className="font-bold">{localStorage.getItem('Email')}</p>
          </div>                   
          <hr/><br/>         
             
          <Link to={'/'} className="text-base text-gray-700  bg-slate-200 flex items-center gap-x-4 cursor-pointer p-2 font-bold px-5 py-1 mt-5 rounded-full hover:bg-slate-400 hover:text-white" >
            <HiHome/> Home </Link>    
          <Link to={'/profile'} className="text-base text-gray-700 bg-slate-200 flex items-center gap-x-4 cursor-pointer p-2 font-bold px-5 py-1 mt-3 rounded-full hover:bg-slate-400 hover:text-white" >
            <BiMobile /> Profile </Link>      
              
          <Link to={'/study'} className="text-base text-gray-700 bg-slate-200 flex items-center gap-x-4 cursor-pointer p-2 font-bold px-5 py-1 mt-3 rounded-full hover:bg-slate-400 hover:text-white" >
            <BiUser /> Study Set </Link>        
          <Link to={'/exam'} className="text-base text-gray-700 bg-slate-200 flex items-center gap-x-4 cursor-pointer p-2 font-bold px-5 py-1 mt-3 rounded-full hover:bg-slate-400 hover:text-white" >
            <RiDashboardFill /> Exam Practice </Link> 
            <Link to={'/contact'} className="text-base text-gray-700 bg-slate-200 flex items-center gap-x-4 cursor-pointer p-2 font-bold px-5 py-1 mt-3 rounded-full hover:bg-slate-400 hover:text-white" >
            <BiMobile /> Notification </Link>
          <Link to={'/contact'} className="text-base text-gray-700 bg-slate-200 flex items-center gap-x-4 cursor-pointer p-2 font-bold px-5 py-1 mt-3 rounded-full hover:bg-slate-400 hover:text-white" >
            <BiMobile /> Contact </Link>            
          <Link to={'/login'} className="text-base text-gray-700 bg-slate-200 flex items-center gap-x-4 cursor-pointer p-2 font-bold px-5 py-1 mt-3 rounded-full hover:bg-slate-400 hover:text-white" >
            <FiLogOut /> LogOut </Link>                        
        </div>        
      </div>:null} 
                                                                                   
    </div>
  )
}

export default Header