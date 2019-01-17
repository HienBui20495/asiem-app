import React from "react";
import { Grid, Row, Col,Thumbnail, Popover, ButtonToolbar,OverlayTrigger} from "react-bootstrap";
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
            <Thumbnail src={this.props.data.img} alt="242x200">
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
        
        return (<Grid fluid>
                    <Row>{content}</Row>
                </Grid>);
    }
    render() {
        return (
            <div>
                <div className="service" id="service">
                    <div><h2>WHAT WE DO</h2></div>
                    <div>
                        {this.buildContent()}
                    </div>
                </div>
                <div className="parallax_1">
                    <div className="fz-18 text-center parallax-text typography h5"><strong>
                        "Donec eleifend pharetra sapien, eu laoreet dui ullamcorper sed. Praesent tempor lectus id orci dapibus, non consectetur nunc venenatis. Maecenas ut ornare nunc, et lobortis felis. Integer a fermentum elit."
                        Morbi eget elit nec velit lacinia dictum. Integer cursus purus in dui molestie eleifend. Sed mollis luctus placerat. Donec at est dapibus est hendrerit aliquet quis eu elit.</strong></div>                    
                    <h3>AKIRA HONDA</h3>
                    <p className="fz-18">-Managment Director-</p>
                </div>
            </div>

        )
    }
}

export default WhatWeDo;