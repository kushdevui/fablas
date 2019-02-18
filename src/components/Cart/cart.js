import React, { Component } from "react";
import Header from "../Header/header";
import { Link } from 'react-router-dom'
import InnerHeader from "../../container/InnerHeader/innerHeader";
import { connect } from 'react-redux'

import { removeItem,addQuantity,subtractQuantity} from '../../redux/actions/cartActions';

import "./cart.scss";
class Cart extends Component{
    constructor(props){
        super(props);
    }

    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
       const cartItem = this.props.items.map(item=>{
           return(
                <div className="row item-list pt-2 pb-2 text-center">
                    <div className="col-lg-3 item">
                        <img src="./xyz.png" alt="product image"></img>
                    </div>
                    <div className="col-lg-2 item">
                        {item.name}
                    </div>
                    <div className="col-lg-3 item">
                        {item.quantity}
                    </div>
                    <div className="col-lg-2 item">
                        {item.price}
                    </div>
                    <div className="col-lg-2">
                    <div className="add-remove">
                        <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                        <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                    </div>
                    <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                    </div>
                </div>
           )
       })
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
                   {cartItem}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.cartReducer.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)

