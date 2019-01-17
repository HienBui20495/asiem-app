import React from "react";
import { Grid, Row, Col, Label } from "react-bootstrap";
import data from '../data';

import {Carousel} from 'react-bootstrap'; 

import '../Styles/Homepage.css';
import '../Styles/General.css';

class ProjectItem extends React.Component {
    buildContent() {
        let content =[];

        for(let i in this.props.data.tag) {
            content.push(<Label className="mr-5 mt-20" key ={i}>{this.props.data.tag[i]}</Label>)
        }
        return (
            <div className="overlay">
            <img className="project_image" src={this.props.data.image} alt ="project_image"/>
            <div className ="middle">
                <div>
                    <h4>{this.props.data.name}</h4>
                    <span className="mb-10">{this.props.data.description}</span>
                    <div>{content}</div>
                </div>
            </div>
            </div>
        )
    }
    render() {
        return this.buildContent();
    }
}

class Project extends React.Component {
    buildProject() {
        let _data = data.getProject();
        let content =[];
        let rowContent = [];

        let carouselContainer = [];

        for(let i in _data.data) {
            content.push(
                <Col className="project-item" key={i} sm={6} md={3}>
                    <ProjectItem index={i} data={_data.data[i]}/>
                </Col>
               )

            if((parseInt(i) + 1) % 4== 0) {
                rowContent.push(<Row key={"row" + i}>{content}</Row>);
                content = [];
            }
        }

        if(content.length > 0) {
            rowContent.push(<Row key={"lastrow"}>{content}</Row>);
        }

        if(rowContent.length <= 2) {
            return (<Grid className="project-content">
                        {rowContent}
                    </Grid>);
        }
        let count = 0;
        for(let i in rowContent) {
            if((parseInt(i) + 1) % 2 == 0) {
                count += 2;
                carouselContainer.push(
                    <Carousel.Item key={i}>
                        <Grid className="project-content">
                            {rowContent[i-1]}
                            {rowContent[i]}
                        </Grid>
                    </Carousel.Item>
                )
            }
        }

        if(rowContent.length > count) {
            carouselContainer.push(
                <Carousel.Item key={"lastrow"}>
                    <Grid fluid className="project-content">
                        {rowContent[count]}
                    </Grid>
                </Carousel.Item>
            )
        }

        return  <Carousel key="1">{carouselContainer}</Carousel>
        
        
    }

    render() {
        let _data = data.getProject();
        return (
            <div className="project" id="experience">
                <h2>OUR PROJECT</h2>
                <div className="fz-17 mb-50 project-title text-center">{_data.title}</div>
                {this.buildProject()}
                <div class="parallax_2"></div>
            </div>
        )
    }
}

export default Project;