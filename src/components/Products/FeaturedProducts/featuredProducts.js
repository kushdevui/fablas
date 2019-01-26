import React from "react";
import Products from "../../Products/products";

import "./featuredProducts.scss";
import "bootstrap/dist/css/bootstrap.min.css";


const FeaturedProducts = (props) =>{
    console.log(props);
    return(
        <section className="featured-products-section">
            <div className="row">
                <div className="col-2">
                    <div className="l-item">
                        <img src="../../../assets/images/products/featured-1.png" className="img-fluid"/>     
                        <div className="item-content pl-3 pt-3 pb-4">
                            <p className="pt-1">HOME <strong>CARE</strong></p>
                            <span>Lorem ipsum dolor sit amet, consect etur adipiscing elit...</span>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="l-item">
                        <img src="../../../assets/images/products/featured-1.png" className="img-fluid"/>     
                        <div className="item-content pl-3 pt-3 pb-4">
                            <p className="pt-1">HOME <strong>CARE</strong></p>
                            <span>Lorem ipsum dolor sit amet, consect etur adipiscing elit...</span>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="l-item">
                        <img src="../../../assets/images/products/featured-1.png" className="img-fluid"/>     
                        <div className="item-content pl-3 pt-3 pb-4">
                            <p className="pt-1">HOME <strong>CARE</strong></p>
                            <span>Lorem ipsum dolor sit amet, consect etur adipiscing elit...</span>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="l-item">
                        <img src="../../../assets/images/products/featured-1.png" className="img-fluid"/>     
                        <div className="item-content pl-3 pt-3 pb-4">
                            <p className="pt-1">HOME <strong>CARE</strong></p>
                            <span>Lorem ipsum dolor sit amet, consect etur adipiscing elit...</span>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="l-item">
                        <img src="../../../assets/images/products/featured-1.png" className="img-fluid"/>     
                        <div className="item-content pl-3 pt-3 pb-4">
                            <p className="pt-1">HOME <strong>CARE</strong></p>
                            <span>Lorem ipsum dolor sit amet, consect etur adipiscing elit...</span>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="l-item">
                        <img src="../../../assets/images/products/featured-1.png" className="img-fluid"/>     
                        <div className="item-content pl-3 pt-3 pb-4">
                            <p className="pt-1">HOME <strong>CARE</strong></p>
                            <span>Lorem ipsum dolor sit amet, consect etur adipiscing elit...</span>
                        </div>
                    </div>
                </div>
               
                
            </div>
        </section>
    )
}

export default Products(FeaturedProducts);
