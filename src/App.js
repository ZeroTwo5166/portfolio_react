import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { useState } from 'react'
import Portfolio from './components/Portfolio'
import './App.css'

function App() {

  const [bgColor1, setbgColor1] = useState("#11088c");
  const [bgColor2, setbgColor2] = useState("#b818b3");

  return (
    <div style={{
      background: `linear-gradient(to right, ${bgColor1},${bgColor2})`,
    }} 
    >
    <NavBar/>
    <Home color1={bgColor1} 
      color2={bgColor2} 
      setColor1={setbgColor1} 
      setColor2={setbgColor2}/>
    <SocialLinks />
    <About />
    <Portfolio/>
    <Experience />
    <Contact />
  
    </div>
  );
}

export default App;

/**
style={{
      background: `linear-gradient(to right, ${bgColor1},${bgColor2})`,
    }} 

 */