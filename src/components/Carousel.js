import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img from '../images/img.jpg'
import img2 from '../images/img2.jpg'


const CarouselImg = () => {
    return (
        <div>
            <Carousel>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="Third slide"
      style ={{
        height: '300px'
      }}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Third slide"
      style ={{
        height: '300px'

      }}
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default CarouselImg
