import React from "react";

import Page from "./Page";
import Carousel from '../Component/Carousel';
import About from "../Component/About"
import WhatWeDo from '../Component/WhatWeDo';
import Project from '../Component/Project';

import '../Styles/Homepage.css';


class HomePage extends React.Component {

    buildContent(){
        let content=[];
        content.push(<Carousel key='1' />)
        content.push(<About key='2'/>)
        content.push(<WhatWeDo key='3'/>)
        content.push(<Project key='4'/>)
        return content;
    }
    render() {
        return(
            <Page content = {this.buildContent()} />
        )
    }
}
export default HomePage;