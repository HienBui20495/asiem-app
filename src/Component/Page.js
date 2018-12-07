import React from "react";

import Header from "../Header";
import Content from "../Content";
import Footer from "../Footer";

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