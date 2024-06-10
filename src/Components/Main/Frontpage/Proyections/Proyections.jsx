import React from "react";
import "./Proyections.css";
import image1 from "../../../../assets/demasiado-pronto.jpg";
import image2 from "../../../../assets/perdido.jpg";
import image3 from "../../../../assets/still-walking.jpg";
import image4 from "../../../../assets/retorno-pasado.jpg";

const Proyections = () => {
  return (
    <>
      <section>
        <h2>Proximas Proyecciones</h2>
        <div className="proyections-container">
          <article className="proyection-movie">
            <img className="image-article" src={image1} />
            <b>DEMASIADO PRONTO, DEMASIADO TARDE</b>
            <i>Trop tôt, trop tard</i>
            <p>
              DANIÈLE HUILLET/JEAN-MARIE STRAUB, 1982. Francia. VOSE. Color.
              100’
            </p>
            <p>
              <span className="date-hour">
                DOMINGO 1 18:30 H / MARTES 17 21:00 H
              </span>
            </p>
            <p>
              Película dividida en dos partes; la primera en Francia, la segunda
              en Egipto. Sobre las imágenes de la Bretaña, un texto de Engels es
              leído, describiendo la miseria de los campesinos en 1789. En
              Egipto, es un texto del historiador Mahmoud Hussein sobre la lucha
              de clases en ese país, desde Bonaparte hasta el reino de Sadate.
              Este vídeoensayo pone en diálogo las luchas de clase y revolución
              en Francia y Egipto a través del paisaje, la voz en off y las
              figuras humanas.
            </p>
 
          </article>
          <article className="proyection-movie">
          <div className="image-container"></div>
          <div className="description - container"></div>
            <img className="image-article" src={image2} />
            <b>PERDICIÓN</b>
            <i>Double Indemnity</i>
            <p>BILLY WILDER, 1944. EEUU. VOSE. B/N. 106’</p>
            <p>
              <span className="date-hour">DOMINGO 1 21:OO H</span>
            </p>
            <p>
              En la ciudad de Los Angeles un agente de una compañía de seguros
              (Fred MacMurray) y una cliente (Bárbara Stanwyck) traman asesinar
              al marido de esta última para así cobrar un cuantioso y falso
              seguro de accidentes. Todo se complica cuando entra en acción
              Barton Keyes (Edward G. Robinson), investigador de la empresa de
              seguros.
            </p>
          </article>
          <article className="proyection-movie">
            <img className="image-article" src={image3} />
            <b>STILL WALKING</b>
            <i>Aruitemo, Aruitemo</i>
            <p>HIROKAZU KOREEDA, 2008. Japón. VOSE. Color. 108’</p>
            <p>
              <span className="date-hour">
                MARTES 3 18:30 H / DOMINGO 22 18: 30 H
              </span>
            </p>
            <p>
              Un día de verano, unos hijos vuelven a la casa familiar para
              visitar a sus ancianos padres. Los dos llegan con sus respectivas
              familias para conmemorar la trágica muerte del hijo mayor en un
              accidente ocurrido hace quince años. Aunque la casa y la comida
              familiar apenas han variado, el paso de los años permite observar
              ligeros cambios en cada uno de los miembros de la familia: el amor
              se mezcla con el rencor y todos guardan algún secreto
            </p>
          </article>
          <article className="proyection-movie">
            <img className="image-article" src={image4} />
            <b>RETORNO AL PASADO</b>
            <i>Out of the Past</i>
            <p>JACQUES TOURNEAUR, 1947. EEUU. VOSE. 1947.</p>
            <p>
              <span className="date-hour">
                MARTES 3 21:00 H / MARTES 10 21:00 H
              </span>
            </p>
            <p>
              Jeff Bailey, un antiguo detective, posee una gasolinera en un
              pequeño pueblo, donde lleva una vida tranquila y sencilla. Sus
              amores son la pesca y una joven con la que quiere casarse.
              Inesperadamente, recibe la visita de un viejo conocido que le
              anuncia que el jefe quiere verlo. Bailey se ve entonces obligado a
              contarle a su novia su turbio pasado.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Proyections;
