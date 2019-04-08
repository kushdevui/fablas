import React from "react";
import Products from "../../Products/products";
import {Link} from 'react-router-dom';
import "./featuredProducts.scss";
//import "bootstrap/dist/css/bootstrap.min.css";

const FeaturedProducts = (props) =>{
   const ShowProducts = props.productList.map(item=>{
       return(
                <div className="col-lg-2 d-none d-lg-block">
                    <Link to={`/Products/${item.subCategory[0].id}`} params={{ testvalue: "hello" }}>
                        <div className="l-item">
                            <img src={item.categoryImage} className="img-fluid"/>     
                            <div className="item-content pl-3 pt-3 pb-4">
                                <p className="pt-1 m-0">{item.categoryName}</p>
                                <div class="sub">{item.categoryDescription}</div>
                            </div>
                        </div>
                    </Link>
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
