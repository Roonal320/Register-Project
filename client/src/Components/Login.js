import React,{useContext, useState} from 'react';
import man from "../images/man.png";
import { NavLink , useNavigate} from 'react-router-dom';
import { usercontext } from '../App';

const Login=()=>{

  const {state,dispatch}=useContext(usercontext);
  const[email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const navigate=useNavigate();
  const loginuser=async(e)=>{
    e.preventDefault();
    const res= await fetch('/signin',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
           email,password
      })
    })

    const data = await res.json()
    if(res.status === 400 || !data ){
      window.alert("Invalid Credentials")
    }
    else{
      dispatch({type:"USER",payload:true});
      window.alert("Login Successful")
      navigate("/About")
    }
  }
  return(
    <>
      <section className='signup all'>
            <div className="container mt-5 " style={{"color":"black"}}>
            <div className='signup-form'>
              <div className='row'>
              <div  className="col-lg-6"> 
               <div>
                 <figure>
                   <img src={man} style={{"width":"100%","height":"auto"}} alt="Login pic"/>
                 </figure>
                 <NavLink to="/Signup" >Create an Account</NavLink>
               </div>
              </div>
              <div  className="col-lg-6">
              <h2><span className='justforfun'>Signin</span></h2>
               <form  mrthod="POST" id='register-form'>
    
                <div className='form-grp'>
                  <label htmlFor='email'>
                  <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input className='input' type="email" name='email' id='email' autoComplete='off' 
                  value={email}
                  onChange={(e)=>{setemail(e.target.value)}}
                  placeholder="Add Your Email"/>
                </div>
              
                
                <div className='form-grp'>
                  <label htmlFor='password'>
                  <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input className='input'  type="password" name='password' id='password' autoComplete='off' 
                  value={password}
                  onChange={(e)=>{setpassword(e.target.value)}}
                  placeholder="Add Your Password"/>
                </div>

                <div className="form-group">
                <input type="submit" name='signin' id='signin' value="Log In" 
                onClick={loginuser}
                className="btn btn-outline-primary" />
                </div>
               </form>
               </div>
               
               </div>
            </div>   
              
          </div> 
        </section>
    </>
  );
}
export default Login;