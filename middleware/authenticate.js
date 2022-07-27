const jwt=require("jsonwebtoken")
const User=require("../models/userShcema")
const cookieParser = require('cookie-parser')
const Authenticate=async(req,res,next)=>{
      try{
        const token=req.cookies.jwtoken;
        // console.log(req.body);
        if(!token){
          res.status(401).send("Error: No Token Provided"); 
          next();
        }
        else{
        const verifytoken=jwt.verify(token,process.env.SECRET_KEY);
        const rootuser= await User.findOne({_id:verifytoken._id,"tokens.token":token});
        // console.log(rootuser); 
        if(!rootuser){throw new Error("User Not Found")}

        req.token=token;
        req.rootuser=rootuser;
        req.userid=rootuser._id;
        // res.send(req.rootuser);
        // console.log(rootuser);
        next();
        }
      }
      catch(err){
        res.status(401).send("Error: No Token Provided") 
        console.log(err);
        next();
      }
}
module.exports=Authenticate;