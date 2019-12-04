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
import {selectedProductCategory,selectedProductSubCategory} from '../../redux/actions/getProductAction';
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
    Dropdown ,
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

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.toggleRightNav = this.toggleRightNav.bind(this);
        this.toggleRightNavInner = this.toggleRightNavInner.bind(this);
        this.getProductByCat = this.getProductByCat.bind(this);
        this.searchOnWeb = this.searchOnWeb.bind(this);
        this.handleSelectedProductFlow = this.handleSelectedProductFlow.bind(this);
        this.state={
            isOpenInner:false,
            isOpen:false,
            isOpenNav:false,
            btnDropright:false,
            btnDropRightInner:false,
            subMenu: []
        };
        this.textInput = React.createRef();

    }
    
    handleSelectedProductFlow(subCat,subCatName){
        this.props.selectedProductSubCategory(subCat,subCatName)
    }

    componentDidMount(){

        this.props.onAddTodo();

        const headers = {
            'Content-Type': 'application/json'
        }
        axios.post('https://fablasnode.herokuapp.com/products/getSubcategory',
        {
            "cat_name": "Homecare"
        },
        {"headers": headers}
        ).then(res=>{
            this.setState({
                subMenu:res.data
            })
        })
    }

    toggleNavbar(event){
        event.preventDefault(); 
        this.setState({
            isOpenNav: !this.state.isOpenNav
        });
    }
    toggleRightNav(event){
        event.preventDefault();
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    toggleRightNavInner(event){
        event.preventDefault();
        this.textInput.current.focus();
       document.getElementById("Homecare").current.className.add('d-block');
        // this.setState({isOpenInner: !this.state.isOpenInner})

        this.setState({
            isActive: event.target.id == menu.id
        })
    }

    getProductByCat(event){
        this.props.selectedProductCategory(event.target.dataset.id)
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

    searchOnWeb(event){
        //console.log(event.target.value);
        if (event.key === 'Enter') {
            window.location = 'https://fablas.co.in/#/' + event.target.value;
            return false;
        }
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
            <React.Fragment>
                 <Navbar color="light" light expand="md" className="col-lg-12 d-none d-lg-flex">
                    <div className="col-lg-2">
                        <NavbarBrand ><Logo/></NavbarBrand>
                    </div>
                    <div className="col-lg-7 navbar-section">
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/About">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Services">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                    <NavLink onClick={this.toggleNavbar} href={`/Products/`}>Products</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/News">News</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Career">Career</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Contact">Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <div className="col-lg-3 pt-3 text-center icon-palat">
                        <span className="navbar-search">
                            <div>
                                <FontAwesomeIcon className="search-icon" icon={faSearch}  style={{ color: 'white' }} size="sm"/>
                                <input type="text" id="search" name="search" onKeyDown={this.searchOnWeb} title="Search this site" alt="Search Text" className="inputSearch" maxlength="256" />
                            </div>
                        </span>
                        <span><a target="_blank" href="https://www.facebook.com/fablasimpexpvtltd/"><FontAwesomeIcon icon={['fab', 'facebook-f']}  style={{ color: 'red' }} size="sm"/></a></span>
                        <span><FontAwesomeIcon icon={['fab', 'google']}  style={{ color: 'red' }} size="sm"/></span>
                        <span><a target="_blank" href="https://twitter.com/fablas6"><FontAwesomeIcon icon={['fab', 'twitter']}  style={{ color: 'red' }} size="sm"/></a></span>
                        <span><a target="_blank" href="https://www.instagram.com/fablasimpex/"><FontAwesomeIcon icon={['fab', 'instagram']}   style={{ color: 'red' }} size="sm"/></a></span>
                        <span><FontAwesomeIcon icon={['fab', 'linkedin-in']}   style={{ color: 'red' }} size="sm"/></span>
                    </div>  
                </Navbar>
                {this.state.isOpenNav ?   <div className="products-dropdown d-none d-lg-block">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <ul>
                                                {CagegoryList}
                                                </ul>
                                            </div>
                                            <div className="col-lg-8 sub-cat mt-1">
                                                {this.state.subMenu.map(item=>
                                                {
                                                    console.log("subitem",item)
                                                return( <div onClick={()=>this.handleSelectedProductFlow(item.id,item.name)}>
                                                    <Link  to={`/Products/${item.name}`} >{item.name}</Link>
                                                            {/* <ul>
                                                                {item.productsList.map(productItem=>{
                                                                    return(
                                                                        <li>{productItem.name}</li>
                                                                    )
                                                                })}
                                                            </ul> */}
                                                    </div>)
                                                })}
                                                </div>
                                            </div>
                                        </div>
                        : ""}

                        <Navbar color="light" light expand="md" className="col-lg-12 d-lg-none col-xs-12 navbar-section">
                            <NavbarBrand className="logo col-xs-10 font-weight-light d-block text-dark">
                                <Logo/>
                            </NavbarBrand>
                            <NavbarToggler className="col-xs-2" onClick={this.toggleNavbar} />
                            <Collapse isOpen={this.state.isOpenNav} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink href="">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/About">About Us</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#/Services">Services</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <Dropdown direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }} >
                                            <DropdownToggle caret>
                                                Products
                                            </DropdownToggle>
                                            <DropdownMenu>
                                            {
                                                this.props.productList.map(item=>{
                                                    console.log(this.state.btnDropRightInner,"aaaaa")
                                                        return(
                                                                <DropdownItem onClick={this.toggleRightNavInner}> 
                                                                {item.categoryName}
                                                                     <div id={item.categoryName} className="d-none" ref={this.textInput} >
                                                                     {
                                                                                item.subCategory.map(subCatItem=>{
                                                                                    return(
                                                                                        <DropdownItem>
                                                                                            {subCatItem.name}
                                                                                        </DropdownItem>
                                                                                    )
                                                                                })
                                                                            }
                                                                     </div>
                                                                </DropdownItem>
                                                                 
                                                           

                                                          
                                                            
                                                            // <li data-id={item.categoryName} class="flyout-alt" onClick={this.getProductByCat}>
                                                            // {item.categoryName}
                                                            //     <span class="float-right pr-4">
                                                            //         <FontAwesomeIcon icon={faArrowRight } style={{color:'red'}} size="sm" />
                                                            //     </span>
                                                            // </li>
                                                        )
                                                    })
                                            }     
                                            </DropdownMenu>
                                        </Dropdown>
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
                     
                        <div className="col-lg-3 pt-3 text-center icon-palat d-lg-none"> 
                        <span className="navbar-search">
                            <div>
                                <FontAwesomeIcon className="search-icon" icon={faSearch}  style={{ color: 'white' }} size="sm"/>
                                <input type="text" id="search" name="search" onKeyDown={this.searchOnWeb} title="Search this site" alt="Search Text" className="inputSearch" maxlength="256" />
                            </div>
                        </span>
                        <span><a target="_blank" href="https://www.facebook.com/fablasimpexpvtltd/"><FontAwesomeIcon icon={['fab', 'facebook-f']}  style={{ color: 'red' }} size="sm"/></a></span>
                        <span><FontAwesomeIcon icon={['fab', 'google']}  style={{ color: 'red' }} size="sm"/></span>
                        <span><a target="_blank" href="https://twitter.com/fablas6"><FontAwesomeIcon icon={['fab', 'twitter']}  style={{ color: 'red' }} size="sm"/></a></span>
                        <span><a target="_blank" href="https://www.instagram.com/fablasimpex/"><FontAwesomeIcon icon={['fab', 'instagram']}   style={{ color: 'red' }} size="sm"/></a></span>
                        <span><FontAwesomeIcon icon={['fab', 'linkedin-in']}   style={{ color: 'red' }} size="sm"/></span>
                    </div>  
            </React.Fragment>
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
      },
      selectedProductCategory : (category) =>{
          dispatch(selectedProductCategory(category));
      },
      selectedProductSubCategory : (subCat,subCatName) => {
          dispatch(selectedProductSubCategory(subCat,subCatName));
      }    
    };
};   

const mapStateToProps = state =>{
    return {
        productList : state.productReducer.productList,
    }
}

//exporting the module
export default connect(mapStateToProps,mapDispatchToProps)(NavigationBar);