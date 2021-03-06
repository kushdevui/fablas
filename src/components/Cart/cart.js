import React, { Component } from "react";
import Header from "../Header/header";
import { Link } from 'react-router-dom'
import InnerHeader from "../../container/InnerHeader/innerHeader";
import { connect } from 'react-redux'
import { faShoppingCart,faArrowCircleUp,faTimes, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Footer/footer";
import { removeItem,addQuantity,subtractQuantity} from '../../redux/actions/cartActions';

import "./cart.scss";
class Cart extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        // if(this.props.items.length){
        //     localStorage.setItem('cartItems',JSON.stringify(this.props.items))
        // }
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

    getProductTotal = () =>{

    }


    render(){
        console.log(this.props.item);
       const cartItem = this.props.items.map(item=>{
           return(
                <div className="row item-list pt-3 pb-3 text-center">
                    <div className="col-lg-4 item">
                        <span className=" pl-2">{item.name}</span>
                        <FontAwesomeIcon className="mr-1 float-right remove"  onClick={()=>{this.handleRemove(item.id)}} icon={faTimes} style={{color:'#000'}} size="md" />
                    </div>
                    <div className="col-lg-2 item  pl-1">
                        &#x20B9; {item.price}
                    </div>
                    <div className="col-lg-3 item">
                    <div className="add-remove">
                    <FontAwesomeIcon className="mr-1" onClick={()=>{this.handleAddQuantity(item)}} icon={faArrowCircleUp } style={{color:'#999'}} size="sm" />
                    {item.quantity}
                    <FontAwesomeIcon className="ml-1" onClick={()=>{this.handleSubtractQuantity(item)}}  icon={faArrowCircleDown } style={{color:'#999'}} size="sm" />
                    </div>
                        
                    </div>
                    <div className="col-lg-3 item">
                        &#x20B9; {item.price * item.quantity} 
                    </div>
                </div>
           )
       })
        return(
            <div>
                <Header/>
                <InnerHeader title="Product Cart" subTitle=""/>
                <div className="container cart-tiles mt-5">
                    <div className="row heading pt-2 pb-2">
                        <div className="col-lg-4 item">
                            Product
                        </div>
                        <div className="col-lg-2 item">
                            Price
                        </div>
                        <div className="col-lg-3 item">
                            Quantity
                        </div>
                        <div className="col-lg-3 item">
                            Total
                        </div>
                    </div>
                    {cartItem}
                </div>  
                <div className="container  mt-3">
                    <div className="row text-center proceed">
                        <div className="col-lg-3 btnGoToCart  ml-3"
                        >
                        Proceed to checkout
                        </div>
                    </div>
                    <div className="row mt-3 d-flex total-summary mb-5">
                        <div className="col-lg-6 border">
                            <div className="p-3">
                                <p>Cart Total</p>
                                <ul>
                                    <li>Cart Subtotal : <span> &#x20B9; {this.props.productTotal}</span></li>
                                    <li>Shipping : <span>Free shipping</span></li>
                                    <li>Order Total : <span> &#x20B9; {this.props.productTotal}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.cartReducer.addedItems,
        productTotal: state.cartReducer.total,
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

