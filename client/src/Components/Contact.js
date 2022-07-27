import React, { useEffect, useState } from 'react';

const Contact = () => {
  // const navigate = useNavigate();
  const [userdata, setuserdata] = useState({
    name: "", email: "", phone: "", message:""
  });

  const handleinputs=async (e)=>{
    const name= e.target.name;
    const value=e.target.value;

    setuserdata({...userdata,[name]:value});
 }

 const contactform= async(e)=>{
     e.preventDefault();
   const{name,email,phone,message}=userdata;
   // console.log(userdata);  
   const res= await fetch("/contact",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({
       name,email,phone,message
     })
   });
   const data= await res.json();
   if(!data){
     console.log("message not sent");
     console.log(data);
   }
   else{
     alert("Message Sent");
     console.log(data);
     setuserdata({...userdata, message:""});
   }
 };

  const usercontact = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();
      // console.log(data)
      setuserdata({...userdata, name:data.name, email:data.email, phone:data.phone});
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
    usercontact();
  }, []);

  // console.log(userdata.name);
  return (
    <>
      <div>
        <div className="container-fluid"  >

          <div className='row'>
            <div className='col-lg-4  '>
              <div className='contact-row d-flex '>
                <i className="zmdi zmdi-phone zmdi-hc-2x py-2"></i>
                <div style={{ "padding": "5px" }}>
                  <h3>Phone</h3>
                  <h5>+91 8282828282</h5>
                </div>
              </div>
            </div>
            <div className='col-lg-4 '>
              <div className='contact-row d-flex'>
                <i className="zmdi zmdi-email zmdi-hc-2x py-2"></i>
                <div style={{ "padding": "5px" }}>
                  <h3>Email</h3>
                  <h5>roonalkhandelwal274@gmail.com</h5>
                </div>
              </div>
            </div>
            <div className='col-lg-4 '>
              <div className='contact-row d-flex'>
                <i className="zmdi zmdi-gps-dot zmdi-hc-2x py-2"></i>
                <div style={{ "padding": "5px" }}>
                  <h3>Address</h3>
                  <h5>Raipur, Chhattisgarh, India</h5>
                </div>
              </div>
            </div>
          </div>
          <div className='contact-form' style={{ backgroundColor: "rgb(248, 248, 248)" }}>
            <div className='container'>
              <h1>Contact Us</h1>
              <form method="POST" id='contact-form'>
                <div className='row'>
                  <div className='col-lg-4'>
                    <input defaultValue={userdata.name} type="text" id="contact-form-name" className="contact-input"  name="name" onChange={handleinputs} placeholder="Your Name*" required={true} />
                  </div>
                  <div className='col-lg-4'>
                    <input defaultValue={userdata.email} type="email" id="contact-form-email" className="contact-input"  name="email" onChange={handleinputs} placeholder="Your Email*" required={true} />
                  </div>
                  <div className='col-lg-4'>
                    <input defaultValue={userdata.phone} type="number" id="contact-form-number" className="contact-input"  name="phone" onChange={handleinputs} placeholder="Your Phone Number*" required={true} />
                  </div>
                </div>
                <div className=" mt-3">
                  <textarea className="contact-form-text" cols={50} rows={10}  name="message" onChange={handleinputs} placeholder='Message'></textarea>
                </div>
                <div className='mt-1'>
                  <button type='submit' className="btn btn-outline-primary" onClick={contactform} >Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;