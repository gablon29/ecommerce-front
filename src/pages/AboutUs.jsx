import React from 'react'
import './AboutStyle.css'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import newEcom from '../image/newEcom.png'
import newEcom2 from '../image/newEcom2.png'
import newEcom33 from '../image/newEcom33.png'

const AboutUs = () => {
  return (
    <div>
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 p-1"
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
          className="d-block w-100 p-1"
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
          className="d-block w-100 p-1"
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
      <Container className='textMap'>
        <Row>
          <Col>
            <h2>Ubicación</h2>
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
          </Col>
          <Col>
            <div className='map-responsive'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27172.11993374601!2d-60.71949422936097!3d-31.6471274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9758fb26c27%3A0xd30549ac09771c44!2sMercado%20Libre!5e0!3m2!1ses-419!2sar!4v1674741666825!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
              
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutUs
