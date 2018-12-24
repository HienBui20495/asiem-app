import React from "react";
import { Grid, Row, Col,Thumbnail, Button} from "react-bootstrap";
import data from '../data';

class Item extends React.Component {
    render(){
        return (
            <Thumbnail src={this.props.data.img} alt="242x200">
                <h3>{this.props.data.title}</h3>
                <p>{this.props.data.description}</p>
                <p>
                <Button bsStyle="primary">Button</Button>
                &nbsp;
                <Button bsStyle="default">Button</Button>
                </p>
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
                <Col key={i}>
                    <Item data={_data.data[i]} />
                </Col>
            )
        }
        
        return (<Grid><Row>{content}</Row></Grid>);
    }
    render() {
        return (
            <div>
                <div>
                    <h1>What we do</h1>
                    <span></span>
                </div>
                {this.buildContent()}
            </div>
        )
    }
}

export default WhatWeDo;