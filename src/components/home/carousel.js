import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo1 from './img/fotis-fotopoulos-min.jpg';
import logo2 from './img/joan-gamell-min.jpg';
import logo3 from './img/lagos-techie-min.jpg';
export default class 
 extends Component {
    render() {
        return (
                <div className="ratio ratio-21x9 w-100 bg-dark">
                    <Carousel>
                        <Carousel.Item className="ratio ratio-21x9 w-100">
                            <img className="d-block h-auto " src={logo1} alt="First slide" />
                            <Carousel.Caption className="d-flex flex-column justify-content-center bg-opacity-50 bg-dark">
                                <div>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="ratio ratio-21x9 w-100">
                            <img className="d-block h-auto" src={logo2} alt="Second slide" />

                            <Carousel.Caption className="d-flex flex-column justify-content-center bg-opacity-50 bg-dark">
                                <div>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="ratio ratio-21x9 w-100">
                            <img className="d-block h-auto" src={logo3} alt="Third slide" />

                            <Carousel.Caption className="d-flex flex-column justify-content-center bg-opacity-50 bg-dark">
                                <div>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div> 
        )
    }
}
