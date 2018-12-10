import React from "react";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import '../Styles/Header.css';
import '../Styles/General.css';

class Header extends React.Component {
    buidTopHeader() {
        let content =[];
        content.push(
           
            <div key="HeaderTop" className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 col-4 header-top-left">
                                <div className="d-flex flex-row no-padding mt-0">
                                        <div className="p-2 bd-highlight"><p className="text-white">Language</p></div>
                                        <div className="p-2 bd-highlight">
                                            <select className="language-select">
                                                <option selected value="0">Tiếng Việt</option>
                                                <option value="1">日本語</option>
                                                <option value="2">English</option>
                                              </select>
                                        </div>
                                </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-8 header-top-right no-padding">  
                            <a href="#"> <i className="fas fa-phone"> +84 28 3526 8875</i></a>
                            <a href="#"> <i className="fas">FAX: +84 28 3526 8876</i></a>
                            <a href="#"> <i className="fas fa-envelope"> hr-info@asiem.asia</i></a> 
                        </div>
                    </div>
                </div>
            </div>
        
        )
        return content ;
    }
    render() {
        return (
            <div>
                {this.buidTopHeader()}
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#home">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                    Link
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                    Link
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
            </div>
        )
    }
}

export default Header;