import React,{Component} from "react";
import Header from "../../components/Header/header";
import axios from "Axios";
import InnerHeader from "../InnerHeader/innerHeader";
import { faShoppingCart,faArrowCircleUp,faTimes, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Tabs, Tab} from 'react-bootstrap-tabs';
import ProductItem from "../../container/ProductItem/productItem";
import ReactImageMagnify from 'react-image-magnify';
import { connect } from 'react-redux'
import "./product-details.scss";
import Footer from "../../components/Footer/footer";
import { addToCart } from '../../redux/actions/cartActions';
import Slider from "react-slick";

class Product extends Component{
    constructor(props){
        super(props)
        this.state={
            ProductData : [],
            mainImage:"",
            type:this.props.location.state.type
        }
        this.gotoCart = this.gotoCart.bind(this);
        this.renderProduct = this.renderProduct.bind(this);
    }

    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    gotoCart(){
        this.props.history.push({
            pathname: '/Cart',
        })
    }

    handleMainImage = (item) => {
        this.setState({
            mainImage:item
        })
    }

    renderProduct = (type) =>{
        switch(this.state.type){
            case "sell":
            return(
                <div className="product-controls d-flex">
                     <div>
                        <FontAwesomeIcon className="mr-1" onClick={()=>{this.handleAddQuantity(item)}} icon={faArrowCircleUp } style={{color:'#999'}} size="sm" />
                            1
                        <FontAwesomeIcon className="ml-1" onClick={()=>{this.handleSubtractQuantity(item)}}  icon={faArrowCircleDown } style={{color:'#999'}} size="sm" />
                        </div>
                     <div 
                className="btnaddtoCart  ml-3"
                    type="button"
                onClick={()=>{this.handleClick(this.state.ProductData)}}
                >
                <FontAwesomeIcon className="mr-1" icon={faShoppingCart }    style={{color:'white'}} size="sm" />
                 Add To Cart
                </div>
                <div 
                className="btnGoToCart  ml-3"
                    type="button"
                onClick={this.gotoCart}    
                >
                    {this.props.cartLength} Go to Cart
                </div>
                </div>
               
            )
            default:
            ""
        }

    }

    componentWillMount(){
        const headers = {
            'Content-Type': 'application/json'
        }
       axios.post("https://fablasnode.herokuapp.com/products/getProductById",{
        "id":this.props.match.params.product_id
       }, {"headers": headers}).then(product=>{
           this.setState({
            ProductData : product.data,
            mainImage:product.data.images[0]['largeImages'][0]
           })
       })
    }

    render(){
        var MainImage = this.state.mainImage;
       
        var settings = {
            className: "slick-cente",
            variableWidth: true,
            centerMode: true,
            infinite: true,
            centerPadding: "30",
            slidesToShow: 2,
            speed: 600
        };
        return(
            <div>
                <Header/>
                <InnerHeader title="Product" subTitle="Product Details"/>
                <div className="container mt-5 mb-5 product-details">
                    <div className="row mt-5">
                        <div className="col-lg-5">
                        <ReactImageMagnify className="bgWhite border increase-zindex"  {...{
                            smallImage: {
                                alt: '',
                                isFluidWidth: true,
                                src: {MainImage},
                                srcSet: [
                                    `${MainImage} 687w`,
                                    `${MainImage} 770w`,
                                    `${MainImage} 861w`,
                                    `${MainImage} 955w`
                                ].join(', '),
                                sizes: '(min-width: 480px) 30vw, 80vw'
                            },
                            largeImage: {
                                alt: '',
                                src: MainImage,
                                width: 1200,
                                height: 1800
                            }
                            }} />
                            <Slider  className="d-flex product-thumb" {...settings}>
                                {
                                    this.state.ProductData.images? this.state.ProductData.images[0]['thumbnails'].map(item=>{
                                        return (
                                            <div key={item} onClick={()=>this.handleMainImage(item)}>
                                                <img src={item} />
                                            </div>
                                            )
                                    }):""
                            }
                            </Slider>
                        </div>
                        <div className="col-lg-7 reduce-zindex">
                            <h3>{this.state.ProductData.name}</h3>
                            <span>&#8377;{this.state.ProductData.price}</span>
                            <p className="pt-2 pb-4">{this.state.ProductData.fullDesc}</p>
                            <div className="other-details">
                                <span>Other Details :</span>
                                <ul className="mt-2">
                                    <li>Category : Homecare</li>
                                    <li>Code : #21457</li>
                                    <li>Availabiltity : In Stock</li>
                                </ul>
                            </div>
                            {this.renderProduct(this.state.type)}
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12 mt-5">
                        <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
                            <Tab label="Description">
                                <ul>
                                    {this.state.ProductData.description?this.state.ProductData.description.map(item=>{
                                        return <li>
                                            <div className="heading">{item.title}</div>
                                            <div>{item.desc}</div>
                                        </li>
                                    }):""}
                                </ul>
                            </Tab>
                            <Tab label="Details">Tab 2 content</Tab>
                            <Tab label="Reviews">Tab 3 content</Tab>
                        </Tabs>
                        </div>
                    </div>
                </div>
                <div className="container related-products mb-5">
                    <div className="row mb-5 text-center">
                        <div className="col-lg-12">
                            <h3>Related Products</h3>
                            <sub>Check out Now</sub>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <ProductItem/>
                        </div>
                        <div className="col-lg-3">
                            <ProductItem/>
                        </div>
                        <div className="col-lg-3">
                            <ProductItem/>
                        </div>
                        <div className="col-lg-3">
                            <ProductItem/>
                        </div>
                    </div>

                </div>
                <Footer/>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        cartLength:state.cartReducer.addedItems.length,
        items: state.items
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)