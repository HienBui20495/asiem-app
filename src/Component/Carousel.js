import React from "react";
import {Carousel} from 'react-bootstrap'; 



class MyCarousel extends React.Component {
       buildCarousel(){
        let content=[];
        content.push(
            <Carousel key="1">
                <Carousel.Item>
                    <img className="carousel-image" alt="1366x768" src="/images/Carousel_pic1.gif" />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-image" alt="1366x768" src="/images/Carousel_pic2.gif" />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="carousel-image" alt="1366x768" src="/images/Carousel_pic3.gif" />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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