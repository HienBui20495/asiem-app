import React from "react";
import { Grid, Row, Col,Thumbnail, Button} from "react-bootstrap";
import data from '../data';

import '../Styles/Homepage.css';
import '../Styles/General.css';

class Item extends React.Component {
    render(){
        return (
            <Thumbnail src={this.props.data.img} alt="242x200">
                <h3>{this.props.data.title}</h3>
                <p>{this.props.data.description}</p>
            </Thumbnail>
        )
    }
}


class WhatWeDo extends React.Component {
    buildContent() {
        let _data = data.getElectrical();
        let content=[];
       
        for(let i in _data.data) {
            content.push(
                    <Col className="service-box" key={i} md={4}>
                        <Item data={_data.data[i]} />
                    </Col>
               )
        }
        
        return (<Grid>
                    <Row className="d-flex justify-content-between">{content}</Row>
                </Grid>);
    }
    render() {
        return (
            <div className="service">
                <div>
                    <h1>What we do</h1>
                    <span></span>
                </div>
                <div>
                     {this.buildContent()}
                </div>
              </div>
        )
    }
}

export default WhatWeDo;