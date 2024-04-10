import "./topbar.scss"
import { FaLocationArrow } from "react-icons/fa";



export default function Topbar() {
  return (
    <div className="topbar">
     <div className = "wrapper">
     <div className = "left">
      <a href="#intro" className="logo">Chloe O.</a>
      <div className="itemContainer">
        <FaLocationArrow  className="icon"/>
       
        <span>Location: Melbourne, VIC</span>
      </div>
  
       
      <span> Full Stack Web Developer </span>
      
      
      </div>


<div className="right"></div>

     </div>
      
    </div>
  )
}
