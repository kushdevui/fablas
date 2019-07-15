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
            modalDesc:"",
            bulkOrder:{
                fullName:"",
                companyName:"",
                companyAddress:"",
                phone:"",
                email:"",
                city:"",
                country:"",
                category:"",
                quantity:"",
                comments:"",
			},
            message:"",
            errors:{}
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
        //console.log(this.props)
        //const {id,subCat,catName} = this.props.getSingleProduct;
        //this.props.getSingleProduct(id,subCat,catName)
        const headers = {
            'Content-Type': 'application/json'
        }
       axios.post("https://fablasnode.herokuapp.com/products/getProductById",{
        "id":this.props.selectedProductProductId,
        "sId":this.props.selectedProductSubCategory.subCategory
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
        const categoryName = this.props.selectedProductCategory
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
                <InnerHeader  title="Product" subTitle="Product Details" category={this.props.selectedProductCategory} subCategory={this.props.selectedProductSubCategory.subCategoryName} />
                <div className="container mt-5 mb-5 product-details">
                    <div className="row mt-5">
                        <div className="col-lg-5">
                        <ReactImageMagnify className="bgWhite border"  {...{
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
                        <Modal  open={this.state.open} onClose={this.onCloseModal} center>
                            <div className="modal-body-full">
                            <h4 className="pt-2 pb-2">Fill in the details to Get the Product Quote</h4>    
                            <div className="row">
                                <div className="col-lg-12">
                   {this.state.message?<p>{this.state.message}</p>:<form onSubmit={this.handleSubmitForm}>
                       
                        <div className="row">
                            <div className=" col-lg-6 form-group">
                                <input type="text" onChange={this.handleChange} name="fullName" placeholder="Full Name" className={this.state.errors.fullName?"form-control error":"form-control"}/>
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text" onChange={this.handleChange} name="companyName" placeholder="Company Name" className={this.state.errors.companyName?"form-control error":"form-control"}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-lg-12 form-group">
                                <input type="text" name="companyAddress" onChange={this.handleChange} placeholder="Company Address" className={this.state.errors.companyAddress?"form-control error":"form-control"}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-lg-6 form-group">
                                <input type="text" onChange={this.handleChange} name="phone" placeholder="Phone" className={this.state.errors.phone?"form-control error":"form-control"}/>
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text" onChange={this.handleChange} name="email" placeholder="Email" className={this.state.errors.email?"form-control error":"form-control"}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-lg-6 form-group">
                                <input type="text" onChange={this.handleChange} name="city" placeholder="City" className={this.state.errors.city?"form-control error":"form-control"}/>
                            </div>
                            <div className="col-lg-6 form-group">
                                <select onChange={this.handleChange} name="country" placeholder="Country" className={this.state.errors.country?"form-control error":"form-control"}>
                                <option value="AF">Afghanistan</option>
	<option value="AX">Åland Islands</option>
	<option value="AL">Albania</option>
	<option value="DZ">Algeria</option>
	<option value="AS">American Samoa</option>
	<option value="AD">Andorra</option>
	<option value="AO">Angola</option>
	<option value="AI">Anguilla</option>
	<option value="AQ">Antarctica</option>
	<option value="AG">Antigua and Barbuda</option>
	<option value="AR">Argentina</option>
	<option value="AM">Armenia</option>
	<option value="AW">Aruba</option>
	<option value="AU">Australia</option>
	<option value="AT">Austria</option>
	<option value="AZ">Azerbaijan</option>
	<option value="BS">Bahamas</option>
	<option value="BH">Bahrain</option>
	<option value="BD">Bangladesh</option>
	<option value="BB">Barbados</option>
	<option value="BY">Belarus</option>
	<option value="BE">Belgium</option>
	<option value="BZ">Belize</option>
	<option value="BJ">Benin</option>
	<option value="BM">Bermuda</option>
	<option value="BT">Bhutan</option>
	<option value="BO">Bolivia, Plurinational State of</option>
	<option value="BQ">Bonaire, Sint Eustatius and Saba</option>
	<option value="BA">Bosnia and Herzegovina</option>
	<option value="BW">Botswana</option>
	<option value="BV">Bouvet Island</option>
	<option value="BR">Brazil</option>
	<option value="IO">British Indian Ocean Territory</option>
	<option value="BN">Brunei Darussalam</option>
	<option value="BG">Bulgaria</option>
	<option value="BF">Burkina Faso</option>
	<option value="BI">Burundi</option>
	<option value="KH">Cambodia</option>
	<option value="CM">Cameroon</option>
	<option value="CA">Canada</option>
	<option value="CV">Cape Verde</option>
	<option value="KY">Cayman Islands</option>
	<option value="CF">Central African Republic</option>
	<option value="TD">Chad</option>
	<option value="CL">Chile</option>
	<option value="CN">China</option>
	<option value="CX">Christmas Island</option>
	<option value="CC">Cocos (Keeling) Islands</option>
	<option value="CO">Colombia</option>
	<option value="KM">Comoros</option>
	<option value="CG">Congo</option>
	<option value="CD">Congo, the Democratic Republic of the</option>
	<option value="CK">Cook Islands</option>
	<option value="CR">Costa Rica</option>
	<option value="CI">Côte d'Ivoire</option>
	<option value="HR">Croatia</option>
	<option value="CU">Cuba</option>
	<option value="CW">Curaçao</option>
	<option value="CY">Cyprus</option>
	<option value="CZ">Czech Republic</option>
	<option value="DK">Denmark</option>
	<option value="DJ">Djibouti</option>
	<option value="DM">Dominica</option>
	<option value="DO">Dominican Republic</option>
	<option value="EC">Ecuador</option>
	<option value="EG">Egypt</option>
	<option value="SV">El Salvador</option>
	<option value="GQ">Equatorial Guinea</option>
	<option value="ER">Eritrea</option>
	<option value="EE">Estonia</option>
	<option value="ET">Ethiopia</option>
	<option value="FK">Falkland Islands (Malvinas)</option>
	<option value="FO">Faroe Islands</option>
	<option value="FJ">Fiji</option>
	<option value="FI">Finland</option>
	<option value="FR">France</option>
	<option value="GF">French Guiana</option>
	<option value="PF">French Polynesia</option>
	<option value="TF">French Southern Territories</option>
	<option value="GA">Gabon</option>
	<option value="GM">Gambia</option>
	<option value="GE">Georgia</option>
	<option value="DE">Germany</option>
	<option value="GH">Ghana</option>
	<option value="GI">Gibraltar</option>
	<option value="GR">Greece</option>
	<option value="GL">Greenland</option>
	<option value="GD">Grenada</option>
	<option value="GP">Guadeloupe</option>
	<option value="GU">Guam</option>
	<option value="GT">Guatemala</option>
	<option value="GG">Guernsey</option>
	<option value="GN">Guinea</option>
	<option value="GW">Guinea-Bissau</option>
	<option value="GY">Guyana</option>
	<option value="HT">Haiti</option>
	<option value="HM">Heard Island and McDonald Islands</option>
	<option value="VA">Holy See (Vatican City State)</option>
	<option value="HN">Honduras</option>
	<option value="HK">Hong Kong</option>
	<option value="HU">Hungary</option>
	<option value="IS">Iceland</option>
	<option value="IN">India</option>
	<option value="ID">Indonesia</option>
	<option value="IR">Iran, Islamic Republic of</option>
	<option value="IQ">Iraq</option>
	<option value="IE">Ireland</option>
	<option value="IM">Isle of Man</option>
	<option value="IL">Israel</option>
	<option value="IT">Italy</option>
	<option value="JM">Jamaica</option>
	<option value="JP">Japan</option>
	<option value="JE">Jersey</option>
	<option value="JO">Jordan</option>
	<option value="KZ">Kazakhstan</option>
	<option value="KE">Kenya</option>
	<option value="KI">Kiribati</option>
	<option value="KP">Korea, Democratic People's Republic of</option>
	<option value="KR">Korea, Republic of</option>
	<option value="KW">Kuwait</option>
	<option value="KG">Kyrgyzstan</option>
	<option value="LA">Lao People's Democratic Republic</option>
	<option value="LV">Latvia</option>
	<option value="LB">Lebanon</option>
	<option value="LS">Lesotho</option>
	<option value="LR">Liberia</option>
	<option value="LY">Libya</option>
	<option value="LI">Liechtenstein</option>
	<option value="LT">Lithuania</option>
	<option value="LU">Luxembourg</option>
	<option value="MO">Macao</option>
	<option value="MK">Macedonia, the former Yugoslav Republic of</option>
	<option value="MG">Madagascar</option>
	<option value="MW">Malawi</option>
	<option value="MY">Malaysia</option>
	<option value="MV">Maldives</option>
	<option value="ML">Mali</option>
	<option value="MT">Malta</option>
	<option value="MH">Marshall Islands</option>
	<option value="MQ">Martinique</option>
	<option value="MR">Mauritania</option>
	<option value="MU">Mauritius</option>
	<option value="YT">Mayotte</option>
	<option value="MX">Mexico</option>
	<option value="FM">Micronesia, Federated States of</option>
	<option value="MD">Moldova, Republic of</option>
	<option value="MC">Monaco</option>
	<option value="MN">Mongolia</option>
	<option value="ME">Montenegro</option>
	<option value="MS">Montserrat</option>
	<option value="MA">Morocco</option>
	<option value="MZ">Mozambique</option>
	<option value="MM">Myanmar</option>
	<option value="NA">Namibia</option>
	<option value="NR">Nauru</option>
	<option value="NP">Nepal</option>
	<option value="NL">Netherlands</option>
	<option value="NC">New Caledonia</option>
	<option value="NZ">New Zealand</option>
	<option value="NI">Nicaragua</option>
	<option value="NE">Niger</option>
	<option value="NG">Nigeria</option>
	<option value="NU">Niue</option>
	<option value="NF">Norfolk Island</option>
	<option value="MP">Northern Mariana Islands</option>
	<option value="NO">Norway</option>
	<option value="OM">Oman</option>
	<option value="PK">Pakistan</option>
	<option value="PW">Palau</option>
	<option value="PS">Palestinian Territory, Occupied</option>
	<option value="PA">Panama</option>
	<option value="PG">Papua New Guinea</option>
	<option value="PY">Paraguay</option>
	<option value="PE">Peru</option>
	<option value="PH">Philippines</option>
	<option value="PN">Pitcairn</option>
	<option value="PL">Poland</option>
	<option value="PT">Portugal</option>
	<option value="PR">Puerto Rico</option>
	<option value="QA">Qatar</option>
	<option value="RE">Réunion</option>
	<option value="RO">Romania</option>
	<option value="RU">Russian Federation</option>
	<option value="RW">Rwanda</option>
	<option value="BL">Saint Barthélemy</option>
	<option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
	<option value="KN">Saint Kitts and Nevis</option>
	<option value="LC">Saint Lucia</option>
	<option value="MF">Saint Martin (French part)</option>
	<option value="PM">Saint Pierre and Miquelon</option>
	<option value="VC">Saint Vincent and the Grenadines</option>
	<option value="WS">Samoa</option>
	<option value="SM">San Marino</option>
	<option value="ST">Sao Tome and Principe</option>
	<option value="SA">Saudi Arabia</option>
	<option value="SN">Senegal</option>
	<option value="RS">Serbia</option>
	<option value="SC">Seychelles</option>
	<option value="SL">Sierra Leone</option>
	<option value="SG">Singapore</option>
	<option value="SX">Sint Maarten (Dutch part)</option>
	<option value="SK">Slovakia</option>
	<option value="SI">Slovenia</option>
	<option value="SB">Solomon Islands</option>
	<option value="SO">Somalia</option>
	<option value="ZA">South Africa</option>
	<option value="GS">South Georgia and the South Sandwich Islands</option>
	<option value="SS">South Sudan</option>
	<option value="ES">Spain</option>
	<option value="LK">Sri Lanka</option>
	<option value="SD">Sudan</option>
	<option value="SR">Suriname</option>
	<option value="SJ">Svalbard and Jan Mayen</option>
	<option value="SZ">Swaziland</option>
	<option value="SE">Sweden</option>
	<option value="CH">Switzerland</option>
	<option value="SY">Syrian Arab Republic</option>
	<option value="TW">Taiwan, Province of China</option>
	<option value="TJ">Tajikistan</option>
	<option value="TZ">Tanzania, United Republic of</option>
	<option value="TH">Thailand</option>
	<option value="TL">Timor-Leste</option>
	<option value="TG">Togo</option>
	<option value="TK">Tokelau</option>
	<option value="TO">Tonga</option>
	<option value="TT">Trinidad and Tobago</option>
	<option value="TN">Tunisia</option>
	<option value="TR">Turkey</option>
	<option value="TM">Turkmenistan</option>
	<option value="TC">Turks and Caicos Islands</option>
	<option value="TV">Tuvalu</option>
	<option value="UG">Uganda</option>
	<option value="UA">Ukraine</option>
	<option value="AE">United Arab Emirates</option>
	<option value="GB">United Kingdom</option>
	<option value="US">United States</option>
	<option value="UM">United States Minor Outlying Islands</option>
	<option value="UY">Uruguay</option>
	<option value="UZ">Uzbekistan</option>
	<option value="VU">Vanuatu</option>
	<option value="VE">Venezuela, Bolivarian Republic of</option>
	<option value="VN">Viet Nam</option>
	<option value="VG">Virgin Islands, British</option>
	<option value="VI">Virgin Islands, U.S.</option>
	<option value="WF">Wallis and Futuna</option>
	<option value="EH">Western Sahara</option>
	<option value="YE">Yemen</option>
	<option value="ZM">Zambia</option>
	<option value="ZW">Zimbabwe</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-lg-6 form-group">
                                <select name="category" onChange={this.handleChange} className={this.state.errors.category?"form-control error":"form-control"}>
                                    <option value="">Select Category</option>
                                    <option value="Home Care">Home Care</option>
                                    <option>Personal care </option>
                                    <option>Industrial Care</option>
                                    <option>Professional Care</option>
                                    <option>Bulk</option>
                                    <option>Other</option>
                                </select>
								{this.state.showotherCat?<input className="form-control mt-3" placeholder="Please Specify" type="text"/>:""}
								
                            </div>
							

                            <div className="col-lg-6 form-group">
                                <input type="text" name="quantity" onChange={this.handleChange} placeholder="Quantity" className={this.state.errors.quantity?"form-control error":"form-control"}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 form-group">
                               <textarea onChange={this.handleChange} name="comments" placeholder="Comments" className={this.state.errors.comments?"form-control error":"form-control"}></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 form-group">
                                <input type="submit" className="w-100 btn btn-danger"/>
                            </div>
                        </div>
                   
                    </form>}
                    </div>
                                </div>
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
        selectedProductCategory:state.getProductReducer.selectedProductCategory,
        selectedProductSubCategory:state.getProductReducer.selectedProductSubCategory,
        selectedProductProductId:state.getProductReducer.selectedProductId,
        items: state.items
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)