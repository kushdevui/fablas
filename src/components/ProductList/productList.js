import React,{Component} from 'react';

import Header from "../Header/header";
import InnerHeader from "../../container/InnerHeader/innerHeader";
import SubCatCard from "./SubCatCard/subCatCard";
import Footer from "../Footer/footer";
import { faShoppingCart,faArrowRight, faArrowDown  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./product-list.scss"

class ProductsList extends Component{
    constructor(props){
        super(props);
        this.state = {
            isFilterOpen:false
        }
        this.toggleAnimation = this.toggleAnimation.bind(this);
    }

    toggleAnimation(event){
        this.setState({
            isFilterOpen : !this.state.isFilterOpen
        })
    }
    render(){
        return(
            <div>
                <Header/>
                <InnerHeader title="Product" subTitle="A wide variety of product showcase"/>
                <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-3 filters">
                        <h6 className="mb-4">CATEGORIES</h6>
                        <ul>
                            <li className="category-item" onClick={this.toggleAnimation}>
                                Home Care
                                <span className="pl-5" > 
                                <FontAwesomeIcon icon={faArrowDown } style={{color:'black'}} size="sm" />
                                </span>
                                <ul className= {this.state.isFilterOpen ? "submenu expand" :"submenu"} >
                                    <li class="second-menu-item pt-2 pb-2">
                                        <small>Subcategory</small>
                                    </li>
                                 </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-3">
                                <SubCatCard/>
                            </div>
                            <div className="col-lg-3">
                                <SubCatCard/>
                            </div>
                            <div className="col-lg-3">
                                <SubCatCard/>
                            </div>
                            <div className="col-lg-3">
                                <SubCatCard/>
                            </div>
                            <div className="col-lg-3">
                                <SubCatCard/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <Footer/>
               
            </div>
        )
    }
}

export default ProductsList;