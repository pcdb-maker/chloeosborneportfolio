import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import "./app.scss"
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      <Intro/>
     
      <Portfolio/>
      
      <Education/>
      
      <Skills/>
      
      <Contact/>

    

    </div>
    </div>
  );
}

export default App;
