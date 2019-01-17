import React from "react";
import { Grid, Row, Col,Thumbnail, Button, Label} from "react-bootstrap";

import '../Styles/Homepage.css';
import '../Styles/General.css';

import data from '../data';


class NewsItem extends React.Component {
    buildContent() {
        let content =[];

        for(let i in this.props.data.tag) {
            content.push(<Label bsStyle="default" className="mr-5 mt-20" key ={i}>{this.props.data.tag[i]}</Label>)
        }
        return (
            <Thumbnail src={this.props.data.img} alt="242x200">
                <p className="text-left mt-20 ml-5">{this.props.data.date}</p>
                <h4 className="text-left mt-20 ml-5">{this.props.data.title}</h4>
                <div className="text-left mt-20 ml-5">{content}</div>
                <div className="text-left mt-20 ml-5"><p>{this.props.data.author}</p></div>
            </Thumbnail>
        )
    }
    render() {
        return this.buildContent();

    }
}

class News extends React.Component {
    buildNews() {
        let _data = data.getNews();
        let content =[];
        for(let i in _data.data) {
            content.push(
                    <Col className="news-box" key={i} xs={6} md={4}>
                        <NewsItem index={i} data={_data.data[i]} />
                    </Col>
               )
        }
        return (
            <Grid><Row> {content} </Row> </Grid>
        );
    }
    
    render() {
        return (
            <div className="news" id="news">
               <div><h2>LASTEST NEWS</h2></div>
               <p className="fz-17 mb-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
               {this.buildNews()}
            </div>
        )
    }
}

export default News;