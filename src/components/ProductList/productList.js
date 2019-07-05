import React,{Component} from 'react';

import Header from "../Header/header";
import InnerHeader from "../../container/InnerHeader/innerHeader";
import SubCatCard from "./SubCatCard/subCatCard";
import ProductItem from "../../container/ProductItem/productItem";
import Footer from "../Footer/footer";
import axios from "Axios";
import { connect } from 'react-redux';
import {addToDo} from '../../redux/actions/globalActions';
import { faShoppingCart,faArrowRight, faArrowDown, faLessThanEqual  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import "./product-list.scss"

class ProductsList extends Component{
    constructor(props){
        super(props);
        this.state = {
            isFilterOpen:false,
            productListByCat :[],
            productCategory:""
        }
        this.toggleAnimation = this.toggleAnimation.bind(this);
    }


    componentWillReceiveProps(nextProps){
       var nextParams = this.props.selectedProductSubCategory.subCategory
       const headers = {
        'Content-Type': 'application/json'
        }
        axios.post("https://fablasnode.herokuapp.com/products/getProductBySubcategory",{
            "id":nextParams
        }, {"headers": headers}).then(list=>{
            this.setState({
                 productListBySubCat : list.data[0].productsList,
                 productCategory:list.data[1].split(" ").join("_")
            })
        })
    }
   

    componentWillMount(){
        this.props.onAddToDo();
        const headers = {
            'Content-Type': 'application/json'
        }
       axios.post("https://fablasnode.herokuapp.com/products/getProductBySubcategory",{
        "id":this.props.selectedProductSubCategory.subCategory
       }, {"headers": headers}).then(list=>{
         //  console.log(list);
           this.setState({
                productListBySubCat : list.data[0].productsList,
                productCategory:list.data[1].split(" ").join("_")
           })
       })
    }



    toggleAnimation(event){
        event.target.classList.toggle('expand');
        this.setState({
            isFilterOpen : !this.state.isFilterOpen
        })
    }


    render(){
        //console.log(this.state.productListBySubCat);
        //console.log(this.state.productCategory);
        if( this.state.productListBySubCat){
            var productsData = this.state.productListBySubCat.map(product => {
                return (
                     <div className="col-lg-4 ">
                            <ProductItem type="show"
                                key={product.id}
                                price={product.price}
                                name={product.productName}
                                image={product.images}
                                id={product.id}
                                subCat={this.props.selectedProductSubCategory.subCategory}
                                subCatName={this.props.selectedProductSubCategory.subCategoryName}
                                categoryName = {this.state.productCategory}
                                images={product.images}
                            />
                         
                     </div>
                   );
            });
        }
       
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
                                                <Link  to={`/Products/${subcat.id}`} >- {subcat.name}</Link> 
                                            </li>)
                                        })}
                                    </ul>
                                 </li>)
                            })}
                        </ul>
                    </div>
                    <div className="col-lg-9 product-list">
                        <div className="row">
                            {productsData}
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
        onAddToDo:()=>{dispatch(addToDo())},
    }
}

const mapStateToProps = state =>{
    return {
        selectedProductSubCategory : state.getProductReducer.selectedProductSubCategory,
        productList : state.productReducer.productList
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsList);