import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './hobbies.css'
export const  Hobbies = ()=> {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
  return <div  style={{
    backgroundColor: 'black'
  }}>
    <Navbar>
      <Container>
        <Navbar.Brand style={{color: 'white'}}>Mis hobbies favoritos</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='main'>
   <div className='carusel'>
   <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.blogs.es/557a21/clash-royale/1366_2000.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Clash royale</h3>
          <p>Me gusta jugar clash royale.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Programar</h3>
          <p>Me gusta programar en js, dart.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.altonivel.com.mx/wp-content/uploads/2019/08/documentos-trabajo.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Trabajar</h3>
          <p>
            Tranajar, Ayudar ala familia.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </div>
    </div>
  </div>
}



