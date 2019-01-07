import React from "react";
import { Grid, Row, Col} from "react-bootstrap";

import '../Styles/Homepage.css';
import '../Styles/General.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import data from '../data';

class About extends React.Component {
    buildWelcome(){
        let content =[];
        content.push(
            <div key="welcome1" className="about d-flex justify-content-center mb-100">
                <h1 className="welcome mb-30">WELCOME TO ASIEM!</h1>
                <div className ="text-box mb-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in libero dui. Curabitur ut felis venenatis, lobortis ligula eget, venenatis purus. Donec lectus orci, laoreet quis semper porta, vulputate vitae odio. Fusce accumsan lectus a dolor volutpat.
                </div>
                <Grid>
                    <Row>
                        <Col sm={6} md={3}>
                            <div>
                                <img className="about-icon" src="images/Professional Design.png"/>
                                <h5>Professional Design</h5>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div>
                                <img className="about-icon" src="images/Technical Supervision.png"/>
                                <h5>Technical Supervision</h5>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div>
                                <img className="about-icon mb-24" src="images/Inspection And Maintenance.png"/>
                                <h5 className="mt-10">Inspection And Maintenance</h5>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div>
                                <img className="about-icon" src="images/Create Specification of Parts.png"/>
                                <h5>Create Specification of Parts</h5>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )

        return content;
    }

    buildAbout() {
        let _data = data.getInfomation();
        let content=[];
        content.push(
            <div key={1}>
                <Grid className="about-blog">
                    <Row>
                        <Col sm={6} md={6}>
                            <div>
                            <img className ="about-img" src ={_data.image}></img>
                            </div>
                        </Col>
                        <Col sm={6} md={6} className="text-left">
                            <div className="mb-10">
                                <FontAwesomeIcon className="fz-30" icon={faQuoteLeft}></FontAwesomeIcon>
                            </div>
                            <div className="mb-10">
                                <span>{_data.content}</span>
                            </div>
                            <div className="quote mb-10">
                                <FontAwesomeIcon className="fz-30" icon={faQuoteRight}></FontAwesomeIcon>
                            </div>
                            <div className="mb-10">
                                <h2>{_data.author}</h2>
                                <h4>{_data.title}</h4>
                            </div>
                            <button className="button">See profile</button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )

        return content;
    }
    render() {
        return (
            <div id="about">
                {this.buildWelcome()}
                {this.buildAbout()}
            </div>
        )
    }
}

export default About;