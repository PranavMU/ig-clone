import React from "react"
import './landingpage.css'
import { Link } from "react-router-dom"
const Land = () => {
 return (
 <body>  
  <div id="content">

  <h1 >10x Team 04</h1>
  <h2 ><Link className="link" style={{color: 'green',textDecoration:"none",border:"solid"}} to="/postview">Enter</Link></h2>
  </div>
  <img className="img7" src="../images/img.png" alt=""/>


</body> 
 )
}
export default Land