import React from "react";
import {Carousel} from 'react-bootstrap'; 



class MyCarousel extends React.Component {
       buildCarousel(){
        let content=[];
        content.push(
            <Carousel key="1" id="logo">
                <Carousel.Item className="typography">
                    <img className="carousel-image" alt="1366x768" src="/images/Carousel_pic1.gif" />
                    <Carousel.Caption>
                    <h3>Your best choose</h3>
                    <p className="section-text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="typography">
                    <img className="carousel-image" alt="1366x768" src="/images/Carousel_pic2.gif" />
                    <Carousel.Caption>
                    <h3>We are hiring</h3>
                    <p  className="section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="typography">
                    <img className="carousel-image" alt="1366x768" src="/images/Carousel_pic3.gif" />
                    <Carousel.Caption>
                    <h3>Provide the best services</h3>
                    <p  className="section-text">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );

        return content;
    }
    render() {
        return(
            <div>
               {this.buildCarousel()}
            </div>
        )
    }
}

export default MyCarousel;