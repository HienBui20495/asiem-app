import React from "react";

import Page from "./Page";
import {Carousel} from 'react-bootstrap';

class HomePage extends React.Component {
    buildCarousel(){
        let content=[];
        content.push(
            <Carousel key="carousel">
                <Carousel.Item>
                    <img width={1366} height={700} alt="1366x768" src="/images/Carousel_pic1.gif" />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1366} height={700} alt="1366x768" src="/images/Carousel_pic2.gif" />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1366} height={700} alt="1366x768" src="/images/Carousel_pic3.gif" />
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
        let pageContent = [];
        pageContent.push(this.buildCarousel());
        return(
            <div>
                <Page content={pageContent}>
                </Page>
            </div>
        )
    }
}
export default HomePage;