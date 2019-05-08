import React from "react";
import Products from "../../Products/products";
import {Link} from 'react-router-dom';
import "./featuredProducts.scss";
//import "bootstrap/dist/css/bootstrap.min.css";

const FeaturedProducts = (props) =>{
   const ShowProducts = props.productList.map(item=>{
       return(
                <div className="col-6 col-md-2 mb-2 mb-lg-0 ">
                    <Link to={`/Products/${item.subCategory[0].id}`} params={{ testvalue: "hello" }}>
                        <div className="l-item">
                            <img src={item.categoryImage} className="img-fluid"/>     
                            <div className="item-content pl-3 pt-3 pb-4 col-md-12">
                                <p className="pt-1 m-0">{item.categoryName}</p>
                                <div class="sub">{item.categoryDescription}</div>
                            </div>
                        </div>
                    </Link>
                </div>
       )
   })
   const goToBulk = (e)=>{
       e.preventDefault();
       console.log("adf")
       window.scrollTo(0, 3100);

   }
    return(
        <section className="featured-products-section">
            <div className="row">
               {ShowProducts}
               <div className="col-6 col-md-2 mb-2 mb-lg-0 " onClick={goToBulk}>
                    <div className="l-item">
                        <img src="./assets/images/products/featured-6.jpg" className="img-fluid"/>     
                        <div className="item-content pl-3 pt-3 pb-4 col-md-12">
                            <p className="pt-1 m-0">Bulk</p>
                            <div class="sub">We put quantity in quality. Get B2B/bulk products with a 3 rd party label option.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default FeaturedProducts;
