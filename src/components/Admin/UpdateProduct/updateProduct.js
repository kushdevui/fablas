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
            productDescription:"",
            details:"",
            stock:"",
            filesName:[],
            productPrice:"",
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
        this.HandleEditorChange = this.HandleEditorChange.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
    }


    handleInputChange(event){
        const target = event.target;
        const value =  event.target.value;
        const name = target.name;
        this.setState({
            [name]:value
        })
    }


    onChange = e => {

        this.state.filesName.push(e.target.files[0]['name']);
        this.setState({
                ...this.state.product,
                images:[
                    {
                        file:e.target.files[0],
                        path:this.state.filesName
                    }
                ]
        })
    }


    HandleEditorChange(event){
        const data = event.editor.getData();
        var name = event.editor.name;
        if(name=="editor1"){
            name="productFeature"
        }
        if(name=="editor2"){
            name="productDescription"
        }
        if(name=="editor3"){
            name="productUsage"
        }
        

        this.setState({
               ...this.state,
               [name]:data
        })
    }

    removeImage(event){
        var array = this.state.images[0].path;
        var image = event.target.dataset.id;
        var index = array.indexOf(image);
        if(index !== -1){
            array.splice(index,1);
            this.state.images[0].path = array
            console.log(array)
            this.setState({
                images:this.state.images
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
            alert("Updated Product!");
        })
    }

    uploadImage(e){
        const formData = new FormData();
        const catName = this.props.location.query.catName;
        console.log(catName);
        formData.append('avatar',this.state.images[0].file);
         axios.post(`http://fablas.com/uploadImage.php?category=${catName}`, formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(res=>{
            alert("Image Uploaded Successfully");
        });
        this.setState({
            imageUploadStatus:"Image Uploaded",  
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
                console.log(item)
                this.setState({
                    productId:item.data[0].id,
                    productName:item.data[0].productName,
                    productFeature:item.data[0].productFeature,
                    productSize:item.data[0].productSize,
                    productDescription:item.data[0].description,
                    images:item.data[0].images,
                    details:item.data[0].details,
                    productUsage:item.data[0].productUsage,
                    stock:item.data[0].stock,
                    productPrice:item.data[0].price,
                    metaDescription:item.data[0].metaDescription,
                    metaTitle:item.data[0].metaTitle,
                    metaClonical:item.data[0].metaClonical,
                })
            })
    }

    render(){
        console.log(this.state);
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
                                <input type="text" onChange={this.handleInputChange} name="productPrice"  value={this.state.productPrice} className="form-control"/>
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
                                <CKEditor onChange={this.HandleEditorChange} name="productFeature" className="form-control" value={this.state.productFeature}
                                data={this.state.productFeature}/>
                            </div>
                            <div className="col-lg-6">
                                <label>
                                Product Description
                                </label>
                                <CKEditor  name="productDescription" onChange={this.HandleEditorChange} className="form-control" value={this.state.productDescription}
                                data={this.state.productDescription}/>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-lg-6">
                                <label>
                                    Product Usage
                                </label>
                                <CKEditor  name="productUsage" onChange={this.HandleEditorChange} className="form-control" value={this.state.productUsage}
                                data={this.state.productUsage}/>
                            </div>
                            <div className="col-lg-3">
                                <label>
                                    Product Stock
                                </label>
                                <input name="productStock" onChange={this.handleInputChange} type="text" placeholder="stock" value={this.state.stock} className="form-control"/>
                            </div>
                        </div>
                        {/* <div className="form-group col-lg-12 mb-4 p-0">
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
                        </div> */}
                        <div className="form-group images-panel pt-5">
                       <ul className="col-lg-12">
                            {
                                this.state.images[0]?this.state.images[0]['path'].map((item,index)=>{
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
                       <div className="row form-group">
                        <div className="col-lg-3">
                         <input type='file'  onChange={this.onChange} />
                        </div>
                        <div className="col-lg-1">
                         <div className="btn btn-success" onClick={this.uploadImage}>Upload</div>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-lg-3">
                         <input type='file'  onChange={this.onChange} />
                        </div>
                        <div className="col-lg-1">
                        
                        <div className="btn btn-success" onClick={this.uploadImage}>Upload</div>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-lg-3">
                         <input type='file'  onChange={this.onChange} />
                        </div>
                        <div className="col-lg-1">
                       
                        <div className="btn btn-success" onClick={this.uploadImage}>Upload</div>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-lg-3">
                         <input type='file'  onChange={this.onChange} />
                        </div>
                        <div className="col-lg-1">
                       
                        <div className="btn btn-success" onClick={this.uploadImage}>Upload</div>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-lg-3">
                         <input type='file'  onChange={this.onChange} />
                        </div>
                        <div className="col-lg-1">
                       
                        <div className="btn btn-success" onClick={this.uploadImage}>Upload</div>
                        </div>
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
