import React, { Component } from "react";
import { faShoppingCart,faArrowRight, faArrowDown  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux'
import { addToCart } from '../../redux/actions/cartActions';


import "./product-item.scss";

class ProductItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedProduct: {},
            quickViewProdcut: {},
            isAdded: false
        };
    }

    handleClick = (id)=>{
      this.props.addToCart(id); 
    }

    render(){
        return(
            <div className="sub-cat-card-section mb-5 position-relative">
                <img src="/assets/images/sub-cat.png" className="img-fluid"/>
                <div
                     //className={!this.state.isAdded ? "" : "added"}
                    className="btn position-absolute"
                    type="button"
                    onClick={()=>{this.handleClick(this.props)}}
                >
                    <FontAwesomeIcon className="mr-1" icon={faShoppingCart } style={{color:'white'}} size="sm" />
                    {!this.state.isAdded ? "Add to Cart" : "Added in Cart"}
                </div>
                <p className="pt-2 pb-1 mb-0">{this.props.name}<span>&#8377;{this.props.price}</span></p>
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
      addToCart: (id)=>{dispatch(addToCart(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductItem)