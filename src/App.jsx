import { Link, Route, Routes } from "react-router-dom";



import React from 'react'
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import AccessibilityBar from "./components/home/AccessibilityBar";
import Terapias from "./pages/Terapias";
import Sobre from "./pages/Sobre";


const App = () => {

  return (
    <div>
      <AccessibilityBar/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Terapias" element={<Terapias />}/>
        <Route path="/Acupuntura-em-Santos" element={<Sobre />}/>
      </Routes>
      <a id="robbu-whatsapp-button" target="_blank" href="https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!">
        <img src="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-icon.svg"/>
      </a>

    </div>

    
  )
}

export default App