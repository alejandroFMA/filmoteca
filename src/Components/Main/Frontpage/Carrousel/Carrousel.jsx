
import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import image1 from '../../../../assets/cine-asiatico.jpg';
import image2 from '../../../../assets/cine-noir.jpg';
import image3 from '../../../../assets/cine-mujeres.jpg';
import image4 from '../../../../assets/straub-huillet.jpg';
import image5 from '../../../../assets/cine-checoslovaco.jpg';
import './Carrousel.css'; 

const images = [image1, image2, image3, image4, image5];

const Carrousel = () => {
  return (
    <section className="carousel-container">
      <CCarousel controls indicators transition="crossfade">
        {images.map((image, index) => (
          <CCarouselItem interval={5000} key={index}>
            <CImage className="d-block w-100" src={image} alt={`slide ${index + 1}`} />
          </CCarouselItem>
        ))}
      </CCarousel>
    </section>
  );
};

export default Carrousel;