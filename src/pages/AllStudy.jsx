import {useEffect, useState, useContext} from "react";
import { getDatabase, ref, get, onValue, set, child } from "firebase/database";
import { db } from "../firebase.config";
import { Link, useLocation, useParams } from "react-router-dom";
import Layout from '../components/Layout'
import Studycart from '../components/Studycart';

const AllStudy = () => {
    const [data, setData] = useState([]);
    const [all, setAll] = useState([]);
    const location = useLocation();
    const {userData} = location.state ||{};
    

    const SearchAllData = async() => {
       const dataRef = ref(db, 'Mcq/userData?.name/1')
       onValue(dataRef, (snapshot)=>{        
        setData(snapshot.val())        
        }) 
       const allRef = ref(db, 'Mcq/Mislenious/1')
       onValue(allRef, (snapshot)=>{        
        setAll(snapshot.val())
        })
    }

    useEffect(() => {
      SearchAllData();   
       
      },[]);

  return (
    <Layout>
    <div>
      <div className='flex gap-5 justify-center'>
          <div className="w-[68%]"><p className="mt-5 bg-slate-300 px-6 py-1 rounded-lg text-lg font-bold border border-blue-500 shadow-[0_0_3px_1px_black]">{userData?.name} :</p>  </div>    
          <Link to={'/study'} className="mt-5 bg-slate-300 px-10 py-1 cursor-pointer rounded-lg text-lg font-bold border border-blue-500 hover:border-yellow-500 hover:translate-y-1 hover: scale-103 hover:shadow-[0_0_5px_2px_yellow] shadow-[0_0_3px_1px_black]">Back </Link> 
      </div>
       <div className="Profiles flex flex-wrap justify-center gap-4 mt-4">              
               {Object.entries(data).map(([key, value])=>{ 
                 return(     
               <Studycart key={key} {...value}/>         )})}              
        </div>
        <div className='flex gap-5 justify-center'>
          <div className="w-[68%]"><p className="mt-3 bg-slate-300 px-6 py-1 rounded-lg text-lg font-bold border border-blue-500 shadow-[0_0_3px_1px_black]">All Question : </p>  </div>        
          <Link to={'/study'} className="mt-3 bg-slate-300 px-10 py-1 cursor-pointer rounded-lg text-lg font-bold border border-blue-500 hover:border-yellow-500 hover:translate-y-1 hover: scale-103 hover:shadow-[0_0_5px_2px_yellow] shadow-[0_0_3px_1px_black]">Back </Link>
        </div>
      <div className="Profiles flex flex-wrap justify-center gap-4 mt-4">              
               {Object.entries(all).map(([key, value])=>{ 
                 return(     
               <Studycart key={key} {...value}/>         )})}              
      </div>

      
    </div>
    </Layout>
  )
}

export default AllStudy
