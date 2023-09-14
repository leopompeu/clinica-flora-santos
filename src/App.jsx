import { Route, Routes } from "react-router-dom";
import React from 'react'
import NavBar from "./components/NavBar";
import AccessibilityBar from "./components/home/AccessibilityBar";
import { useEffect, useState, lazy, Suspense } from "react";


const App = () => {
  const [loading, setLoading] = useState(true)
  const [array, setArray] = useState()

  const Home = lazy(() => import ('./pages/Home'));
  const Terapias = lazy(() => import ('./pages/Terapias'));
  const Sobre = lazy(() => import ('./pages/Sobre'));
  const Post = lazy(() => import ('./pages/Post'));
  const Blog = lazy(() => import ('./pages/Blog'));


  const getJson = async () => {
    try {
      const response = await fetch('https://blog.clinicaflorasantos.com.br/wp-json/wp/v2/posts')
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

    var tag = '';

    function setRouteArray(arr){

      for(let i = 0; i < Object.keys(arr).length; i++){
        routesArray.push(arr[i].title.rendered.replace(/[^\w\s]/gi, '').replace(/ /g, "-").replace(",", ""))
      }

    }

    setRouteArray(array)

    return (
      <div>
        <AccessibilityBar/>
        <NavBar/>
        <Suspense fallback={
          <div className="loading-container">
            <div className="spinner"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home thisArray={array}/>}/>
            <Route path="/Terapias" element={<Terapias />}/>
            <Route path="/Acupuntura-em-Santos" element={<Sobre />}/>
            <Route path="/Blog" element={<Blog thisArray={array}/>}/>
            {
              routesArray.map(cat => (
                <Route key={cat} path={`/Blog/posts/${cat}`} element={<Post thisArray={array} thisTag={`${cat}`}/>} />
              ))
            }
          </Routes>
        </Suspense>
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