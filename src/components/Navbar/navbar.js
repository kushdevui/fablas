/**
 *  Navbar Component
 */

// Dependencies
import React, { Component } from "react";
import { faShoppingCart  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { connect } from 'react-redux';
import {addToDo} from '../../redux/actions/globalActions';
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { Button } from 'react-bootstrap';

library.add(fab)


import PropTypes from "prop-types";
import axios from "axios";


import { 
    Collapse,
    NavbarBrand,
    Navbar,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavLink,
    Dropdown,
    
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
        this.props.onAddTodo();
       
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen,
            isActive: !this.state.isActive
        });
    }

    render(){
        //console.log(this.props.productList);
        const CagegoryList = this.props.productList.map(item=>{
            return(
                <li class="flyout-alt">
                    <a>{item.categoryName}</a>
                    <ul class="flyout-content nav stacked">
                        {item.subCategory.map(subcat=>{
                            return(
                                <li class="flyout-alt">
                                    <a>{subcat.name}</a>
                                    <ul class="flyout-content nav stacked">
                                        {subcat.productsList.map(productItem=>{
                                               return( <li>
                                                    <a>{productItem.name}</a>
                                               </li> ) 
                                        })}
                                    </ul>
                                </li>
                            )        
                        })}
                    </ul>
                </li>
            )
        });
        //console.log(CagegoryList);
        return(
            <div className="row">
                <div className="col-2">
                    <NavbarBrand href="/">
                            <Logo/>
                    </NavbarBrand>
                </div>
           
                 <div className="navbar-section col-7">
                    <ul class="nav  site-nav">
                        <li><a href="/">Home</a></li>
                        <li className="flyout">
                            <a href="#/About">About Us</a>
                            <ul className="flyout-content nav stacked">
                               <li><a>Director's Message</a></li>
                               <li><a>Our Values</a></li>
                               <li><a>Strengths</a></li>
                               <li><a>Our Network</a></li>
                            </ul>
                        </li>
                        <li><a href="#/Services">Services</a></li>
                        <li className="flyout">
                            <a>Products</a>
                            <div className="products-dropdown">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <ul>
                                            <li>Home Care</li>
                                            <li>Personal Care</li>
                                            <li>Industrial care</li>
                                            <li>B2B & Bulk</li>
                                            <li>Baby care</li>
                                            <li>Professional Care</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-8 sub-cat">
                                        <div className="row mt-3">
                                            <p>Sub Cat</p>
                                            <ul>
                                                <li>Product1</li>
                                                <li>Product1</li>
                                                <li>Product1</li>
                                                <li>Product1</li>
                                                <li>Product1</li>
                                                <li>Product1</li>
                                                <li>Product1</li>
                                                <li>Product1</li>
                                                <li>Product1</li>
                                            </ul>
                                        </div>
                                        <div className="row mt-3">
                                            <p>Sub Cat</p>
                                            <ul>
                                                <li>Product1</li>
                                                <li>Product1</li>
                                                <li>Product1</li>
                                                <li>Product1</li>
                                                <li>Product1</li>
                                                <li>Product1</li>
                                                <li>Product1</li>
                                                <li>Product1</li>
                                                <li>Product1</li>
                                            </ul>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            {/* <ul class="flyout-content nav stacked">
                               {CagegoryList}
                            </ul> */}
                        </li>
                        <li><a>Shop</a></li>
                        <li><a>News</a></li>
                        <li><a href="#/Career">Career</a></li>
                        <li><a href="#/Contact">Contact Us</a></li>
                    </ul>​
                </div>
                <div className="col-3 pt-3 icon-palat">
                    <span><FontAwesomeIcon icon={faShoppingCart } style={{color:'red'}} size="sm" /></span>
                    <span className="navbar-search">
                        <input type="text" name="search-box" value="search"/>
                    </span>
                    <span><FontAwesomeIcon icon={['fab', 'facebook-f']}  style={{ color: 'red' }} size="sm"/></span>
                    <span><FontAwesomeIcon icon={['fab', 'google']}  style={{ color: 'red' }} size="sm"/></span>
                    <span><FontAwesomeIcon icon={['fab', 'twitter']}  style={{ color: 'red' }} size="sm"/></span>
                    <span><FontAwesomeIcon icon={['fab', 'instagram']}   style={{ color: 'red' }} size="sm"/></span>
                    <span><FontAwesomeIcon icon={['fab', 'linkedin-in']}   style={{ color: 'red' }} size="sm"/></span>

                </div>
            </div>
        );
    }
}

// React prototype rules
NavigationBar.propTypes = {
    template:PropTypes.string,
    navbarTemplate:PropTypes.string
};

const mapDispatchToProps = dispatch => {
    return {
      onAddTodo: () => {
        dispatch(addToDo());
      }
    };
};   

const mapStateToProps = state =>{
    return {
        productList : state.productReducer.productList
    }
}

//exporting the module
export default connect(mapStateToProps,mapDispatchToProps)(NavigationBar);