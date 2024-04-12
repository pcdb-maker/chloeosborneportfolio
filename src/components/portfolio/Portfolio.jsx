import React, { useState } from 'react'
import "./portfolio.scss"
import PortfolioList from '../portfolioList/PortfolioList';

export default function Portfolio() {
  const [selected, setSelected] = useState ("web")
 
  const list = [
    {
      id: "web",
      title: "Web Applications",
    },
    {
      id: "mobile",
      title: "Mobile Application",
    },
    {
      id: "digital",
      title: "Digital Presence Optimization",
    },
    {
      id: "design",
      title: "Graphic Design",
    },
    {
      id: "art",
      title: "Digital Art",
    },

    {
      id: "games",
      title: "Art",
    },
  ];


  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
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

