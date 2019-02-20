import React,{Component} from "react";
import Header from "../../components/Header/header";
import InnerHeader from "../InnerHeader/innerHeader";
import { faShoppingCart,faArrowCircleUp,faTimes, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Tabs, Tab} from 'react-bootstrap-tabs';
import ProductItem from "../../container/ProductItem/productItem";

import "./product-details.scss";
import Footer from "../../components/Footer/footer";

class Product extends Component{
    render(){
        return(
            <div>
                <Header/>
                <InnerHeader title="Product" subTitle="Product Details"/>
                <div className="container mt-5 mb-5 product-details">
                    <div className="row mt-5">
                        <div className="col-lg-5">
                            <img src="/assets/images/ProductDetails.png" className="img-fluid"/>
                        </div>
                        <div className="col-lg-7">
                            <h3>SCRUB N BRIGHT</h3>
                            <span>&#8377;109</span>
                            <p className="pt-2 pb-4">Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam libero nisl, ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio. Turpis venenatis at laoreet. Etiam commodo fusce in diam feugiat, nullam suscipit tortor per velit viverra minim sed metus egestas sapien consectetuer.</p>
                            <div className="other-details">
                                <span>Other Details :</span>
                                <ul className="mt-2">
                                    <li>Category : Homecare</li>
                                    <li>Code : #21457</li>
                                    <li>Availabiltity : In Stock</li>
                                </ul>
                            </div>
                            <div className="product-controls d-flex">
                                <div>
                                    <FontAwesomeIcon className="mr-1" onClick={()=>{this.handleAddQuantity(item)}} icon={faArrowCircleUp } style={{color:'#999'}} size="sm" />
                                        1
                                    <FontAwesomeIcon className="ml-1" onClick={()=>{this.handleSubtractQuantity(item)}}  icon={faArrowCircleDown } style={{color:'#999'}} size="sm" />
                                </div>
                                <div
                                    //className={!this.state.isAdded ? "" : "added"}
                                    className="btnaddtoCart ml-3"
                                        type="button"
                                    >
                                    <FontAwesomeIcon className="mr-1" icon={faShoppingCart } style={{color:'white'}} size="sm" />
                                    Add To Cart
                                    </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12 mt-5">
                        <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
                            <Tab label="Description"><p>Lorem ipsum dolor sit amet, mauris suspendisse viverra eleifend tortor tellus suscipit, tortor aliquet at nulla mus, dignissim neque, nulla neque. Ultrices proin mi urna nibh ut, aenean sollicitudin etiam libero nisl, ultrices ridiculus in magna purus consequuntur, ipsum donec orci ad vitae pede, id odio. Turpis venenatis at laoreet. Etiam commodo fusce in diam feugiat, nullam suscipit tortor per velit viverra minim sed metus egestas sapien consectetuer, ac etiam bibendum cras posuere pede placerat, velit neque felis. Turpis ut mollis, elit et vestibulum mattis integer aenean nulla, in vitae id augue vitae.</p></Tab>
                            <Tab label="Details">Tab 2 content</Tab>
                            <Tab label="Reviews">Tab 3 content</Tab>
                        </Tabs>
                        </div>
                    </div>
                </div>
                <div className="container related-products mb-5">
                    <div className="row mb-5 text-center">
                        <div className="col-lg-12">
                            <h3>Related Products</h3>
                            <sub>Check out Now</sub>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <ProductItem/>
                        </div>
                        <div className="col-lg-3">
                            <ProductItem/>
                        </div>
                        <div className="col-lg-3">
                            <ProductItem/>
                        </div>
                        <div className="col-lg-3">
                            <ProductItem/>
                        </div>
                    </div>

                </div>
                <Footer/>
            </div>
        )
    }
}

export default Product;