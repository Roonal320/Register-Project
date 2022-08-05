const mongoose=require("mongoose");

// const db=process.env.DATABASE;

mongoose.connect("mongodb+srv://Roonalkhandelwal:kalibilli@cluster0.z59yb.mongodb.net/Register?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{console.log("connection successfull")
}).catch((err)=>{console.log(err)});
