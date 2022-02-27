import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './carousel_img.css';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
    <div className='row'>
    <div className='col-12 imagesScrolls'>
              
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
                <img
                  className="d-block w-100 slideshow"
                  src="https://1.bp.blogspot.com/-AHO8MjzsjIk/WQejQu2zY8I/AAAAAAAAXy0/GoWii4ruQ6klI5keJSVKOqcV5Cr5wy-awCEw/s1600/22.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 slideshow"
                  src="https://i.pinimg.com/originals/f9/8f/a7/f98fa75d698dd4ebec9dc80892cd015e.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 slideshow"
                  src="https://www.gambody.com/image/509/02d0_980x500.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 slideshow "
                  src="https://i.pinimg.com/564x/85/4d/9c/854d9c2273dc83a20f2439ab976b466e.jpg"
                  alt="Fourth slide"
                />

                <Carousel.Caption>
                  <h3>Fourth slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 slideshow"
                  src="https://www.gambody.com/blog/wp-content/uploads/2018/09/Iron-Man-2-Juan.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

      </Carousel>
      </div>
     </div>  
    );
  }
  export default ControlledCarousel
//   render(<ControlledCarousel />);
