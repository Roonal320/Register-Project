import React, { createContext, useReducer } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Logout from './Components/Logout';
import Errorpg from './Components/Errorpg';
import "./App.css";
import {reducer, initialState} from "./reducer/usereducer";


export const usercontext= createContext();
const App=()=>{
const [state,dispatch]= useReducer(reducer, initialState);
  return(
    <>
    <usercontext.Provider value={{state,dispatch}}>
      <Navbar/>
      <Routes>
     
      <Route path="/" element={<Home/> } ></Route>
      <Route path="/About" element={<About/> }></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
      <Route path="/Logout" element={<Logout />}></Route>
      <Route path="*" element={<Errorpg/>}></Route>
      
      </Routes>
      </usercontext.Provider>
    </>
  );
}
export default App;
