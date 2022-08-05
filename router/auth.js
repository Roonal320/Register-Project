const express=require("express");
const bcrypt= require("bcryptjs");
const user = require("../models/userShcema");
const authenticate=require("../middleware/authenticate");
const cookieParser = require("cookie-parser");
const router=express.Router();
require("../db/conn");
// router.get('/' ,(req,res)=>{
//       res.send("page is router .js");
// });
router.use(cookieParser());
// by promises
// router.post('/register',(req,res)=>{
//      const {name,email,phone,work,password,cpassword}=req.body;
//       //res.json({messege:req.body});
//      if(!name || !email || !phone || !work || !password || !cpassword) 
//       {  res.status(422).json({error:"plz fill all required spaces"});
//       }
//      user.findOne({email:email})
//      .then((userExist)=>{
//            if(userExist)
//            {return res.status(422).json("user already exists");}
//         const User=new user({name,email,phone,work,password,cpassword});
//         User.save().then(()=>{
//               res.status(201).json({message:"user created"});
//         }).catch(()=>{
//               res.status(500).json({error:"error found"});
//         });   
//      }).catch(err=>{console.log(err)}); 
// });
//by async await
router.post('/register',async (req,res)=>{
     const {name,email,phone,work,password,cpassword}=req.body;
     if(!name || !email || !phone || !work || !password || !cpassword) 
      {  res.status(422).json({error:"plz fill all required spaces"});
      }
      try{
           const userExist= await user.findOne({email:email})
           if(userExist)
           {return res.status(422).json("user already exists");}
           
           const User=new user({name,email,phone,work,password,cpassword});
      //      const userregister=await User.save();
      //      if(userregister)
      //       {  res.status(201).json({message:"user created"});
      //       }
      //       else
      //       { res.status(500).json({error:"failed to register"});}
           await User.save();
           res.status(201).json({message:"user created"});
       }
      catch(err){
            console.log(err);
      } 
});
//login router
router.post('/signin',async (req,res)=>{
       try{ 
             let token;
             const {email,password}=req.body;
            if(!email || !password) 
             {res.status(400).json({error:"plz fill properly"});}
            
             const userlogin= await user.findOne({email:email});

             if(userlogin)
             { const isMatch = await bcrypt.compare(password,userlogin.password);
                 
               token= await userlogin.generateAuthToken();
               res.cookie("jwtoken",token,{
                     expires: new Date(Date.now()+25892000000),
                     httpOnly:true,
               });  
            //    res.cookie("jwtoken",token,{
            //       expires: new Date(Date.now()+25892000000),
            //       httpOnly:true,
            //       path:"/getdata"
            // });
            // res.cookie("jwtoken",token,{
            //       expires: new Date(Date.now()+25892000000),
            //       httpOnly:true,
            //       path:"/contact"
            // });  
               console.log(token); 
                  if(!isMatch)
                  {
                     res.status(400).json({error:"invalid credentials"});
                  }
                  else
                  {res.json({message:"user signin successfully"});}
            }
             else
             {res.json({message:"invalid Credentials"});}
             
       }
       catch(err)
       { 
          console.log(err);
       }
});

router.get("/about",authenticate,(req,res)=>{
      res.send(req.rootuser);
  });
router.get("/getdata",authenticate,(req,res)=>{
      res.send(req.rootuser);
  }); 

router.post('/contact', authenticate, async(req,res)=>{

        const {name, email, phone, message}=req.body;
      //   console.log(req.body);
        if(!name || !email || !phone || !message){
            console.log("fill the co4ntact form");
            res.json({error :"plz fill the contact form"});
        }
        else{
        try{
       const usercontact= await user.findOne({_id: req.userid});
      //  console.log(usercontact);
        if(usercontact){
            const usermessage= await usercontact.addMessage(name,email,phone,message);
            await usercontact.save();
            res.status(201).json({message:"message send successfully"});
        }
        else{
            res.status(401).json({message:"wrong ID;"});
        }
      }
      catch(error){
            console.log(error);
      }
   }  
 });

 router.get("/logout",(req,res)=>{
      res.clearCookie('jwtoken',{path:'/'});
      res.status(200).send("user logout");
  });

module.exports=router;