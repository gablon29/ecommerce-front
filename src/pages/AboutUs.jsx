import React from 'react'
import './AboutStyle.css'
import { Carousel } from 'react-bootstrap'
import newEcom from '../image/newEcom.png'
import newEcom2 from '../image/newEcom2.png'
import newEcom33 from '../image/newEcom33.png'

const AboutUs = () => {
  return (
    <div>
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={newEcom}
          alt="First slide"
        />
        <Carousel.Caption className='encuadreParrafo'>
          <h3 className='titleimg'>Nuestras instalaciones</h3>
          <p className='textImg'>Caracterizados por ser una de las empresas con instalaciones mas limpias y proligas del pais.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={newEcom2}
          alt="Second slide"
        />

        <Carousel.Caption className='encuadreParrafo'>
          <h3 className='titleimg'>Nuestros recursos</h3>
          <p className='textImg'>En mano de los mejores profesionales del desarrollo. Para garantizar el maximo desempeño web.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={newEcom33}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='titleimgEnd'>Nosotros</h3>
          {/* <p>
            
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default AboutUs
