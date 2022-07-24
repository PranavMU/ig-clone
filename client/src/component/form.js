import Header from "./header"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import "./form.css"
import { useState } from "react"
import Moment from 'moment';


const Form=()=>{
    const date = Moment().format("DD MMM YYYY");
    const [data,setdata]=useState({})
    const [image,setimage]=useState('')
    const navigate =useNavigate()

    const handlesubmit=(e)=>{
        e.preventDefault()
        
        let formData=new FormData()
        formData.append('demoimage',image)
        formData.append('author',data.author)
        formData.append('location',data.location)
        formData.append('description',data.description)
        formData.append('date',date)
        axios.post("https://instaserver-pranav.herokuapp.com/post",formData,{headers:{"Content-type":"multipart/form-data"},}).then((res)=>{
            console.log("success")
            navigate("/postview")
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <>
     <Header/>
    <div class="add">
        <form id="form1">

        <input type={"file"} class="testimage" onChange={(e)=>{setimage(e.target.files[0])}} id="file"/><br/>
            <br/><input type={"text"}  placeholder="Author" onChange={(e)=>{setdata({...data, author: e.target.value})}} id="fname"/>
            <input type={"text"} placeholder="Location" onChange={(e)=>{setdata({...data, location: e.target.value})}} id="city"/>
            <br/><br/><input type={"text"} placeholder="Description" onChange={(e)=> {setdata({...data, description: e.target.value})}} id="prof"/><br/>
             
          <br/><input type="button" form="form1" value="Post" onClick={handlesubmit}/>
          </form> 
        </div>
   
   
   </>
  )
}
export default Form;