import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import Header from "../Header/header";
import InnerHeader from "../../container/InnerHeader/innerHeader";
import ProductItem from "../../container/ProductItem/productItem";
import axios from "Axios";
import Footer from "../Footer/footer";
import { connect } from 'react-redux';
import {addToDo} from '../../redux/actions/globalActions';
import { faShoppingCart,faArrowRight, faArrowDown  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilterColors from "../../container/FilterColors/filterColors";
import Dropdown from 'react-dropdown';


import "./sell-product-list.scss"

class SellProductList extends Component{
    constructor(props){
        super(props);
        this.state = {
            isFilterOpen:false,
            productListByCat :[],
            term: "",
            cart: [],
        }
        //console.log(this.props.match.params.ProductSubCategory);
        this.toggleAnimation = this.toggleAnimation.bind(this);
        this.gotoCart = this.gotoCart.bind(this);
    }
    

    componentDidMount(){
    
    this.props.onAddToDo();
    const headers = {
        'Content-Type': 'application/json'
    }
    axios.post("https://fablasnode.herokuapp.com/products/getProductBySubcategory",{
    "id":"5c8b541c53cf7b1590e77c28"
    }, {"headers": headers}).then(list=>{
        //  console.log(list);
        this.setState({
            productListByCat : list.data[0].productsList,
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

    gotoCart(){
        this.props.history.push({
            pathname: '/Cart',
        })
    }

    render(){
        const options = [
            'Newest Arrivals', 'Price- Low to High', 'Price- High to Low'
        ]
        const defaultOption = options[0];

        // const productsData = this.state.productListByCat.map(product => {
        //     return (
        //          <div className="col-lg-4 ">
        //                 <ProductItem type="sell"
        //                 key={product.id}
        //                 price={product.price}
        //                 name={product.name}
        //                 image={product.imagepath}
        //                 id={product.id}
        //                 images={product.images}
        //                 />
        //          </div>
        //        );
        // });
        
        return(
            <div>
                <Header/>
                <InnerHeader  title="Product" subTitle="A wide variety of product showcase"/>
                <div className="container mt-5 mb-5">
                    <div className="row cart-tile">
                        <div className="col-lg-12 text-right">
                            <span onClick={this.gotoCart}><FontAwesomeIcon icon={faShoppingCart} style={{color:"#999"}} size="sm" /> Cart</span>
                            <span className="count">{this.props.cartLength}</span>
                        </div>
                    </div>
                </div>
                <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-3 filters">
                        <div className="row drop-down-filter">
                            <div className="col-lg-9 p-0 mb-5">
                                <Dropdown options={options} onChange={this._onSelect}  value={defaultOption} placeholder="Select an option" />
                                <FontAwesomeIcon icon={faArrowDown } style={{color:'#eee'}} size="sm" />
                            </div>
                        </div>
                        <div className="row">
                            <h6 className="mb-4 col-lg-9 ">FILTER BY <span>View All</span> </h6>
                            <ul className="col-lg-9 p-0">
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
                        <div className="filter-mode row border-bottom pb-3 price-filter">
                            <p className="col-lg-12 p-0">FILTER BY PRICE</p>
                            <input type="range" defaultValue={30} withBars className="w-100 col-lg-9" />
                            <div className="price-range">Price From &#8377; 50 - &#8377; 300</div>    
                        </div>
                        <div className="filter-mode row color-filter">
                            <p className="col-lg-12 p-0">COLOR</p>
                            <div className="row mt-2">
                                <div className="col-lg-1">
                                   <FilterColors/>
                                </div>
                                <div className="col-lg-1">
                                   <FilterColors/>
                                </div>
                                <div className="col-lg-1">
                                   <FilterColors/>
                                </div>
                                <div className="col-lg-1">
                                   <FilterColors/>
                                </div>
                                <div className="col-lg-1">
                                   <FilterColors/>
                                </div>
                                <div className="col-lg-1">
                                   <FilterColors/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            {
                                this.state.productListByCat.map((product)=>{
                                    return(
                                        <div className="col-lg-4 ">
                                            <ProductItem type="sell"
                                            key={product.id}
                                            price={product.price}
                                            name={product.productName}
                                            image={product.images}
                                            subCat={this.props.selectedProductSubCategory.subCategory}
                                            subCatName={this.props.selectedProductSubCategory.subCategoryName}
                                            categoryName = {this.state.productCategory}
                                            id={product.id}
                                            images={product.images}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

// const mapDispatchToProps = dispatch =>{
//     return{
//         onAddToDo:()=>{
//             dispatch(addToDo());
//         },
//         
//     }
// }

// const mapStateToProps = state =>{
//     return {
//         productList : state.productReducer.productList,
//         cartLength:state.cartReducer.addedItems.length,
//         items: state.items
//     }
// }

const mapDispatchToProps = dispatch =>{
    return{
        onAddToDo:()=>{dispatch(addToDo())},
        addToCart: (id)=>{
                        dispatch(addToCart(id))
        }
    }
}

const mapStateToProps = state =>{
    return {
        cartLength:state.cartReducer.addedItems.length,
        selectedProductSubCategory : state.getProductReducer.selectedProductSubCategory,
        productList : state.productReducer.productList
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SellProductList);