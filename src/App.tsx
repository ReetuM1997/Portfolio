import { useState } from 'react';
import './App.css'
import HeroSection from './component/HeroSection.tsx/HeroSection'
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Project from './component/Projects/Project';
import Contact from './component/Contact/Contact';

function App() {


  return (
    <>
     <HeroSection/>
     <About/>
     <Skills/>
     <Project/>
     <Contact/>
    </>
  )
}

export default App
