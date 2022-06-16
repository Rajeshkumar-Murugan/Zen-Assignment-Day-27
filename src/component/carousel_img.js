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
                  src="https://www.gambody.com/blog/wp-content/uploads/2021/06/Marvel-3D-models-for-printing-Gambody-blog.jpg"
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
                  src="https://i.pinimg.com/originals/67/24/8d/67248d05032f479146ff530ed3a6e6e5.png"
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
                  src="https://www.gambody.com/blog/wp-content/uploads/2021/04/3D-printed-Transformers-Gambody-blog.jpg"
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
                  src="https://www.sculpteo.com/wp-content/uploads/2020/01/Blog-headline-4-1-1.jpg"
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
