const mongoose =require("mongoose")

const postschema=new mongoose.Schema({
    image:{
        data:Buffer,
        contentType:String
    },
    author:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    like:{
        type:Number,
        default:63
    }

})



const Addpost=mongoose.model("post",postschema)

module.exports=Addpost