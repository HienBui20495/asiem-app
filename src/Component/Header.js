import React from "react";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col } from 'react-bootstrap';
import '../Styles/Header.css';
import '../Styles/General.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    buidTopHeader() {
        let content =[];
        content.push(
           
            <div key="HeaderTop" className="header-top">
                <Grid>
                    <Row>
                        <Col lg={6} sm={6} xs={4}>
                        
                                <div className="pull-left">
                                        <span className="text-white">Language</span>
                                    
                                            <select className="language-select ml-5">
                                                <option value="0">Tiếng Việt</option>
                                                <option value="1">日本語</option>
                                                <option value="2">English</option>
                                              </select>
                                    
                                </div>
                        </Col>
                        <Col lg={6} sm={6} xs={8}  className="header-top-right no-padding">  
                            <a className="icon" href="#"> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +84 28 3526 8875</a>
                            <a className="icon" href="#"> <i className="fas">FAX: +84 28 3526 8876</i></a>
                            <a className="icon" href="#"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> hr-info@asiem.asia</a> 
                        </Col>
                    </Row>
                </Grid>
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