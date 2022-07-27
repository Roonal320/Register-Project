import React from "react";
import { NavLink } from 'react-router-dom';
const Errorpg=()=>{
  return (
      <>
          <div id="notfound">
             <div className="notfound">
                 <div className="notfound-404">
                    <h1>404</h1>
                 </div>
                 <h2>We are Sorry, page not Found!</h2>
                 <p>The page you are lookin for was not found or is temporary available 
                  please try again later</p>
                 <NavLink to="/">Back To Homepage</NavLink>
             </div>
          </div>
      </>
  );
}
export default Errorpg;