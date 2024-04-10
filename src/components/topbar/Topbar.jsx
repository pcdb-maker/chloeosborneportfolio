import "./topbar.scss"
import { Face3,Mail } from "@mui/icons-material"


export default function Topbar() {
  return (
    <div className="topbar">
     <div className = "wrapper">
     <div className = "left">
      <a href="#intro" className="logo">Chloe O.</a>
      <div className="itemContainer">
        <Face3 className="icon"/>

      <span> Full Stack Web Developer </span>
      </div>
      
      </div>


<div className="right"></div>

     </div>
      
    </div>
  )
}
