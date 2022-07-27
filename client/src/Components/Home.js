import React, { useEffect, useState } from 'react';

const Home=()=>{
    // const navigate = useNavigate();
    const [userdata, setuserdata] = useState('');
    const [show, usershow]=useState(false);
    const userhome = async () => {
      try {
        const res = await fetch('/getdata', {
          method: "GET",
          headers: {
            Accept:"application/json",
            "Content-Type": "application/json"
          },
          credentials:"include"
        });
        const data = await res.json();
        console.log(data.name)
         setuserdata(data.name);
         usershow(true);
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }

      }
      catch (err) {
        console.log(err);
        //  navigate("/login")
      }
  };
    useEffect(() => {
      userhome();
    }, []);

  return(
    <>
    
      <div className="all">
        <div className='centered'>
        <p><b>WELCOME</b></p>
        <h1 style={{"fontFamily":"'Roboto Slab', serif"}}><b>Mr. {userdata}</b></h1>
        <h2>{show? 'Happy to see You Back' : 'We are MERN Developers'}</h2>
        </div>
      </div>
       
      
    </>
  );
}
export default Home;