import React, { Component } from "react";
import { faShoppingCart,faArrowRight, faArrowDown  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux'
import { addToCart } from '../../redux/actions/cartActions';
import {selectedProductProductId} from "../../redux/actions/getProductAction";
import { Link } from 'react-router-dom';
import FilterColors from "../FilterColors/filterColors";

import "./product-item.scss";

class ProductItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedProduct: {},
            quickViewProdcut: {},
            isAdded: false,
            type:this.props.type
        };
        this.RenderItem = this.RenderItem.bind(this);
    }

    handleClick = (id)=>{
      this.props.addToCart(id); 
    }

    RenderItem =(type) =>{
       // console.log(this.props.image[0]['path'])
        if(this.props.image){
            var imgPath = `./assets/images/products/`+this.props.categoryName;
            if(this.props.image[0]){
                var imgUrl = this.props.image[0]['path']?this.props.image[0]['path'][0]:"";
                var showImg = imgPath + "/" + imgUrl;
            }
            
        }
       
        switch(this.state.type){
            case "show":
            return (
                <div onClick={()=>this.props.selectedProductProductId(this.props.id)} className="border">
                    <Link to={{pathname:`/ProductDetail/${this.props.categoryName}/${this.props.subCatName}/${this.props.name}`}} query="show">
                        <img src={showImg} className="img-fluid"/>
                    </Link>
                </div>
            )
            default:
            return (
                <div className="border">
                <Link to={{ pathname: `/Product/ProductList/ProductDetail/${this.props.id}`, state: { type: 'sell'} }}>
                    <img src={showImg} className="img-fluid"/>
                    <p className="pt-2 pb-2 mb-0">{this.props.name}<span></span></p>
                </Link>
                <div
                    //className={!this.state.isAdded ? "" : "added"}
                    className="btn position-absolute"
                    type="button"
                    onClick={()=>{this.handleClick(this.props)}}
                >
                
                    <FontAwesomeIcon className="mr-1" icon={faShoppingCart } style={{color:'white'}} size="sm" />
                    {!this.state.isAdded ? "Add to Cart" : "Added in Cart"}
                </div>
            </div>
            )
        }
    }

    render(){
       // console.log(this.props)
        return(
            <div className="sub-cat-card-section position-relative pr-2 pl-2 mb-2">
                {this.RenderItem(this.state.type)}
              
            </div>
           
        )
    }
   
}

const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}
const mapDispatchToProps= (dispatch)=>{
  return{
      addToCart: (id)=>{dispatch(addToCart(id))},
      selectedProductProductId : (productId) => {dispatch(selectedProductProductId(productId))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductItem)