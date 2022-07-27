const dotenv=require("dotenv");
const express=require("express");
const app=express();
const cookieParser = require('cookie-parser')
const port=process.env.PORT || 8000;

dotenv.config({path:'./config.env'});
require("./db/conn");
app.use(express.json());
const user=require("./models/userShcema");
app.use(require("./router/auth"));
app.use(cookieParser());

// const middleware=(req,res,next)=>{
//     console.log("welcome middleware");
//     next();
//  };
//  app.get("/",(req,res)=>{
//      res.send("hello World form the server");
//  });
// app.get("/about",middleware,(req,res)=>{
//     console.log("hello my about");
//     res.send("hello World form the aboutme server");
// });
// app.get("/contact",(req,res)=>{
//      res.cookie("choco","billi");
//     res.send("hello World form the contact server");
// });
app.get("/signin",(req,res)=>{
    res.send("hello World form the login server");
});
app.get("/signup",(req,res)=>{
    res.send("hello World form the register server");
});

if(process.env.NODE_ENV ==  "production"){
    app.use(express.static("client/build"));
}
app.listen(port,()=>{
    console.log(`connection successful at port ${port}`);
});