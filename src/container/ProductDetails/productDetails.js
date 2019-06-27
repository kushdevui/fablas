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
import {getSingleProduct} from '../../redux/actions/getProductAction';
import Slider from "react-slick";
import FilterColors from "../FilterColors/filterColors"
import Modal from 'react-responsive-modal';


class Product extends Component{
    constructor(props){
        super(props);
        //console.log(this.props.location.state.category)
        this.state = {
            ProductData : {},
            mainImage:"",
            showDetail:false,
            open:false,
            modalTitle:"",
            modalDesc:""
        }
        this.gotoCart = this.gotoCart.bind(this);
        this.renderProduct = this.renderProduct.bind(this);
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };

    componentDidMount(){
        //const {id,subCat,catName} = this.props.getSingleProduct;
        //this.props.getSingleProduct(id,subCat,catName)
        const headers = {
            'Content-Type': 'application/json'
        }
       axios.post("https://fablasnode.herokuapp.com/products/getProductById",{
        "id":this.props.getSingleProduct.id,
        "sId":this.props.getSingleProduct.subCat
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
        console.log(item);
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
                        <li className="mt-3">
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
   // console.log(this.props);
    //console.log(this.props.location.state.category);
   //console.log(this.state.ProductData[0]['images'][0]['path']);
        const categoryName = this.props.getSingleProduct.catName;
        var settings = {
            className: "slick-center",
            variableWidth: true,
            centerMode: true,
            infinite: true,
            centerPadding: "30",
            slidesToShow: 3,
            speed: 600
        };
        const productName = this.state.ProductData[0]?this.state.ProductData[0].productName:"";
        const imagePath =this.state.ProductData[0]?this.state.ProductData[0]['images'][0]['path'][0]:""
        //console.log(imagePath);
        const ImagesArr = this.state.ProductData[0]?this.state.ProductData[0]['images'][0]['path']:"";
        const productUsage = this.state.ProductData[0]?this.state.ProductData[0].productUsage:"";
        const productFeature = this.state.ProductData[0]?this.state.ProductData[0].productFeature:"";
        var MainImage = `./assets/images/products/`+ categoryName+ `/`+ imagePath ;
       // console.log(MainImage);
        var slides = [`./assets/images/products/`+ categoryName+ `/`+ productName + "-1.jpg",`./assets/images/products/`+ categoryName+ `/`+ productName + "-2.jpg",`./assets/images/products/`+ categoryName+ `/`+ productName + "-3.jpg"];
        const showImage = this.state.mainImage?this.state.mainImage:MainImage;
        return(
            <div>
                <Header/>
                <InnerHeader  title="Product" subTitle="Product Details" subCatId={this.props.getSingleProduct.subCat} catName={this.props.getSingleProduct.catName}  pName={productName}/>
                <div className="container mt-5 mb-5 product-details">
                    <div className="row mt-5">
                        <div className="col-lg-5">
                        <ReactImageMagnify className="bgWhite border increase-zindex"  {...{
                            smallImage: {
                                alt: '',
                                isFluidWidth: true,
                                src: {showImage},
                                srcSet: [
                                    `${showImage} `,
                                    `${showImage} `,
                                    `${showImage} `,
                                    `${showImage} `
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
                                    ImagesArr? ImagesArr.map(item=>{
                                        return (
                                            <div key={item} onClick={()=>this.handleMainImage(item)}>
                                                <img src={`./assets/images/products/`+ categoryName+ `/`+ item} />
                                            </div>
                                            )
                                    }):""
                            }
                            </Slider>
                        </div>
                        <div className="col-lg-7 product-details reduce-zindex">
                            <h4>{productName}</h4>
                            <div>
                                For cleaning pots, pans, ovens, Bar-be-que, grills, dishes, sinks
                                tiles, bath tubs, machine parts, tools, tyers, mettalic equipments etc.
                            </div>
                            {/* <span>{this.state.ProductData.price}</span> */}
                            <div className="text-red">Other Details</div>
                            <ul className="other-details-extra">
                                <li>
                                    <div className="d-flex">
                                        <span className="heading1">Length</span>
                                        <span>10 CM</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <span className="heading1">Breadth</span>
                                        <span>10 CM</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <span className="heading1">Weight</span>
                                        <span>20 GM</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <span className="heading1">Code</span>
                                        <span>200CU</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <span className="heading1">Material Used</span>
                                        <span>Stain Less Steel</span>
                                    </div>
                                </li>
                            </ul>
                            <div>{this.state.ProductData.description}</div>
                            <div className="other-details">
                                <ul className="">
                                    <li className="mt-4">
                                        <h4 onClick={(e)=>this.toggleDescription(e)}>
                                            <span className="pb-2 icon-palet"> <FontAwesomeIcon className="mr-1 p-1" icon={faShoppingCart }  style={{color:'white', background: 'black'}} size="lg" /> 
                                            Usage</span>
                                            <span className="inner">{productUsage}</span>
                                        </h4>
                                    </li>
                                    <li className="mt-4">
                                        <h4 onClick={(e)=>this.toggleDescription(e)}>
                                            <span className="pb-2 icon-palet"> <FontAwesomeIcon className="mr-1 p-1" icon={faShoppingCart }  style={{color:'white', background: 'black'}} size="lg" /> 
                                            Features</span>
                                            <span className="inner">{productFeature}</span>
                                        </h4>
                                    </li>
                                </ul>
                        </div>
                        <Modal  open={open} onClose={this.onCloseModal} center>
                            <div className="modal-body-full">
                            <div className="icon">
                              asdfasfd
                            </div>
                            <h4 className="pt-2 pb-2">asdf</h4>    
                          asdf
                            </div>
                   
                        </Modal>
                            <div onClick={this.onOpenModal} className="btn btn-danger" >Get Quote</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-12 mt-3">
                        <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
                            {/* <Tab label="Description">
                                {this.state.ProductData.description}
                            </Tab> */}
                            <Tab label="Review">
                                <ul>
                                    {this.state.ProductData.details?this.state.ProductData.details.map(item=>{
                                        return <li>
                                            <div className="heading">{item.title}</div>
                                            <div>{item.desc}</div>
                                        </li>
                                    }):""}
                                </ul>
                            </Tab>
                            {/* <Tab label="Review">Reviews</Tab> */}
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
                            {/* <ProductItem/> */}
                        </div>
                        <div className="col-lg-3">
                            {/* <ProductItem/> */}
                        </div>
                        <div className="col-lg-3">
                            {/* <ProductItem/> */}
                        </div>
                        <div className="col-lg-3">
                            {/* <ProductItem/> */}
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
        getSingleProduct:state.getProductReducer.singleSelectedProduct,
        items: state.items
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)