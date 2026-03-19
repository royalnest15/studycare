import {useEffect, useState, useContext} from "react";
import { getDatabase, ref, get, onValue, set, child } from "firebase/database";
import { db } from "../firebase.config";
import { Link, useNavigate } from "react-router-dom";
import Layout from '../components/Layout'
import Studycart from '../components/Studycart';

const Study = () => {
  const [data, setData] = useState([]);
  const [gen, setGen] = useState([]);
  const [eng, setEng] = useState([]);
  const [math, setMath] = useState([]);
  const [com, setCom] = useState([]);
  const [sci, setSci] = useState([]);
  const [env, setEnv] = useState([]);
  const [his, setHis] = useState([]);
  const [geo, setGeo] = useState([]);
  
  const userObj = {name: 'Math'};

  

  const SearchData = async() => {
       const dataRef = ref(db, 'Mcq/Mislenious/1')
       onValue(dataRef, (snapshot)=>{        
        setData(snapshot.val())        
        }) 
       const genRef = ref(db, 'Mcq/General Knowledge/1')
       onValue(genRef, (snapshot)=>{        
        setGen(snapshot.val())
        })
       const comRef = ref(db, 'Mcq/Computer Question/1')
       onValue(comRef, (snapshot)=>{        
        setCom(snapshot.val())
        })
       const mathRef = ref(db, 'Mcq/Math Question/1')
       onValue(mathRef, (snapshot)=>{        
        setMath(snapshot.val())
        })
        const engRef = ref(db, 'Mcq/English Question/1')
       onValue(engRef, (snapshot)=>{        
        setEng(snapshot.val())
        })
       const envRef = ref(db, 'Mcq/Environment Question/1')
       onValue(envRef, (snapshot)=>{        
        setEnv(snapshot.val())
        })
       const sciRef = ref(db, 'Mcq/Science Question/1')
       onValue(sciRef, (snapshot)=>{        
        setSci(snapshot.val())
        })
       const hisRef = ref(db, 'Mcq/History Question/1')
       onValue(hisRef, (snapshot)=>{        
        setHis(snapshot.val())
        })
       const geoRef = ref(db, 'Mcq/Geography Question/1')
       onValue(geoRef, (snapshot)=>{        
        setGeo(snapshot.val())
        })
    } 
    useEffect(() => {
      SearchData();   
       
      },[]);

  return (
    <Layout>
    <div>
      <div className='flex gap-5 justify-center'>
          <div className="w-[63%]"><p className="mt-5 bg-slate-300 px-6 py-1 rounded-lg text-lg font-bold border border-blue-500 shadow-[0_0_3px_1px_black]">Mislenious Question : </p>  </div>    
          <Link to='/allstudy' state={{userData: {name: 'Mislenious'}}} className="mt-5 bg-slate-300 px-6 py-1 cursor-pointer rounded-lg text-lg font-bold border border-blue-500 hover:border-yellow-500 hover:translate-y-1 hover: scale-103 hover:shadow-[0_0_5px_2px_yellow] shadow-[0_0_3px_1px_black]">More Question </Link> 
      </div>
       <div className="Profiles flex flex-wrap justify-center gap-4 mt-4">              
               {Object.entries(data).map(([key, value])=>{ 
                 return(     
               <Studycart key={key} {...value}/>         )})}              
        </div>
        <div className='flex gap-5 justify-center'>
          <div className="w-[63%]"><p className="mt-3 bg-slate-300 px-6 py-1 rounded-lg text-lg font-bold border border-blue-500 shadow-[0_0_3px_1px_black]">General Knowledge : </p>  </div>        
          <Link to='/allstudy' state={{userData: {name: 'General Knowledge'}}} className="mt-3 bg-slate-300 px-6 py-1 cursor-pointer rounded-lg text-lg font-bold border border-blue-500 hover:border-yellow-500 hover:translate-y-1 hover: scale-103 hover:shadow-[0_0_5px_2px_yellow] shadow-[0_0_3px_1px_black]">More Question </Link>
        </div>
      <div className="Profiles flex flex-wrap justify-center gap-4 mt-4">              
               {Object.entries(gen).map(([key, value])=>{ 
                 return(     
               <Studycart key={key} {...value}/>         )})}              
      </div>
      <div className='flex gap-5 justify-center'>
          <div className="w-[63%]"><p className="mt-3 bg-slate-300 px-6 py-1 rounded-lg text-lg font-bold border border-blue-500 shadow-[0_0_3px_1px_black]">English Question : </p>  </div>        
          <Link to='/allstudy' state={{userData: {name: 'English Question'}}} className="mt-3 bg-slate-300 px-6 py-1 cursor-pointer rounded-lg text-lg font-bold border border-blue-500 hover:border-yellow-500 hover:translate-y-1 hover: scale-103 hover:shadow-[0_0_5px_2px_yellow] shadow-[0_0_3px_1px_black]">More Question </Link>
      </div>
      <div className="Profiles flex flex-wrap justify-center gap-4 mt-4">              
               {Object.entries(eng).map(([key, value])=>{ 
                 return(     
               <Studycart key={key} {...value}/>         )})}              
        </div>
      <div className='flex gap-5 justify-center'>
          <div className="w-[63%]"><p className="mt-3 bg-slate-300 px-6 py-1 rounded-lg text-lg font-bold border border-blue-500 shadow-[0_0_3px_1px_black]">Environment Question : </p>  </div>        
          <Link to='/allstudy' state={{userData: {name: 'Environment Question'}}} className="mt-3 bg-slate-300 px-6 py-1 cursor-pointer rounded-lg text-lg font-bold border border-blue-500 hover:border-yellow-500 hover:translate-y-1 hover: scale-103 hover:shadow-[0_0_5px_2px_yellow] shadow-[0_0_3px_1px_black]">More Question </Link>
      </div>
      <div className="Profiles flex flex-wrap justify-center gap-4 mt-4">              
               {Object.entries(env).map(([key, value])=>{ 
                 return(     
               <Studycart key={key} {...value}/>         )})}              
        </div>
      <div className='flex gap-5 justify-center'>
          <div className="w-[63%]"><p className="mt-3 bg-slate-300 px-6 py-1 rounded-lg text-lg font-bold border border-blue-500 shadow-[0_0_3px_1px_black]">Math Question : </p>  </div>        
          <Link to='/allstudy' state={{userData: {name: 'Math Question'}}} className="mt-3 bg-slate-300 px-6 py-1 cursor-pointer rounded-lg text-lg font-bold border border-blue-500 hover:border-yellow-500 hover:translate-y-1 hover: scale-103 hover:shadow-[0_0_5px_2px_yellow] shadow-[0_0_3px_1px_black]">More Question </Link>
      </div>
      <div className="Profiles flex flex-wrap justify-center gap-4 mt-4">              
               {Object.entries(math).map(([key, value])=>{ 
                 return(     
               <Studycart key={key} {...value}/>         )})}              
        </div>
      <div className='flex gap-5 justify-center'>
          <div className="w-[63%]"><p className="mt-3 bg-slate-300 px-6 py-1 rounded-lg text-lg font-bold border border-blue-500 shadow-[0_0_3px_1px_black]">Computer Question : </p>  </div>        
          <Link to='/allstudy' state={{userData: {name: 'Computer Question'}}} className="mt-3 bg-slate-300 px-6 py-1 cursor-pointer rounded-lg text-lg font-bold border border-blue-500 hover:border-yellow-500 hover:translate-y-1 hover: scale-103 hover:shadow-[0_0_5px_2px_yellow] shadow-[0_0_3px_1px_black]">More Question </Link>       
      </div>
      <div className="Profiles flex flex-wrap justify-center gap-4 mt-4">              
               {Object.entries(com).map(([key, value])=>{ 
                 return(     
               <Studycart key={key} {...value}/>         )})}              
        </div>
      <div className='flex gap-5 justify-center'>
          <div className="w-[63%]"><p className="mt-3 bg-slate-300 px-6 py-1 rounded-lg text-lg font-bold border border-blue-500 shadow-[0_0_3px_1px_black]">Science Question : </p>  </div>        
          <Link to='/allstudy' state={{userData: {name: 'Science Question'}}} className="mt-3 bg-slate-300 px-6 py-1 cursor-pointer rounded-lg text-lg font-bold border border-blue-500 hover:border-yellow-500 hover:translate-y-1 hover: scale-103 hover:shadow-[0_0_5px_2px_yellow] shadow-[0_0_3px_1px_black]">More Question </Link>
      </div>
      <div className="Profiles flex flex-wrap justify-center gap-4 mt-4">              
               {Object.entries(sci).map(([key, value])=>{ 
                 return(     
               <Studycart key={key} {...value}/>         )})}              
        </div>
      <div className='flex gap-5 justify-center'>
          <div className="w-[63%]"><p className="mt-3 bg-slate-300 px-6 py-1 rounded-lg text-lg font-bold border border-blue-500 shadow-[0_0_3px_1px_black]">History Question : </p>  </div>        
          <Link to='/allstudy' state={{userData: {name: 'History Question'}}} className="mt-3 bg-slate-300 px-6 py-1 cursor-pointer rounded-lg text-lg font-bold border border-blue-500 hover:border-yellow-500 hover:translate-y-1 hover: scale-103 hover:shadow-[0_0_5px_2px_yellow] shadow-[0_0_3px_1px_black]">More Question </Link>
      </div>
      <div className="Profiles flex flex-wrap justify-center gap-4 mt-4">              
               {Object.entries(his).map(([key, value])=>{ 
                 return(     
               <Studycart key={key} {...value}/>         )})}              
        </div>
      <div className='flex gap-5 justify-center'>
          <div className="w-[63%]"><p className="mt-3 bg-slate-300 px-6 py-1 rounded-lg text-lg font-bold border border-blue-500 shadow-[0_0_3px_1px_black]">Geography Question : </p>  </div>
          <Link to='/allstudy' state={{userData: {name: 'Geography Question'}}} className="mt-3 bg-slate-300 px-6 py-1 cursor-pointer rounded-lg text-lg font-bold border border-blue-500 hover:border-yellow-500 hover:translate-y-1 hover: scale-103 hover:shadow-[0_0_5px_2px_yellow] shadow-[0_0_3px_1px_black]">More Question </Link>
      </div>
      <div className="Profiles flex flex-wrap justify-center gap-4 mt-4">              
               {Object.entries(geo).map(([key, value])=>{ 
                 return(     
               <Studycart key={key} {...value}/>         )})}              
        </div>
      
    </div>
    </Layout>
  )
}

export default Study
