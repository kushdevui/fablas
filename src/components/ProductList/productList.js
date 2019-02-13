import React,{Component} from 'react';

import Header from "../Header/header";
import InnerHeader from "../../container/InnerHeader/innerHeader";
import SubCatCard from "./SubCatCard/subCatCard";
import Footer from "../Footer/footer";
import { connect } from 'react-redux';
import {addToDo} from '../../redux/actions/globalActions';
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

    componentDidMount(){
        this.props.onAddToDo();
    }

    toggleAnimation(event){
        event.target.classList.toggle('expand');
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
                        <ul className="col-lg-9">
                            {this.props.productList.map((item)=>{
                                 return(<li  className="category-item pb-3" onClick={this.toggleAnimation}>
                                    {item.categoryName}
                                    <span className="float-right" > 
                                        <FontAwesomeIcon icon={faArrowDown } style={{color:'black'}} size="sm" />
                                    </span>
                                    <ul className="submenu pl-1">
                                        {item.subCategory.map(subcat=>{
                                            return(<li class="second-menu-item pt-2">
                                                - {subcat.name}
                                            </li>)
                                        })}
                                    </ul>
                                 </li>)
                            })}
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

const mapDispatchToProps = dispatch =>{
    return{
        onAddToDo:()=>{
            dispatch(addToDo());
        }
    }
}

const mapStateToProps = state =>{
    return {
        productList : state.productReducer.productList
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsList);