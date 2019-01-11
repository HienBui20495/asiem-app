import React from "react";

import Page from "./Page";
import Carousel from '../Component/Carousel';
import About from "../Component/About"
import WhatWeDo from '../Component/WhatWeDo';
import Project from '../Component/Project';
import News from '../Component/News';

import '../Styles/Homepage.css';


class HomePage extends React.Component {

    buildContent(){
        let content=[];
        content.push(<Carousel key='1' />)
        content.push(<About key='2'/>)
        content.push(<WhatWeDo key='3'/>);
        //content.push(<div key="4" className="parallax_1"><Project key='4'/><News key='5'/></div>)
        content.push(<Project key='4'/>)
        content.push(<News key='5'/>)
        return content;
    }
    render() {
        return(
            <Page content = {this.buildContent()} />
        )
    }
}
export default HomePage;