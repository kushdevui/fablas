import React, { Component } from "react";
import Header from "../Header/header";
import InnerHeader from "../../container/InnerHeader/innerHeader";
import "./cart.scss";
class Cart extends Component{
    constructor(props){
        super(props);
        this.state={
            showCart:false,
            cart:this.props.location.cartItems
        }
    }
    render(){
        
        return(
            <div>
                <Header/>
                <InnerHeader title="Product Cart" subTitle=""/>
                <div className="container cart-tile mt-5">
                    <div className="row heading">
                        <div className="col-lg-5 item">
                            Product
                        </div>
                        <div className="col-lg-2 item">
                            Price
                        </div>
                        <div className="col-lg-3 item">
                            Quantity
                        </div>
                        <div className="col-lg-2 item">
                            Total
                        </div>
                    </div>
                    <div className="row item-list pt-2 pb-2 text-center">
                        <div className="col-lg-5 item">
                            Product
                        </div>
                        <div className="col-lg-2 item">
                            Price
                        </div>
                        <div className="col-lg-3 item">
                            Quantity
                        </div>
                        <div className="col-lg-2 item">
                            Total
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;

