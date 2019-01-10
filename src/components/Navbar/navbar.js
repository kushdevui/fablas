/**
 *  Navbar Component
 */

// Dependencies
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import axios from "axios";

import { 
    Collapse,
    NavbarBrand,
    Navbar,
    Nav,
    NavItem,
    NavLink
    } from "reactstrap";
    
import Logo  from "../Logo/logo" ;

// Styles & Images
import "./navbar.scss";



class  NavigationBar extends Component {

    constructor(props){
        super(props);
        this.props = props;
        this.toggle = this.toggle.bind(this);

        this.state={
            isOpen:false,
            isActive:false
        };
    }

    componentDidMount(){
       axios.get("http://localhost:8080/bone/api/products").then(
           res=>{
               console.log(res);
           }
       )
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen,
            isActive: !this.state.isActive
        });
    }

    render(){
        return(
            <div className="navbar-section">
                <Navbar className="p-0"  dark expand="md">
                <NavbarBrand href="/">
                    <Logo/>
                </NavbarBrand>
                <Collapse className={this.state.isOpen ? "show-collapse" : ""} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">About us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/signup">Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Products</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Shop</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">News</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Careers</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Contact us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            </div>
        );
    }
}

// React prototype rules
NavigationBar.propTypes = {
    template:PropTypes.string,
    navbarTemplate:PropTypes.string
};

//exporting the module
export default NavigationBar;