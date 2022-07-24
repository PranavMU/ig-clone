import "../App.css";
import Header from "./header"
import axios from "axios"
import { useEffect, useState } from 'react';


const Postview =()=>{
    const [data,setpost]=useState([])
    useEffect(()=>{
        axios.get("https://instaserver-pranav.herokuapp.com/")
        
        .then((res)=>{setpost(res.data)})
        .catch((err)=>{console.log(err)})
    },[])
    return(
        <>
        <Header/>
        {
            data.map((user,i)=>{
                const base64str=btoa(
                    new Uint8Array(user.image.data.data).reduce(function(data,byte){
                        return data+String.fromCharCode(byte)
                    },"")
                );
                return (
                    <div className='content' key={i}>
                    <div className="container">
  <div className="post">
      <div class="post-header">
          <div>
              <h2>{user.author}</h2>
              <p class="p1">{user.location}</p>
          </div><div>
              <span>•••</span>
          </div>
      </div>
      <div>
          <img className="img1"  src={`data:image/png;base64,${base64str}`} alt="" />
      </div>
      <div className="bottom">
          <img className="img2" src="./images/icons.jpg" alt=""/>
          <p className="p3">{user.date}</p>
          <p className="p4">{user.like} likes </p>
          <p className="p2"><b>{user.description}</b></p>
          
      </div>
  </div>
  </div>
                    </div>
                )


            })
        }
        
        </>
    )
}
export default Postview