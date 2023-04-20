import { Routes, Route } from 'react-router-dom';
import NotFound from "./routes/NotFound";
//
import NavBar from './components/NavBar'
import Home from './components/Home'

import Contact from './components/Contact'
import Academics from './components/Academics'
import Skills from './components/Skills'
import Footer from "./components/Footer";
import { useEffect,useRef,useState } from "react";


function App() {  
  
  const contacto = useRef(null);
  const home = useRef(null);
  const academics = useRef(null);
  const skills = useRef(null);
  
  const scrollToSection = (elementRef) => {
    if (elementRef && elementRef.current) {
      const yOffset = -80; // ajusta este valor según el tamaño de tu navbar
      const y = elementRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
      <div className=' '>  
        <NavBar scrollToSection = {scrollToSection} contacto={contacto} home={home} academics = {academics} skills = {skills} /> 
        <section ref={home} className='pt-20'>
          <Home/>
        </section>
        <section  ref={academics} className="pt-20">
          <Academics/>
        </section> 
        <section  ref={skills} className="pt-20">
          <Skills/>
        </section>
        <section  ref={contacto} className="pt-20">
          <Contact/>
        </section> 
        <Footer/>                   
      </div>
  )


  
}

export default App

