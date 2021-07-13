import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Writings from "./components/writings/Writings";
import ProjectSlider from "./components/projectSlider/ProjectSlider";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import "./app.scss"
import { useState, useEffect } from "react"
import ReactGa from 'react-ga';




function App() {

  // google analytics stuff
  useEffect(() => {
    ReactGa.initialize('UA-201902217-1')
  }, [])


  // get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // listen to the resize event
  window.addEventListener('resize', () => {
    // execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });


  const [menuOpen, setMenuOpen] = useState(false)
  return (

    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className="sections">
          <Intro/>
          <About />
          <ProjectSlider/>
          <Writings/>
          <Contact/>
      </div>
    </div>

  );
}

export default App;
