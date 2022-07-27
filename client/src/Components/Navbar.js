import React,{useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from "../images/logo192.png";
import { usercontext } from '../App';


const Navbar=()=>{
  const {state,dispatch}=useContext(usercontext);

  const Rendermenu=()=>{
    if(state){
     return(
      <>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/About">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Logout">Logout</NavLink>
      </li>
      </>
     )
    }
    else{
      return(
        <>
        <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/About">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Signup">Register</NavLink>
      </li>
        </>
      )
    } 
  };
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
       <NavLink className="navbar-brand" to="/" >
       <img  src={logo} alt='logo' style={{"height":"50px","width":"50px"}}/>
        </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
       
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
    <Rendermenu />
    </ul>
    
  </div>
</nav>
    </>
  );
}
export default Navbar;