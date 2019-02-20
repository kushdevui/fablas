import React, { Component } from "react";
import { faShoppingCart,faArrowRight, faArrowDown  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux'
import { addToCart } from '../../redux/actions/cartActions';
import { Link } from 'react-router-dom';


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
        if(this.props.images){
            var showImg = this.props.images[0]['thumbnails'][0]
        }
       
        switch(this.state.type){
            case "show":
            return (
                <div className="border">
                    <Link to={{pathname:`/Product/ProductList/ProductDetail/${this.props.id}`, state: { type: 'show'}}} query="show">
                        <img src={showImg} className="img-fluid"/>
                    </Link>
                </div>
            )
            default:
            return (
                <div className="border">
                <Link to={{ pathname: `/Product/ProductList/ProductDetail/${this.props.id}`, state: { type: 'sell'} }}>
                    <img src={showImg} className="img-fluid"/>
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
       

        return(
            
            <div className="sub-cat-card-section position-relative pr-2 pl-2 mb-5">
                {this.RenderItem(this.state.type)}
                <p className="pt-2 pb-2 mb-0">{this.props.name}<span>&#8377;{this.props.price}</span></p>
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