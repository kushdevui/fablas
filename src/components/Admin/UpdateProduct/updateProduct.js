import React,{Component} from 'react';
import axios from "axios";
import "./update-form.scss";
import { faArrowLeft,faLongArrowAltLeft,faSearch, faDivide  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import header from '../../Header/header';
import CKEditor from 'ckeditor4-react';


class UpdateProduct extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state={
            productSubCatId:this.props.location.query.subCatId,
            productId:"",
            productName:"",
            description:"",
            details:"",
            stock:"",
            price:"",
            productUsage:"",
            productFeature:"",
            metaDescription:"",
            metaTitle:"",
            images:[],
            metaClonical:"",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.UpdateProductItem = this.UpdateProductItem.bind(this);
        this.removeImage = this.removeImage.bind(this);
        this.updateColor = this.updateColor.bind(this);
    }


    handleInputChange(event){
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        this.setState({
            [name]:value
        })
    }

    removeImage(event){
        var array = this.state.productImages;
        var image = event.target.dataset.id;
        //console.log(image);
        var index = array.indexOf(image);
        if(index !== -1){
            array.splice(index,1);
            this.setState({
                productImages:array
            })
        }
    }

    updateColor(event){
        const value = event.target.value;
        const status = event.target.checked;
        const array = this.state.productColours;
        const index = array.indexOf(value);
        if(status==true){
            array.push(value);
        }
        else{
            if(index !== -1){
                array.splice(index,1);
            }
        }
        this.setState({
            productColours:array
        }
        )
    }

    UpdateProductItem(e){
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json'
        }
        axios.put("https://fablasnode.herokuapp.com/products/updateProduct",{
           data:this.state
        },{"headers":headers}).then(res=>{
            
        })
    }

    componentDidMount(){
        const headers = {
            'Content-Type': 'application/json'
        }

        axios.post("https://fablasnode.herokuapp.com/products/getProductById",{
             "id":this.props.location.query.productId,
             "sId":this.props.location.query.subCatId
            }, {"headers": headers}).then(item=>{
                console.log(item);
                this.setState({
                    productId:item.data[0].id,
                    productName:item.data[0].productName,
                    productFeature:item.data[0].productFeature,
                    productSize:item.data[0].productSize,
                    description:item.data[0].description,
                    images:item.data[0].images[0].path,
                    details:item.data[0].details,
                    productUsage:item.data[0].productUsage,
                    stock:item.data[0].stock,
                    price:item.data[0].price,
                    metaDescription:item.data[0].metaDescription,
                    metaTitle:item.data[0].metaTitle,
                    metaClonical:item.data[0].metaClonical,
                })
            })
    }

    render(){
        return(
            <div className="update-form">
                <div className="admin-header row">
                    <div className="col-lg-12">
                    <FontAwesomeIcon icon={faLongArrowAltLeft } style={{color:'white'}} size="lg mr-3" /> {this.state.productName}
                    </div>
                </div>
                <form className="row pt-5">
                    <div className="col-lg-12">
                        <div className="row form-group">
                            <div className="col-lg-3">
                                <label>
                                    Category
                                </label>
                                <input type="text"  name="productSubCat" className="form-control" value={this.props.location.query.subCatId} readOnly/>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-lg-5">
                                <label>
                                    Product Name
                                </label>
                                <input type="text" onChange={this.handleInputChange} name="productName"  value={this.state.productName} className="form-control"/>
                            </div>
                            <div className="col-lg-3">
                                <label>
                                    Product Price
                                </label>
                                <input type="text" onChange={this.handleInputChange} name="productPrice"  value={this.state.price} className="form-control"/>
                            </div>
                            <div className="col-lg-4">
                            <label>
                                Product Size
                            </label>
                            <input type="text" onChange={this.handleInputChange} name="productSize"  value={this.state.productSize} className="form-control"/>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-lg-5">
                                <label>
                                   Meta Title
                                </label>
                                <input type="text" onChange={this.handleInputChange} name="metaTitle"  value={this.state.metaTitle} className="form-control"/>
                            </div>
                            <div className="col-lg-3">
                                <label>
                                   Meta Description
                                </label>
                                <input type="text" onChange={this.handleInputChange} name="metaDescription"  value={this.state.metaDescription} className="form-control"/>
                            </div>
                            <div className="col-lg-4">
                            <label>
                               Meta Clonical
                            </label>
                            <input type="text" onChange={this.handleInputChange} name="metaClonical"  value={this.state.metaClonical} className="form-control"/>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-lg-6">
                                <label>
                                    Product Features
                                </label>
                                <CKEditor onChange={this.handleInputChange} name="productFeature" className="form-control" value={this.state.productFeature}
                                data={this.state.productFeature}/>
                            </div>
                            <div className="col-lg-6">
                                <label>
                                Product Description
                                </label>
                                <CKEditor  name="description" onChange={this.handleInputChange} className="form-control" value={this.state.description}
                                data={this.state.description}/>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-lg-6">
                                <label>
                                    Product Usage
                                </label>
                                <CKEditor  name="productUsage" onChange={this.handleInputChange} className="form-control" value={this.state.productUsage}
                                data={this.state.productUsage}/>
                            </div>
                            <div className="col-lg-3">
                                <label>
                                    Product Stock
                                </label>
                                <input name="productStock" onChange={this.handleInputChange} type="text" placeholder="stock" value={this.state.stock} className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group col-lg-12 mb-4 p-0">
                            <div>
                                Select Colors 
                            </div>
                            <label className="container1">
                                <input type="checkbox" value="red" onChange={this.updateColor}/>
                                <span className="checkmark red" ></span>
                            </label>
                            <label className="container1">
                                <input type="checkbox" value="blue" onChange={this.updateColor}/>
                                <span className="checkmark blue" ></span>
                            </label>
                            <label className="container1">
                                <input type="checkbox" value="green" onChange={this.updateColor}/>
                                <span className="checkmark green" ></span>
                            </label>
                            <label className="container1">
                                <input type="checkbox" value="pink" onChange={this.updateColor}/>
                                <span className="checkmark pink" ></span>
                            </label>
                            <label className="container1">
                                <input type="checkbox" value="yellow" onChange={this.updateColor}/>
                                <span className="checkmark yellow" ></span>
                            </label>
                        </div>
                        <div className="form-group images-panel pt-5">
                       <ul className="col-lg-12">
                            {
                                this.state.images?this.state.images.map((item,index)=>{
                                    return(
                                        <li>
                                             <img className="thumbnail"  src={"./assets/images/products/"+this.props.location.query.catName+"/"+ item}/>
                                             <span className="btn-remove btn-danger" data-id={item} onClick={this.removeImage}>Remove</span>   
                                        </li>
                                    )
                                }):""
                            }
                        </ul>
                       </div>   

                       <div className="form-group">
                            <button className="btn btn-danger" onClick={this.UpdateProductItem}>Update</button>
                        </div>
                    </div>
                    
                </form>
                
            </div>
        )
    }
}

export default UpdateProduct;
