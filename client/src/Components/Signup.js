import React,{useState} from 'react';
import { NavLink ,useNavigate} from 'react-router-dom';
import logo from "../images/signin.png";
const Signup=()=>{
  
   const navigate=useNavigate();

  const [user,setUser]=useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  });
  let name,value;
  const handleInputs=(e)=>{
      name=e.target.name;
      value=e.target.value;
      setUser({...user,[name]:value});
  }; 
const postdata=async(e)=>{
   e.preventDefault();  
  const{name,email,phone,work,password,cpassword}=user;
  const res= await fetch("/register",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({
      name,email,phone,work,password,cpassword
    })
  });
  const data=await res.json();
  if(data.status===422 || !data){
    window.alert("Invalid Credentials");
    console.log("Invalid Credentials");
  }
  else{
    window.alert(" Credentials Registered");
    console.log("Credentials Registered");  
    navigate("/Login");
  }
};
  return(
    <>  
        <section className='signup all'>
            <div className="container mt-5 " style={{"color":"black"}}>
            <div className='signup-form'>
              <div className='row'>
              <div  className="col-lg-6"> 
               <div>
                 <figure>
                   <img src={logo} style={{"width":"80%","height":"auto"}} alt="registration pic"/>
                 </figure>
                 <NavLink to="/login" style={{"alignContent":"center"}}>I'm Already a Register</NavLink>
               </div>
              </div>
              <div  className="col-lg-6">
              <h2><span className='justforfun'>Signup</span></h2>
               <form  method="POST" id='register-form'>
                <div className='form-grp'>
                  <label htmlFor='name'>
                  <i className="zmdi zmdi-account"></i>
                  </label>
                  <input className='input' type="text" name='name' id='name' autoComplete='off' 
                  value={user.name} onChange={handleInputs}
                  placeholder="Add Your Name"/>
                </div>
                <div className='form-grp'>
                  <label htmlFor='email'>
                  <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input className='input' type="email" name='email' id='email' autoComplete='off' 
                  value={user.email} onChange={handleInputs}
                  placeholder="Add Your Email"/>
                </div>
                <div className='form-grp'>
                  <label htmlFor='phone'>
                  <i className="zmdi zmdi-phone-in-talk materials-icons-name"></i>
                  </label>
                  <input  className="input" type="string" name='phone' id='phone' autoComplete='off' 
                  value={user.phone} onChange={handleInputs}
                  placeholder="Add Your Phone Number"/>
                </div>
                <div className='form-grp'>
                  <label htmlFor='work'>
                  <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input  className='input' type="text" name='work' id='work' autoComplete='off' 
                  value={user.work} onChange={handleInputs}
                  placeholder="Add Your Profession"/>
                </div>
                <div className='form-grp'>
                  <label htmlFor='password'>
                  <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input className='input'  type="password" name='password' id='password' autoComplete='off' 
                  value={user.password} onChange={handleInputs}
                  placeholder="Add Your Password"/>
                </div>
                <div className='form-grp'>
                  <label htmlFor='cpassword'>
                  <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input className='input'  type="cpassword" name='cpassword' id='cpassword' autoComplete='off' 
                  value={user.cpassword} onChange={handleInputs}
                  placeholder="Confirm Password"/>
                </div>

                <div className="form-group">
                <input type="submit" name='signup' id='signup' value="Register" className="btn btn-outline-primary" onClick={postdata} />
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
export default Signup;