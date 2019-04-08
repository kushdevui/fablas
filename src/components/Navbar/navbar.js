/**
 *  Navbar Component
 */

// Dependencies
import React, { Component } from "react";
import { faShoppingCart,faArrowRight,faSearch  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { connect } from 'react-redux';
import {addToDo} from '../../redux/actions/globalActions';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';


library.add(fab)
import PropTypes from "prop-types";
import axios from "axios";


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


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
                <div className="col-lg-9 navbar-section">
                <Navbar  light expand="md">
                    <NavbarBrand href="#/"><Logo/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/About">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/Services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={`/Products/`}>Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/shop">Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/News">News</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/Career">Career</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/Contact">Contact Us</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
                </Navbar>
                </div>
                <div className="col-lg-3 pt-3 text-center icon-palat">
                    <span><FontAwesomeIcon icon={faShoppingCart } style={{color:'red'}} size="sm" /></span>
                    <span className="navbar-search">
                        <input type="text" name="search-box" value=""/>
                        <FontAwesomeIcon className="search-icon" icon={faSearch}  style={{ color: 'white' }} size="sm"/>
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