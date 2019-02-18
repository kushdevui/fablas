import React, { Component } from "react";

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
            // setTimeout(() => {
            //   this.setState({
            //     isAdded: false,
            //     selectedProduct: {}
            //   });
            // }, 3500);
          }
        );
    }

    render(){
        return(
            <div className="sub-cat-card-section mb-5">
                <img src="./assets/images/sub-cat.png" className="img-fluid"/>
                <p className="pt-2 pb-1 mb-0">{this.props.name}</p>
                <button
                    className={!this.state.isAdded ? "" : "Added In Cart"}
                    type="button"
                    onClick={this.addToCart.bind(
                    this,
                    this.props.image,
                    this.props.name,
                    this.props.price,
                    this.props.id,
                    )}
                >
                    {!this.state.isAdded ? "ADD TO CART" : "✔ ADDED"}
            </button>
            </div>
        )
    }
   
}

export default ProductItem;