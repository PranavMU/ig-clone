import '../App.css';
import {useNavigate } from "react-router-dom"

  
const Header=()=>{
    const navigate=useNavigate()
    const handleclick=()=>{
        navigate("/form")
    }
  return (
    <div className="App">
     
     <header>
             
             <h1>♕𝐢𝐧𝐬𝐭𝐚𝐜𝐥𝐨𝐧𝐞</h1> <img className='logo_icon' onClick={handleclick} src="../images/imgheadercam.png" />
           
     </header>
     

    </div>
  )
}
export default Header