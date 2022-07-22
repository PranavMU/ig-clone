const express= require ("express")
const mongoose = require("mongoose");
const multer=require("multer")
const Addpost = require("./modal/addpost")
const app=express()
const fs=require("fs")
const cors = require("cors");
const addpost = require("./modal/addpost");

//middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))



//storage
const Storage=multer.diskStorage({
    destination:"upload",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload=multer({
    storage:Storage
}).single("demoimage")




mongoose.connect("mongodb+srv://pranav:pranav123@cluster0.bwlqe7i.mongodb.net/myinsta-pranav?retryWrites=true&w=majority",()=>{
    console.log("connected to db")
},(err)=>{
    console.log(err)
})





app.post("/post",(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }else{
            const newImage=new Addpost({
                author:req.body.author,
                location:req.body.location,
                description:req.body.description,
                date:req.body.date,
                image:{
                    data:fs.readFileSync("upload/" +req.file.filename) ,
                    contentType:"image/png"
                }
            })
            newImage.save().then(()=>{
                res.send("success")
            }).catch((err)=>{
                console.log(err)
            })
        }
    })
})

app.get("/",(req,res)=>{
    try{
         Addpost.find().sort({_id:-1}).then((allData)=>{
            res.status(200).json(allData)
        })
    }catch(err){
        console.log(err)
    }
})

// const port = process.env.PORT || 3001;

// app.listen(port, function() {
//     console.log("Server started.......on",port);
// });
app.listen(3003,()=>{
    console.log("server is running")
  });