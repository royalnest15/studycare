import React from 'react'
import {useEffect, useState} from "react";
import Layout from '../components/Layout'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import { getDatabase, ref, child, get, onValue, set, query, orderByChild } from "firebase/database";
import { db } from "../firebase.config";
import Colleges from '../components/Colleges';
import Cources from '../components/cources';
import Marquee from 'react-fast-marquee';
import { FcRules } from "react-icons/fc";
import { FcCallback } from "react-icons/fc";
import { BiUser } from 'react-icons/bi';
import 'swiper/css/pagination';
import 'swiper/css';


const Home = (props) => {
  const navigate = useNavigate();
  const [slide, setSlide] = useState([]);
  const [marquee, setMarquee] = useState([]);
  
      const fatchSlide = async() => {
         const dataRef = ref(db, 'Assets/Sliding');               
         onValue(dataRef, (snapshot)=>{          
          setSlide(snapshot.val()) 
          console.log(snapshot.val());            
       })        
      }
      const fatchMarquee = async() => {
         const dataRef = ref(db, 'Assets/Marquee');               
         onValue(dataRef, (snapshot)=>{          
          setMarquee(snapshot.val()) 
          console.log(snapshot.val());            
       })        
      }
  
      useEffect(() => {
          fatchSlide()
          
          fatchMarquee()
        },[])

  return (
    <Layout>
    <div className="App min-h-screen">
      <div className='flex justify-center'>
        <div className="slide flex w-[80%] pl-6 shadow-lg mt-3">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {Object.keys(slide).map((id, index) =>{ 
            const {pic} = id;
            return(
                  <SwiperSlide><img key={id} src={slide[id].pic} /></SwiperSlide>
              )})}
      
          </Swiper>
        </div>
      </div>

      <div className='text-4xl text-center font-semibold mb-3 mt-5 w-[98%]'>Are you <span className='text-blue-600 pl-3 pr-3'> Student...? </span> Thinking for <span className='text-blue-600 pl-3 pr-3'> Higher Studies...? </span></div>
      <div className='text-3xl text-center font-semibold mb-3'>Planing to join your<span className='text-yellow-400 pl-3 pr-3'> Dream Courses...? </span></div>
      <div className='text-xl mx-auto text-center font-semibold w-[80%] mb-3'>Looking for a prestigious or reliable college..? don’t worry..!, we are here to help you, to find a precious course in a great institution, that can make your future bright...!</div>
        
      <Marquee pauseOnHover = {true}>
          <div className="Profiles flex justify-around mx-20">
            {Object.entries(marquee).map(([key, value])=>{ 
              return(     
            <Cources key={key} {...value}/>
            )})}
          </div>
        </Marquee>

        <div className="flex items-center">    
          <div className="w-[45%] flex justify-center">        
            <img className="w-88 ml-10 rounded-xl" src="img/re.png"/>
          </div>
          <div className="flex flex-col w-[55%] gap-8 mt-10 ml-10">
            <div className="flex items-center">
              <FcRules className="w-20 h-20 p-3 items-center shadow-2xl bg-yellow-400 rounded-full" />
              <Link to={'/study'} className="ml-6 px-4 py-1 text-3xl font-semibold cursor-pointer text-blue-600 bg-slate-300 rounded-lg shadow-lg hover:translate-x-2 hover: scale-103">Get Study & Grow your knowledge...</Link>
            </div>
            <div className="flex items-center">  
              <BiUser className="w-20 h-20 p-3 items-center shadow-2xl bg-yellow-400 rounded-full" />
              <Link to={'/profileedit'} className="ml-6 px-4 py-1 text-3xl font-semibold cursor-pointer text-blue-600 bg-slate-300 rounded-lg shadow-lg hover:translate-x-2 hover: scale-103">Update Your Profile...</Link>
            </div> 
            <div className="flex items-center">  
              <FcCallback className="w-20 h-20 p-3 items-center shadow-2xl bg-yellow-400 rounded-full" />
              <Link to={'/contact'} className="ml-6 px-4 py-1 text-3xl font-semibold cursor-pointer text-blue-600 bg-slate-300 rounded-lg shadow-lg hover:translate-x-2 hover: scale-103">Contact with us...</Link>
            </div>                     
          </div>
        </div>

      <div className='flex'>
        <Colleges/>
      </div>
      </div> 
    </Layout>
  )
}

export default Home
