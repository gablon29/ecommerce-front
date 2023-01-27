import React from 'react'
import './AboutStyle.css'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import newEcom from '../image/newEcom.png'
import newEcom2 from '../image/newEcom2.png'
import newEcom33 from '../image/newEcom33.png'
import ComponentMap from '../components/ComponentMap'

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
      <Container>
        <Row className='textMap'>
          <Col>
            <h2 className='m-5'>Ubicación</h2>
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
          </Col>
          <Col>
                <ComponentMap/>
          </Col>
        </Row>
      </Container>
    </div>
             
  )
            
              
}

export default AboutUs
