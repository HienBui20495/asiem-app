import React from "react";
import { Grid, Row, Col, Label } from "react-bootstrap";
import data from '../data';

import '../Styles/Homepage.css';
import '../Styles/General.css';

class ProjectItem extends React.Component {
    buildContent() {
        let content =[];

        for(let i in this.props.data.tag) {
            content.push(<Label key ={i}>{this.props.data.tag[i]}</Label>)
        }
        return (
            <div className="zoom">
            <img className="project_image" src={this.props.data.image} alt ="project_image"/>
            <div>
                <h4>{this.props.data.name}</h4>
                <span>{this.props.data.description}</span>
                <div>{content}</div>
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
        console.log(_data)
        let content =[];

        for(let i in _data.data) {
            content.push(
                <Col className="project-item" key={i} sm={6} md={3}>
                    <ProjectItem index={i} data={_data.data[i]}/>
                </Col>
               )
        }
        return (<Grid>
                    <Row>{content}</Row>
                </Grid>);
    }

    render() {
        let _data = data.getProject();
        return (
            <div>
                <h1>OUR PROJECT</h1>
                <div>{_data.title}</div>
                {this.buildProject()}
            </div>
        )
    }
}

export default Project;