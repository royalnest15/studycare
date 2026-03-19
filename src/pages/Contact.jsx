import {useEffect, useState, useContext} from "react";
import { getDatabase, ref, get, onValue, set, } from "firebase/database";
import { db } from "../firebase.config";
import Layout from "../components/Layout";


const Contact = () => {
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");


  const fatchData = async() => {
      const dataRef = ref(db, 'Assets/About');
      onValue(dataRef, (snapshot)=>{          
        setData(snapshot.val())     
    });
  } 
  
  useEffect(() => {
    fatchData();
    
  },[]);
  
  const handleSubmit = (e) => {e.preventDefault();
      const date = Date.now()
      const useRef = ref(db, 'Message/'+ date)
      set(useRef, {
          Name: name,
          Number: number,
          Message: message,
          Email: email,
          Date: date          
      })
      setName("");
      setEmail("");
      setNumber("");
      setMessage("");
      setNotify('Message Send Successfully') 
    };

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="text-lg font-semibold text-gray-600 px-24 mt-10">  
        <div>      
          {data.About1}
        </div>  
        <div className="text-lg font-semibold text-gray-600  mt-6 ">
          {data.About2}
        </div>
        <div className="text-lg font-semibold text-gray-600  mt-6">  
          {data.About3}
        </div>
      </div>

      <div className="flex text-lg font-semibold text-gray-600 px-20 mt-5"> 
        <div className="flex flex-col w-[50%] gap-8 pl-8 pt-5">
          <img className="w-20" src="img/rlogo.png"/>
          <h3 className="text-2xl">Royal Group</h3> 
          <h2>Contact No : 9073809580 </h2>
          <h2>Email : royalnest15@gmail.com </h2>
          <h2>Address : B - 230, Survey Park, Santoshpur, Kolkata 700075 </h2>                                                              
        </div>

        <div className="flex flex-col w-[50%] gap-5 pl-8 pt-5">
        <form onSubmit={handleSubmit}>
          <input value={name} onChange={(e) => setName(e.target.value)}         
          type="text" className="inputField w-[80%] px-5 py-1 rounded-lg shadow-lg bg-white" placeholder="Your Name..." required/>
        
          <input value={email} onChange={(e) => setEmail(e.target.value)}         
          type="text" className="inputField w-[80%] px-5 py-1 mt-5 rounded-lg shadow-lg bg-white" placeholder="Email ID..." required/>
        
          <input value={number} onChange={(e) => setNumber(e.target.value)}         
          type="text" className="inputField w-[80%] px-5 py-1 mt-5 rounded-lg shadow-lg bg-white" placeholder="Mobile Number..." required/>
        
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} 
          cols="30" rows="6" className="w-[80%] h-50 px-5 py-1 mt-5 rounded-lg shadow-lg bg-white" placeholder="Write your message here..." required></textarea>
          
          <button  className="w-[80%] bg-blue-300 shadow-lg text-white font-bold text-lg py-1 mt-5 rounded-md">SUBMIT</button>
        </form>
        </div>
        </div>
      </div>
    </Layout>
    
  )
}

export default Contact
