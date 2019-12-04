import React from "react";
import Products from "../../Products/products";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import "./featuredProducts.scss";
import {selectedProductCategory,selectedProductSubCategory} from '../../../redux/actions/getProductAction';

//import "bootstrap/dist/css/bootstrap.min.css";
class FeaturedProducts extends React.Component{
    constructor(props){
        super(props);
        this.handleSelectedProductFlow = this.handleSelectedProductFlow.bind(this);
    }
    goToBulk = (e)=>{
       e.preventDefault();
       console.log("adf")
       window.scrollTo(0, 3100);

   }
   handleSelectedProductFlow(subCat,subCatName){
    this.props.selectedProductSubCategory(subCat,subCatName)
   }
   render(){
       const showItems = this.props.productList.map((item,i)=>{
           console.log("item",item);
            return(
                <div className="col-6 col-md-2 mb-2 mb-lg-0 " onClick={()=>this.handleSelectedProductFlow(item['subCategory'][0].id,item['subCategory'][0].name)}>
                    <Link to={`/Products/${item.subCategory[0].name}`} params={{ testvalue: "hello" }}>
                        <div className="l-item">
                            <img src={item.categoryImage} className="img-fluid"/>     
                            <div className="item-content pl-3 pt-3 pb-4 col-md-12">
                                <p className="pt-1 m-0">{item.categoryName}</p>
                                <div class="sub d-none d-lg-block">{item.categoryDescription}</div>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        });
    return(
        <section className="featured-products-section">
            <div className="row">
                {showItems}
                <div className="col-6 col-md-2 mb-2 mb-lg-0 " onClick={this.goToBulk}>
                        <div className="l-item">
                            <img src="./assets/images/products/featured-6.jpg" className="img-fluid"/>     
                            <div className="item-content pl-3 pt-3 pb-4 col-md-12">
                                <p className="pt-1 m-0">Bulk</p>
                                <div class="sub d-none d-lg-block">We put quantity in quality. Get B2B/bulk products with a 3 rd party label option.</div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}
}
const mapDispatchToProps = dispatch => {
    return {
      selectedProductCategory : (category) =>{
          dispatch(selectedProductCategory(category));
      },
      selectedProductSubCategory : (subCat,subCatName) => {
          dispatch(selectedProductSubCategory(subCat,subCatName));
      }    
    };
};   


export default connect(null,mapDispatchToProps)(FeaturedProducts);

