import React, { Component } from "react";
import { faShoppingCart,faArrowRight, faArrowDown  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

    addToCart(image, name, price, id) {
        this.setState(
          {
            selectedProduct: {
              image: image,
              name: name,
              price: price,
              id: id
            }
          },
          function() {
            this.props.addToCart(this.state.selectedProduct);
          }
        );
        this.setState(
          {
            isAdded: true
          },
          function() {
            setTimeout(() => {
              this.setState({
                isAdded: false,
                selectedProduct: {}
              });
            }, 3500);
          }
        );
    }
    
    render(){
        return(
            <div className="sub-cat-card-section mb-5 position-relative">
                <img src="./assets/images/sub-cat.png" className="img-fluid"/>
                <div
                    // className={!this.state.isAdded ? "" : "added"}
                    className="btn position-absolute"
                    type="button"
                    onClick={this.addToCart.bind(
                    this,
                    this.props.image,
                    this.props.name,
                    this.props.price,
                    this.props.id,
                    )}
                >
                    <FontAwesomeIcon className="mr-1" icon={faShoppingCart } style={{color:'white'}} size="sm" />
                    {!this.state.isAdded ? "Add to Cart" : "Added in Cart"}
                </div>
                <p className="pt-2 pb-1 mb-0">{this.props.name}<span>&#8377;{this.props.price}</span></p>
            </div>
        )
    }
   
}

export default ProductItem;