import React,{Component} from 'react';

import Header from "../Header/header";
import InnerHeader from "../../container/InnerHeader/innerHeader";
import ProductItem from "../../container/ProductItem/productItem";
import axios from "Axios";
import Footer from "../Footer/footer";
import { connect } from 'react-redux';
import {addToDo} from '../../redux/actions/globalActions';
import { faShoppingCart,faArrowRight, faArrowDown  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sell-product-list.scss"

class SellProductList extends Component{
    constructor(props){
        super(props);
       
        this.state = {
            isFilterOpen:false,
            productListByCat :[],
            term: "",
            cart: [],
            cartBounce: false,
            quantity: 1
        }
        this.toggleAnimation = this.toggleAnimation.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.checkProduct = this.checkProduct.bind(this);
        this.sumTotalItems = this.sumTotalItems.bind(this);
        this.sumTotalAmount = this.sumTotalAmount.bind(this);
    }

    componentDidMount(){

        this.props.onAddToDo();
        const headers = {
            'Content-Type': 'application/json'
        }
       axios.post("https://fablasnode.herokuapp.com/products/getProductBySubcategory",{
        "id":this.props.match.params.product_id
       }, {"headers": headers}).then(list=>{
           this.setState({
                productListByCat : list.data
           })
       })
    }

    toggleAnimation(event){
        event.target.classList.toggle('expand');
        this.setState({
            isFilterOpen : !this.state.isFilterOpen
        })
    }

    handleAddToCart(selectedProducts) {
        let cartItem = this.state.cart;
        let productID = selectedProducts.id;
        let productQty = selectedProducts.quantity;
        if (this.checkProduct(productID)) {
          let index = cartItem.findIndex(x => x.id == productID);
          cartItem[index].quantity =
            Number(cartItem[index].quantity) + Number(productQty);
          this.setState({
            cart: cartItem
          });
        } else {
          cartItem.push(selectedProducts);
        }
        this.setState({
          cart: cartItem,
          cartBounce: true
        });
        setTimeout(
          function() {
            this.setState({
              cartBounce: false,
              quantity: 1
            });
          }.bind(this),
          1000
        );
        this.sumTotalItems(this.state.cart);
        this.sumTotalAmount(this.state.cart);
    }

    sumTotalItems() {
        let total = 0;
        let cart = this.state.cart;
        total = cart.length;
        this.setState({
          totalItems: total
        });
    }

    sumTotalAmount() {
        let total = 0;
        let cart = this.state.cart;
        for (var i = 0; i < cart.length; i++) {
          total += cart[i].price * parseInt(cart[i].quantity);
        }
        this.setState({
          totalAmount: total
        });
      }
    
    checkProduct(productID) {
        let cart = this.state.cart;
        return cart.some(function(item) {
            return item.id === productID;
        });
    }  

    render(){
        console.log(this.state.cart);
        let term = this.state.term;
        let x;
        function searchingFor(term) {
            return function(x) {
              return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
            };
        }
        const productsData = this.state.productListByCat.map(product => {
            return (
                 <div className="col-lg-4">
                     <ProductItem
                     key={product.id}
                     price={product.price}
                     name={product.name}
                     image={product.imagepath}
                     id={product.id}
                     addToCart={this.handleAddToCart}
                     />
                 </div>
               );
        });
        
        // Empty and Loading States
        // let view;
        //     if (productsData.length <= 0 && !term) {
        //         view = <div>loading Products</div>;
        //     } else if (productsData.length <= 0 && term) {
        //     view = <div>No Products found</div>;
        //     } else {
        //         view = (
                    
        //         );
        //     }
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




export default connect(mapStateToProps,mapDispatchToProps)(SellProductList);