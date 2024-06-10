import React from "react";
import "./Footer.css"

const Footer = () => {
  return <footer>
    <div> <b>© Filmoteca de Asturias</b></div>
   
    <div className="footer-contact">
      <ul className="footer-list">
        <li ><a href="#">Accesibilidad</a></li>
        <li> <a href="#">Aviso Legal</a></li>
        <li><a href="#">Mapa Web</a></li>
        <li><a href="#">Política de cookies</a></li>
        <li><a href="#">Política de Privacidad</a></li>
      </ul>
    </div>
   
  </footer>;
};

export default Footer;
