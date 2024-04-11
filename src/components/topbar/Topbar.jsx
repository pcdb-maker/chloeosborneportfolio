import "./topbar.scss"
import { FaLocationArrow, FaMailBulk } from "react-icons/fa";



export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Chloe O.</a>

          <div className="itemContainer">
            <FaLocationArrow className="icon" />

            <span>Location: Melbourne, VIC</span>
          </div>

          <div className="itemContainer">
            <FaMailBulk className="icon" />

            <span>Location: Melbourne, VIC</span>
          </div>


        </div>


        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>

          </div>
        </div>

      </div>

    </div>
  )
}
