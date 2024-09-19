import React from "react";
import Frontpage from "./Frontpage/Frontpage";
import About from "./About"
import Newsfeed from "./Newsfeed"
import Programs from "./Programs"
import { Routes, Route } from "react-router-dom";
import './Main.css'

const Main = () => {
  return <main> 
    <Routes>
      <routes path="/" element={<Frontpage/>}/>
      <routes path="/filmoteca" element={<About/>}/>
      <routes path="/noticias" element={<Newsfeed/>}/>
      <routes path="/programas" element={<Programs/>}/>
      <routes/>
    </Routes>
  <Frontpage/>
  </main>;
};

export default Main;
