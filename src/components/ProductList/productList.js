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
import SideNav from "./sideNav";
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
            productCategory:"",
            selectedProductSubCategory:""
        }
        this.toggleAnimation = this.toggleAnimation.bind(this);
    }


    componentWillReceiveProps(nextProps){
       var prevPropsSubCatId = this.props.selectedProductSubCategory.subCategory
       var nextPropsSubCatId = nextProps.selectedProductSubCategory.subCategory
       if(nextPropsSubCatId != prevPropsSubCatId){
           var passedCatId = nextPropsSubCatId
       }
       else{
        passedCatId = prevPropsSubCatId
       }
       console.log("passecId",passedCatId);
       const headers = {
        'Content-Type': 'application/json'
        }
        axios.post("https://fablasnode.herokuapp.com/products/getProductBySubcategory",{
            "id":passedCatId
        }, {"headers": headers}).then(list=>{
            this.setState({
                 productListBySubCat : list.data[0].productsList,
                 productCategory:list.data[1].split(" ").join("_")
            })
        })
    }
   

    componentDidMount(){
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
                     <div className="col-lg-4 text-center">
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
                            <p>{product.productName}</p>
                     </div>
                   );
            });
        }
       
        return(
            <div>
                <Header/>
                <InnerHeader title="Product" subTitle="A wide variety of product showcase" category={this.state.productCategory} subCategory={this.props.selectedProductSubCategory.subCategoryName}/>
                <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-3 filters">
                        <SideNav toggleAnimation={this.toggleAnimation} productList={this.props.productList}/>
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