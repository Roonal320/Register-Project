import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Me from "../images/Me.jpg";
import man from "../images/man.png";
const About=()=>{
   const navigate = useNavigate();
   const [userdata,setuserdata] = useState({});
  
   const callaboutpage = async()=>{
      try{
      const res= await fetch('/about',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include",
      });
      const data =await res.json();
      console.log(data);
      setuserdata(data || '');
      if(res.status!==200){
        const error= new Error(res.error);
        throw error;
      }
      }
      catch(err){
      console.log(err);
      navigate("/login")
      } 
  };
  
  
  useEffect(()=>{
    callaboutpage();
   },[]);
  
  return(
    <> 
    <div className='all'>
      <div className='container-fluid emp-profile'>
        <form method='GET'>
          <div className='row'>
           <div className='col-md-4 '>
            <figure>
              <img src={userdata.name==="Roonal"? Me : man} alt="profile-img" className="responsive"/>
              </figure>
           </div>
           <div className='col-md-6'>
              <div>
                <h5>{userdata.name}</h5>
                <h6>{userdata.work}</h6>
                <p className='mt-3 mt-2'>RANKINGS:<span>1/10</span></p>
                
                <ul className="nav nav-pills nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link " href="#home" id='home-tab' data-toggle="tab" role="tab" >About</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link " href="#profile" id='profile-tab' name="btnAddMore" data-toggle="tab" role="tab" >Timeline</a>
                  </li>
                </ul>
              </div>
           </div>
           <div className='col-sm-2 '  >
           <input type="submit" className="btn btn-info btn-sm" value="Edit Profile"/>
           </div>
          </div>
          <div className='row'>
          <div className='col-md-4'>
            <div className='profile-work'>
             <p>Work Links</p>
             <a href='https://www.instagram.com/roonalkhandelwal/' target="_roonal">Instagram</a><br/>
             <a href='https://www.linkedin.com/in/roonal-khandelwal-b02653197/' target="_roonal">Linkdin</a><br/>
             <a href='https://auth.geeksforgeeks.org/user/roonalkhandelwal274/practice/' target="_roonal">GFG</a><br/>
             <a href='https://leetcode.com/Roonal274/' target="_roonal">Leetcode</a><br/>
             <a href='https://github.com/Roonal320' target="_roonal">GitHub</a><br/>
            </div>
          </div>
          <div className='col-md-8 pl-5 about-info'>
            <div id='mytabcontent' className='tab-content profile-tab'>
              <div className='tab-pane fade show active' id='home' role="tabpanel" aria-labelledby="home-tab">
                <div className='row'>
                  <div className='col-md-6'>
                    <label >USER-ID</label>
                  </div>
                  <div className='col-md-6'>
                    <p style={{"color":"blue"}}>{userdata._id}</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label >Name</label>
                  </div>
                  <div className='col-md-6'>
                    <p style={{"color":"blue"}}>{userdata.name}</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label >Email</label>
                  </div>
                  <div className='col-md-6'>
                    <p style={{"color":"blue"}}>{userdata.email}</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label >Phone</label>
                  </div>
                  <div className='col-md-6'>
                    <p style={{"color":"blue"}}>{userdata.phone}</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label >Profession</label>
                  </div>
                  <div className='col-md-6'>
                    <p style={{"color":"blue"}}>{userdata.work}</p>
                  </div>
                </div>
              </div> Active
              <div className='tab-pane fade ' id='profile' role="tabpanel" aria-labelledby="profile-tab">
                <div className='row'>
                <div className='row'>
                  <div className='col-md-6'>
                    <label >Experience</label>
                  </div>
                  <div className='col-md-6'>
                    <p style={{"color":"blue"}}>Medium</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label >Hourly Rate</label>
                  </div>
                  <div className='col-md-6'>
                    <p style={{"color":"blue"}}>5$/Hr</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label >Total Projects</label>
                  </div>
                  <div className='col-md-6'>
                    <p style={{"color":"blue"}}>2</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label >English</label>
                  </div>
                  <div className='col-md-6'>
                    <p style={{"color":"blue"}}>Fluent</p>
                  </div>
                  <div className='row'>
                  <div className='col-md-6'>
                    <label >Availability</label>
                  </div>
                  <div className='col-md-6'>
                    <p style={{"color":"blue"}}>6 days a week</p>
                  </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </form>
      </div>
    </div>  
    </>
  );
}
export default About;