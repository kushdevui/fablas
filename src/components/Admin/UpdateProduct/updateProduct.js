import React,{Component} from 'react';
import axios from "axios";
import "./update-form.scss";
import { faArrowLeft,faLongArrowAltLeft,faSearch  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import header from '../../Header/header';

class UpdateProduct extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state={
            productSubCatId:this.props.location.query.subCatId,
            productId:"",
            productName:"",
            productFeature:"",
            productUsage:"",
            productStock:"",
            productImages:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.UpdateProductItem = this.UpdateProductItem.bind(this);
        this.removeImage = this.removeImage.bind(this);
    }


    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]:value
        })
    }

    removeImage(event){
        var array = this.state.productImages;
        var image = event.target.dataset.id;
        console.log(image);
        var index = array.indexOf(image);
        if(index !== -1){
            array.splice(index,1);
            this.setState({
                productImages:array
            })
        }
    }

    UpdateProductItem(e){
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json'
        }
        axios.post("https://fablasnode.herokuapp.com/products/getProductById",{
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
               // console.log(item);
                this.setState({
                    productId:item.data[0].id,
                    productName:item.data[0].productName,
                    productFeature:item.data[0].productFeature,
                    productUsage:item.data[0].productUsage,
                    productStock:item.data[0].stock,
                    productImages:item.data[0].images[0]['path']
                })
            })
    }

    render(){
       // console.log(this.state);
        return(
            <div className="update-form">
                <div className="admin-header row">
                    <div className="col-lg-12">
                    <FontAwesomeIcon icon={faLongArrowAltLeft } style={{color:'white'}} size="lg mr-3" /> {this.state.productName}
                    </div>
                </div>
                <form className="row pt-5">
                    <div className="col-lg-5">
                        <div className="form-group">
                            <input type="text"  name="productSubCat" className="form-control" value={this.props.location.query.subCatId} readOnly/>
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={this.handleInputChange} name="productName"  value={this.state.productName} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <textarea name="productFeature" onChange={this.handleInputChange} className="form-control" value={this.state.productFeature}></textarea>
                        </div>
                        <div className="form-group">
                            <textarea name="productUsage" onChange={this.handleInputChange} className="form-control" value={this.state.productUsage}></textarea>
                        </div>
                        <div className="form-group">
                            <input name="productStock" onChange={this.handleInputChange} type="text" placeholder="stock" value={this.state.stock} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-danger" onClick={this.UpdateProductItem}>Update</button>
                        </div>
                    </div>
                    <div className="col-lg-5 images-panel">
                        <ul>
                            {
                                this.state.productImages?this.state.productImages.map((item,index)=>{
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
                </form>
            </div>
        )
    }
}

export default UpdateProduct;
