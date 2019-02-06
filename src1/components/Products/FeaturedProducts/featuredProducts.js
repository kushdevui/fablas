import React from "react";
import Products from "../../Products/products";

import "./featuredProducts.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const FeaturedProducts = (props) =>{
   const ShowProducts = props.productList.map(item=>{
       return(
                <div className="col-2">
                    <div className="l-item">
                        <img src={item.categoryImage} className="img-fluid"/>     
                        <div className="item-content pl-3 pt-3 pb-4">
                            <p className="pt-1">{item.categoryName}</p>
                            <span>{item.categoryDescription}</span>
                        </div>
                    </div>
                </div>
           
       )
   })
    return(
        <section className="featured-products-section">
            <div className="row">
               {ShowProducts}
            </div>
        </section>
    )
}



export default FeaturedProducts;
