import { Link, Route, Routes } from "react-router-dom";



import React from 'react'
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import AccessibilityBar from "./components/home/AccessibilityBar";
import Terapias from "./pages/Terapias";
import Sobre from "./pages/Sobre";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./pages/Post";
import Blog from "./pages/Blog";


const App = () => {
  const [loading, setLoading] = useState(true)
  const [array, setArray] = useState()

  const getJson = async () => {
    try {
      const response = await fetch('https://construtorafortcon.com.br/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(posts => setArray(posts));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getJson(array);
  }, []);

  

  if(!loading){
    const routesArray = []

    function setRouteArray(arr){

      for(let i = 0; i < Object.keys(arr).length; i++){
        routesArray.push(arr[i].title.rendered.replace(/ /g, "-").replace(",", ""))
      }

    }

    setRouteArray(array)

    console.log(routesArray)

    return (
      <div>
        <AccessibilityBar/>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Terapias" element={<Terapias />}/>
          <Route path="/Acupuntura-em-Santos" element={<Sobre />}/>
          <Route path="/Blog" element={<Blog />}/>
          {
            routesArray.map(cat => (
              <Route key={cat} path={`/Blog/posts/${cat}`} element={<Post/>} />
            ))
          }
        </Routes>
        <a id="robbu-whatsapp-button" target="_blank" href="https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!">
          <img src="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-icon.svg"/>
        </a>

      </div>

      
    )
  } else {
    return (

      <div className="loading-container">
          <div className="spinner"></div>
      </div>
  )
  }
}

export default App