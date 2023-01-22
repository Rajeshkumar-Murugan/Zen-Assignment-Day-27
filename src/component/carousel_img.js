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
    <div className='col-12 imagesScrolls '>
              
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
                <img
                  className="d-block w-100 slideshow "
                  src="https://1.bp.blogspot.com/-AHO8MjzsjIk/WQejQu2zY8I/AAAAAAAAXy0/GoWii4ruQ6klI5keJSVKOqcV5Cr5wy-awCEw/s1600/22.jpg"
                  alt="First slide"
                  
                />
                <Carousel.Caption>
                  <h3>Avengers Action Figure</h3>
                  {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 slideshow"
                  src="https://www.gambody.com/blog/wp-content/uploads/2021/06/Marvel-3D-models-for-printing-Gambody-blog.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Marvel Action Figure</h3>
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 slideshow"
                  src="https://i.pinimg.com/originals/67/24/8d/67248d05032f479146ff530ed3a6e6e5.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Action Figure</h3>
                  {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 slideshow "
                  src="https://www.gambody.com/blog/wp-content/uploads/2021/04/3D-printed-Transformers-Gambody-blog.jpg"
                  alt="Fourth slide"
                />

                <Carousel.Caption>
                  <h3>Transformers Action Figure</h3>
                  {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 slideshow"
                  src="https://i.pinimg.com/originals/14/1e/52/141e524c47c63f02036b18f55002fc6a.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Batman Action Figure</h3>
                  {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 slideshow"
                  src="https://i.ytimg.com/vi/rCXehTpuyn8/maxresdefault.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Pokemon Action Figure</h3>
                  {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
      </Carousel>
      </div>
     </div>  
    );
  }
  export default ControlledCarousel
//   render(<ControlledCarousel />);
