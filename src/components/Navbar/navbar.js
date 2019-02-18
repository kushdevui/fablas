/**
 *  Navbar Component
 */

// Dependencies
import React, { Component } from "react";
import { faShoppingCart,faArrowRight  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { connect } from 'react-redux';
import {addToDo} from '../../redux/actions/globalActions';
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
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
        this.getProductByCat = this.getProductByCat.bind(this);

        this.state={
            isOpen:false,
            subMenu: []
        };
    }
    

    componentDidMount(){
        this.props.onAddTodo();

        const headers = {
            'Content-Type': 'application/json'
        }
        axios.post('https://fablasnode.herokuapp.com/products/getSubcategory',
        {
            "cat_name": "Home Care"
        },
        {"headers": headers}
        ).then(res=>{
            this.setState({
                subMenu:res.data
            })
        })

    }

    toggle(event){
        event.preventDefault(); 
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    getProductByCat(event){
        const headers = {
            'Content-Type': 'application/json'
        }
        axios.post('https://fablasnode.herokuapp.com/products/getSubcategory',
        {
            "cat_name": event.target.dataset.id
        },
        {"headers": headers}
        ).then(res=>{
            this.setState({
                subMenu:res.data
            })
        })
    }

    render(){
        const CagegoryList = this.props.productList.map(item=>{
            return(
                <li data-id={item.categoryName} class="flyout-alt" onClick={this.getProductByCat}>
                   {item.categoryName}
                    <span class="float-right pr-4">
                        <FontAwesomeIcon icon={faArrowRight } style={{color:'red'}} size="sm" />
                    </span>
                </li>
            )
        });
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
                            <a href="/About">About Us</a>
                            <ul className="flyout-content nav stacked">
                               <li><a>Director's Message</a></li>
                               <li><a>Our Values</a></li>
                               <li><a>Strengths</a></li>
                               <li><a>Our Network</a></li>
                            </ul>
                        </li>
                        <li><a href="/Services">Services</a></li>
                        <li className="flyout">
                            <a href="#" onClick={this.toggle}>Products</a>
                            {this.state.isOpen ?   <div className="products-dropdown">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <ul>
                                           {CagegoryList}
                                        </ul>
                                    </div>
                                    <div className="col-lg-8 sub-cat">
                                        {this.state.subMenu.map(item=>
                                        {
                                           return( <div className="row mt-3">
                                                <div className="col-lg-12">
                                               <Link to={`/Products:${item.id}`} >{item.name}</Link>
                                                    <ul>
                                                        {item.productsList.map(productItem=>{
                                                            return(
                                                                <li>{productItem.name}</li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>)
                                        })}
                                        </div>
                                    </div>
                                </div>
                            : ""}
                        </li>
                        <li><a>Shop</a></li>
                        <li><a>News</a></li>
                        <li><a href="/Career">Career</a></li>
                        <li><a href="/Contact">Contact Us</a></li>
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