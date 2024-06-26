import React, { useEffect, useState } from 'react'
import "./skills.scss"
import SkillsList from '../skillsList/SkillsList';
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data_skills";

export default function Skills() {
  const [selected, setSelected] = useState ("featured");
  const [data, setData] = useState ([]);
 
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
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

  useEffect (()=> {

    switch(selected){

      case "featured":
        setData(featuredPortfolio);
        break;

        case "web":
        setData( webPortfolio);
        break;

        case "digital":
        setData(mobilePortfolio);
        break;

        case "design":
        setData(designPortfolio);
        break;


        case "art":
        setData(contentPortfolio);
        break;


        default:
        setData(featuredPortfolio);
        
    }

  }, [selected]);


  return (
    <div className="skills" id="skills">
       <h1>Skills</h1>
      
      <ul>
        {list.map((item) => (
          <SkillsList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            
          />
        ))}
        
      </ul>
     
    
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
