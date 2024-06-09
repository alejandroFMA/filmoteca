import React from "react";
import { Routes, Route } from "react-router-dom";
import Frontpage from "./Frontpage/Frontpage";
import About from "./About/About"
import Newsfeed from "./Newsfeed/Newsfeed"
import Programs from "./Programs/Programs"
import './Main.css'

const Main = () => {
  return <main> 
    <Routes>
      <Route path="/" element={<Frontpage/>}/>
      <Route path="/filmoteca" element={<About/>}/>
      <Route path="/noticias" element={<Newsfeed/>}/>
      <Route path="/programacion" element={<Programs/>}/>
    </Routes>
  </main>;
};

export default Main;
