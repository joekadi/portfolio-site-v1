import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Writings from "./components/writings/Writings";
import ProjectSlider from "./components/projectSlider/ProjectSlider";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss"
import { useState } from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <ProjectSlider/>
        <Writings/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
