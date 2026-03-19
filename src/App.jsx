import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from "./pages/Home";
import Study from './pages/Study'
import Practice from './pages/Practice'
import Profile from './pages/Profile'
import ProfileEdit from './pages/ProfileEdit'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Protected from "./components/Protected";
import AllStudy from "./pages/AllStudy";

function App() {

  return (
   <div>
      <Router>
        <ToastContainer position="top-center"/>
        <Routes>          
          <Route path="/" element={<Home/>} />
          <Route path="/study" element={ <Study/>} />
          <Route path="/allstudy" element={ <AllStudy/>} />
          <Route path="/exam" element={
            <Protected> <Practice/> </Protected> 
            } />
          <Route path="/profile" element={
            <Protected> <Profile/> </Protected>
            } />
          <Route path="/profileedit" element={<ProfileEdit/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/*" element={<NoPage/>} />
        </Routes>
      </Router> 
    </div>
  )
}

export default App
