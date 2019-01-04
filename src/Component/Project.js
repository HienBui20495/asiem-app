import React from "react";
import { Grid, Row, Col, Label } from "react-bootstrap";
import data from '../data';

import '../Styles/Homepage.css';
import '../Styles/General.css';

class ProjectItem extends React.Component {
    buildContent() {
        let content =[];

        for(let i in this.props.data.tag) {
            content.push(<Label className="mr-5" key ={i}>{this.props.data.tag[i]}</Label>)
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

        for(let i in _data.data) {
            
            content.push(
                <Col className="project-item" key={i} sm={6} md={3}>
                    <ProjectItem index={i} data={_data.data[i]}/>
                </Col>
               )
            if((i + 1) % 4== 0) {
                rowContent.push(<Row key={"row" + i}>{content}</Row>);
                content = [];
            }
        }
        if(content.length > 0) {
            rowContent.push(<Row key={"lastrow"}>{content}</Row>);
        }
        return (<Grid className="project-content">
                    {rowContent}
                </Grid>);
    }

    render() {
        let _data = data.getProject();
        return (
            <div className="project">
                <h1>OUR PROJECT</h1>
                <div className="project-title text-center">{_data.title}</div>
                <div className="pt-10 d-flex justify-content-center">
                    <a className="mr-10">ELECTRICAL</a>
                    <a className="mr-10">MECALNICAL</a>
                    <a className="mr-10">ARCHITECTURE</a>
               </div>
                {this.buildProject()}
            </div>
        )
    }
}

export default Project;