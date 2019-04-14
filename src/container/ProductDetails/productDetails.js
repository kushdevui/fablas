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
import FilterColors from "../FilterColors/filterColors"

class Product extends Component{
    constructor(props){
        super(props);
        //console.log(this.props.location.state.category)
        this.state = {
            ProductData : {},
            mainImage:"",
            showDetail:false
        }
        this.gotoCart = this.gotoCart.bind(this);
        this.renderProduct = this.renderProduct.bind(this);
    }

    componentDidMount(){
        const headers = {
            'Content-Type': 'application/json'
        }
       axios.post("https://fablasnode.herokuapp.com/products/getProductById",{
        "id":this.props.match.params.product_id,
        "sId":this.props.match.params.product_subCat
       }, {"headers": headers}).then(item=>{
            this.setState({
                ProductData : item.data
            })
       })
    }
   
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    gotoCart(){
        this.props.history.push({
            pathname: '/Cart',
        })
    }
    toggleDescription = (event) =>{
        event.currentTarget.classList.toggle('expand');
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
                <div className="row pt-3">
                    <div className="product-controls d-flex col-lg-12">
                        <div className="col-lg-2 p-0">
                            <FontAwesomeIcon className="mr-1" onClick={()=>{this.handleAddQuantity(item)}} icon={faArrowCircleUp } style={{color:'#999'}} size="sm" />
                                1
                            <FontAwesomeIcon className="ml-1" onClick={()=>{this.handleSubtractQuantity(item)}}  icon={faArrowCircleDown } style={{color:'#999'}} size="sm" />
                            
                        </div>
                        <div className="col-lg-3">
                            <div className="row">
                                <div className="col-lg-1">
                                    <FilterColors/>
                                </div>
                                <div className="col-lg-1">
                                    <FilterColors/>
                                </div>
                                <div className="col-lg-1">
                                    <FilterColors/>
                                </div>
                                <div className="col-lg-1">
                                    <FilterColors/>
                                </div>
                                <div className="col-lg-1">
                                    <FilterColors/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div 
                            className="btnaddtoCart"
                                type="button"
                            onClick={()=>{this.handleClick(this.state.ProductData)}}
                            >
                            <FontAwesomeIcon className="mr-1" icon={faShoppingCart }    style={{color:'white'}} size="sm" />
                            Add To Cart
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div 
                            className="btnGoToCart"
                                type="button"
                            onClick={this.gotoCart}    
                            >
                            {this.props.cartLength} Go to Cart
                            </div>
                        </div>
                       
                    </div>
                </div>
            )
            default:
            return(
                <div className="other-details">
                    <ul className="">
                        <li className="mt-5">
                                <h4 onClick={(e)=>this.toggleDescription(e)}>
                                    <span className="pb-2 icon-palet"> <FontAwesomeIcon className="mr-1 p-1" icon={faShoppingCart }  style={{color:'white', background: 'black'}} size="lg" /> 
                                    {item.title}</span>
                                    <span className="inner">{item.desc}</span>
                                </h4>
                            </li>
                    </ul>
                </div>
            )
        }
    }


    render(){
   // console.log(this.props.location.state.category);
   //console.log(this.state.ProductData);
        const categoryName = this.props.location.state.category;
        var settings = {
            className: "slick-cente",
            variableWidth: true,
            centerMode: true,
            infinite: true,
            centerPadding: "30",
            slidesToShow: 2,
            speed: 600
        };
        const productName = this.state.ProductData[0]?this.state.ProductData[0].productName:"";
        const productUsage = this.state.ProductData[0]?this.state.ProductData[0].productUsage:"";
        const productFeature = this.state.ProductData[0]?this.state.ProductData[0].productFeature:"";
        var MainImage = `./assets/images/products/`+ categoryName+ `/`+ productName + "-1.jpg";
        var slides = [`./assets/images/products/`+ categoryName+ `/`+ productName + "-1.jpg",`./assets/images/products/`+ categoryName+ `/`+ `Britex_Non_Scratch_Cleaner` + "-2.jpg",`./assets/images/products/`+ categoryName+ `/`+ `Britex_Non_Scratch_Cleaner` + "-3.jpg"];
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
                                    `${MainImage} `,
                                    `${MainImage} `,
                                    `${MainImage} `,
                                    `${MainImage} `
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
                                    slides? slides.map(item=>{
                                        return (
                                            <div key={item} onClick={()=>this.handleMainImage(item)}>
                                                <img src={item} />
                                            </div>
                                            )
                                    }):""
                            }
                            </Slider>
                        </div>
                        <div className="col-lg-7 product-details reduce-zindex">
                            <h4>{productName}</h4>
                            <span>{this.state.ProductData.price}</span>
                            <div className="other-details">
                                <ul className="">
                                    <li className="mt-5">
                                        <h4 onClick={(e)=>this.toggleDescription(e)}>
                                            <span className="pb-2 icon-palet"> <FontAwesomeIcon className="mr-1 p-1" icon={faShoppingCart }  style={{color:'white', background: 'black'}} size="lg" /> 
                                            Usage</span>
                                            <span className="inner">{productUsage}</span>
                                        </h4>
                                    </li>
                                    <li className="mt-5">
                                        <h4 onClick={(e)=>this.toggleDescription(e)}>
                                            <span className="pb-2 icon-palet"> <FontAwesomeIcon className="mr-1 p-1" icon={faShoppingCart }  style={{color:'white', background: 'black'}} size="lg" /> 
                                            Features</span>
                                            <span className="inner">{productFeature}</span>
                                        </h4>
                                    </li>
                                </ul>
                        </div>
                        </div>
                    </div>
                    {
                        this.state.type=="sell"?<div className="row mt-5">
                        <div className="col-lg-12 mt-5">
                        <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
                            <Tab label="Description">
                                {this.state.ProductData.fullDesc}
                            </Tab>
                            <Tab label="Details">
                                <ul>
                                    {this.state.ProductData.details?this.state.ProductData.details.map(item=>{
                                        return <li>
                                            <div className="heading">{item.title}</div>
                                            <div>{item.desc}</div>
                                        </li>
                                    }):""}
                                </ul>
                            </Tab>
                            <Tab label="Details">Reviews</Tab>
                        </Tabs>
                        </div>
                    </div>:""
                    }
                </div>
                {/* <div className="container related-products mb-5">
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

                </div> */}
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