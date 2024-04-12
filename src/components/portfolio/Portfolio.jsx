import React from 'react'
import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className='portfolio' id="portfolio">

      <h1>Portfolio</h1>
      <ul>
        <li className="active">Web Applications</li>
        <li>Mobile Applications</li>
        <li>Digital Presence Optimixation</li>
        <li>Graphic Design</li>
        <li>Digital Art</li>
        <li>C# Game Design (Unity)</li>
      </ul>


      <div className="container">
        <div className="item">
          <img src="\assests\down.png" alt='' />
          <h3>Banking App</h3>
        </div>

        <div className="item">
          <img src="\assests\down.png" alt='' />
          <h3>Banking App</h3>
        </div>

        <div className="item">
          <img src="\assests\down.png" alt='' />
          <h3>Banking App</h3>
        </div>

        <div className="item">
          <img src="\assests\down.png" alt='' />
          <h3>Banking App</h3>
        </div>

        <div className="item">
          <img src="\assests\down.png" alt='' />
          <h3>Banking App</h3>
        </div>

        <div className="item">
          <img src="\assests\down.png" alt='' />
          <h3>Banking App</h3>
        </div>


      </div>

    </div>
  )
}

