import React from "react";
import { Grid, Row, Col,Thumbnail, Popover, ButtonToolbar,OverlayTrigger, Button} from "react-bootstrap";
import data from '../data';

import '../Styles/Homepage.css';
import '../Styles/General.css';

class Detail extends React.Component {
    buildContent(){
        let content = [];
        for(let i in this.props.data) {
            content.push(<li key={i}>{this.props.data[i]}</li>)
        }

        return (<Popover id ="popover"><ul>{content}</ul></Popover>);
    }
    render() {
        return (
            <ButtonToolbar>
                <OverlayTrigger trigger="click" placement="bottom" overlay={this.buildContent()}>
                    <button className="button">See more details</button>
                </OverlayTrigger>
            </ButtonToolbar>
        )
    }
}

class Item extends React.Component {
    render(){
        let _data = data.getServiceItem();
        return (
            <Thumbnail className="zoom" src={this.props.data.img} alt="242x200">
                <h3>{this.props.data.title}</h3>
                <p>{this.props.data.description}</p>
                <Detail data={_data[this.props.index]}/>
            </Thumbnail>
        )
    }
}


class WhatWeDo extends React.Component {
    buildContent() {
        let _data = data.getService();
        let content=[];
       
        for(let i in _data.data) {
            content.push(
                    <Col className="service-box" key={i} md={4}>
                        <Item index={i} data={_data.data[i]} />
                    </Col>
               )
        }
        
        return (<Grid>
                    <Row>{content}</Row>
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