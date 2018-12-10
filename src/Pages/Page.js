import React from "react";

import Header from "../Component/Header";
import Content from "../Component/Content";
import Footer from "../Component/Footer";

class Page extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Content cls={this.props.cls} content = {this.props.content}></Content>
                <Footer></Footer>
            </div>
        )
    }
}

export default Page;