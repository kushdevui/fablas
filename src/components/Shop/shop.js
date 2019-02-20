import React,{Component} from "react";


import Header from "../Header/header";
import InnerHeader from "../../container/InnerHeader/innerHeader";
import ProductCard from "./ProductCard/productCard";
import Footer from "../Footer/footer";
import "./shop.scss";
import { Link } from 'react-router-dom'

class Shop extends Component{
    constructor(props){
        super();
       // this.redirectToProduct = this.redirectToProduct.bind(this);
    }

    // redirectToProduct(){
    //    this.props.history.push({
    //        pathname: "/ProductList/Products/" ,
    //        search:"HK"
    //    })
    // }

    render(){
        return(
            <div>
                <Header/>
                <InnerHeader title="Category" subTitle="Shop" />
                <div className="row">
                    <div className="col-lg-8 product-offers text-center">
                        <div className="sale">
                            <div className="heading">SALE</div>
                            <div className="offer">
                                <span className="d-inline-block discount">50%</span>
                                <span className="off d-inline-block pl-2">OFF</span>
                                {/* <span className="d-block shop">Shop Now</span> */}
                            </div>
                        </div>
                        <Link className="btn btn-danger mt-2" to={`/ProductList/${'Home Care'}/${"KC"}`} params={{ testvalue: "hello" }}>Shop Now</Link>
                        <button className="btn btn-default ml-2 mt-2">From $15</button>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-offers2">
                            <h1>Kitchen Care</h1>
                            <h1>50% OFF</h1>
                            <button className="btn btn-danger">Shop Now</button>
                        </div>
                        <div className="product-offers3 text-center">
                            <span>Fast Same day Delivery</span>
                            <h1>MAKE CUSTOM PACKAGE</h1>
                            <button className="btn btn-danger">Shop Now</button>
                        </div>
                    </div>
                    <div className="col-lg-5 ">
                        <div className="pt-5 pb-4 mt-4 other-grey">
                            <h1>Splash of Summer <span className="d-block">50%</span></h1>
                            <button className="btn btn-danger ml-4">Shop Now</button>
                        </div>
                    </div>
                    <div className="col-lg-7 ">
                        <div className="pt-5 pb-4 mt-4 darker-grey">
                            <h1>NEW ARRIVALS <span className="d-block">30% OFF</span></h1>
                            <button className="btn btn-danger ml-4">Shop Now</button>
                        </div>
                        
                    </div>
                </div>
                <section>
                    <div className="row mb-5">
                        <div className="col-lg-12 mt-5 mb-5 text-center best-selling-products">
                            <h1>Best Selling PRODUCTS</h1>
                            <ul>
                                <li>PROFESSIONAL</li>
                                <li>PERSONAL CARE</li>
                                <li>HOMECARE</li>
                                <li>INDUSTRIAL CARE</li>
                            </ul>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 mb-4">
                                    <ProductCard/>
                                </div>
                                <div className="col-lg-3 mb-4">
                                    <ProductCard/>
                                </div>
                                <div className="col-lg-3 mb-4">
                                    <ProductCard/>
                                </div>
                                <div className="col-lg-3 mb-4">
                                    <ProductCard/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 mb-4">
                                    <ProductCard/>
                                </div>
                                <div className="col-lg-3 mb-4">
                                    <ProductCard/>
                                </div>
                                <div className="col-lg-3 mb-4">
                                    <ProductCard/>
                                </div>
                                <div className="col-lg-3 mb-4">
                                    <ProductCard/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}
export default Shop;