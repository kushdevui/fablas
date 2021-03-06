import React,{Component} from "react";
import { connect } from 'react-redux';
import {addToDo} from '../../redux/actions/globalActions';
import axios from "axios";
import Notifications, { notify,toastColor } from 'react-notify-toast'
import CKEditor from 'ckeditor4-react';
import { dirname } from "path";


class AddProduct extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.HandleCategoryChange = this.HandleCategoryChange.bind(this);
        this.HandleEditorChangeDescription = this.HandleEditorChangeDescription.bind(this);
      //  this.HandleEditorChangeOtherDetails = this.HandleEditorChangeOtherDetails.bind(this);
        this.HandleEditorChangeFeature = this.HandleEditorChangeFeature.bind(this);
        this.HandleEditorChangeUsage = this.HandleEditorChangeUsage.bind(this);

        this.AddNewProduct = this.AddNewProduct.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
      //  this.uploadImage = this.uploadImage.bind(this);
        this.state = {
            currDirectory:"Homecare",
            subCat : [],
            loading: true,
            uploading: false,
            selectedCategory:"",
            filesName:[],
            product:{
                images:{}
            },
            message:"",
            imageUploadStatus:""
        }
    }
    
    componentDidMount(){
        this.props.onAddTodo();
    }

    onChange = e => {
       this.state.filesName.push(e.target.files[0]['name']);
        this.setState({
            product:{
                ...this.state.product,
                images:[
                    {
                        file:e.target.files[0],
                        path:this.state.filesName
                    }
                ]
            }
        })
        if(this.state.product){
           // console.log(this.state.product.image[0].file);
            const formData = new FormData();
            formData.append('avatar',e.target.files[0]);
            axios.post(`http://fablas.com/uploadImage.php?category=${this.state.currDirectory}`, formData,{
               headers: {
                   'content-type': 'multipart/form-data'
               }
            }).then(res=>{
               alert("Image Uploaded");
            });
           this.setState({
               imageUploadStatus:"Image Uploaded",  
           })
        }
    }

    HandleEditorChangeDescription(event){
        const data = event.editor.getData();
         this.setState({
            product:{
               ...this.state.product,
               'description':data
            }
        })
    }

    HandleEditorChangeFeature(event){
        const data = event.editor.getData();
         this.setState({
            product:{
               ...this.state.product,
               'productFeature':data
            }
        })
    }

    HandleEditorChangeUsage(event){
        const data = event.editor.getData();
         this.setState({
            product:{
               ...this.state.product,
               'productUsage':data
            }
        })
    }
    
    // HandleEditorChange(event){
    //     const data = event.editor.getData();
    //    console.log("ckEditoName",event.editor);
    //     // var name = event.editor.name;
    //     // if(name=="editor13"){
    //     //     name="productDescription"
    //     // }
    //     // if(name=="editor14"){
    //     //     name="details"
    //     // }
    //     // if(name=="editor15"){
    //     //     name="productUsage"
    //     // }
    //     // if(name=="editor16"){
    //     //     name="productFeature"
    //     // }

    //     // this.setState({
    //     //     product:{
    //     //        ...this.state.product,
    //     //        [name]:data
    //     //     }
    //     // })
    //     // console.log(this.state.product)
    // }

    HandleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            product:{
                ...this.state.product,
                [name]: value
            }
        })
    }

    AddNewProduct(e){
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json'
        }
        axios.post('https://fablasnode.herokuapp.com/products/addProduct',
        {
            data:this.state.product
        },
        {"headers": headers}
        ).then(res=>{
            alert("Product Added successfullly");
            this.setState({
                message:"Product Added Successfuly"
            })
            window.location = "#/Dashboard";
        })
    }

    // uploadImage(e){
      
    // }
    

    HandleCategoryChange(event){
        var selectedCat = event.target.value;
        const headers = {
            'Content-Type': 'application/json'
        }
        axios.post('https://fablasnode.herokuapp.com/products/getSubcategory',
        {
            "cat_name": selectedCat
        },
        {"headers": headers}
        ).then(res=>{
            this.setState({
                subCat:res.data,
                currDirectory:selectedCat
            })
        })
    }

    render(){
        console.log(this.state.product);
        const CagegoryList = this.props.productList.map(item=>{
            return(
                <option data-id={item.categoryName}>
                   {item.categoryName}
                </option>
            )
        });

        const subCatlist = this.state.subCat.map(subCatItem=>{
            return (
                <option value={subCatItem.id} data-id={subCatItem.name}>
                    {subCatItem.name}
                </option>
            )
        })
        const imgPath = `./assets/images/products/` + this.state.currDirectory;
        const imgURL1 =  this.state.product.images[0]?this.state.product.images[0].path[0]:"";
        const showImage1 = imgPath + "/" + imgURL1;

        const imgURL2 =  this.state.product.images[0]?this.state.product.images[0].path[1]:"";
        const showImage2 = imgPath + "/" + imgURL1;

        const imgURL3 =  this.state.product.images[0]?this.state.product.images[0].path[2]:"";
        const showImage3 = imgPath + "/" + imgURL1;

        const imgURL4 =  this.state.product.images[0]?this.state.product.images[0].path[3]:"";
        const showImage4 = imgPath + "/" + imgURL1;

        const imgURL5 =  this.state.product.images[0]?this.state.product.images[0].path[4]:"";
        const showImage5 = imgPath + "/" + imgURL1;
        return(
           
            <div>
                <h4 className="mt-3">Add New Product</h4>
                {/* <p>{this.state.message}</p> */}
                <form method="post" >
                    <div className="row form-group">
                        <div className="col-lg-6">
                            <select name="category"  onChange={this.HandleCategoryChange} className="form-control">
                                <option>Select Product Category</option>
                                {CagegoryList}
                            </select>
                        </div>
                        <div className="col-lg-6">
                            <select onChange={this.HandleChange} name="subCategory" className="form-control">
                                <option>Select Product Sub-Category</option>
                                {subCatlist}
                            </select>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-lg-6">
                            <input type="text" value={this.state.metaDescription}  onChange={this.HandleChange} name="metaDescription" placeholder="Meta Description" className="form-control"/>
                        </div>
                        <div className="col-lg-6">
                            <input type="text" value={this.state.metaTitle}  onChange={this.HandleChange} name="metaTitle" placeholder="Title" className="form-control"/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-lg-6">
                            <input type="text" value={this.state.metaClonical}  onChange={this.HandleChange} name="metaClonical" placeholder="clonical link" className="form-control"/>
                        </div>
                        <div className="col-lg-6">
                            <input type="text" value={this.state.productName}  onChange={this.HandleChange} name="productName" placeholder="Product Name" className="form-control"/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-lg-12">
                        <label>Product Description</label>
                        <CKEditor id="productDescription" name="editor1" onChange={this.HandleEditorChangeDescription} className="form-control" 
                                    data={this.state.product.productDescription}/>
                        </div>
                        
                    </div>
                    {/* <div className="row form-group">
                            <div className="col-lg-12">
                            <label>other Details</label>
                            <CKEditor onChange={this.HandleEditorChangeOtherDetails} name="details" className="form-control"
                                        data={this.state.details}/>
                          
                            </div>
                    </div> */}
                    <div className="row form-group">
                        <div className="col-lg-6">
                            <input name="stock"  onChange={this.HandleChange} type="text" placeholder="stock" className="form-control"/>
                        </div>
                        <div className="col-lg-3">
                            <input name="price"  onChange={this.HandleChange} type="text" placeholder="price" className="form-control"/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-lg-6">
                            <label>Product Usage</label>
                            <CKEditor onChange={this.HandleEditorChangeUsage} name="productUsage" className="form-control" 
                                        data={this.state.productUsage}/>
                        </div>
                        <div className="col-lg-6">
                            <label>Product Features</label>
                         <CKEditor onChange={this.HandleEditorChangeFeature} name="productFeature" className="form-control" data={this.state.productFeature}/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-lg-3">
                         <input type='file'  onChange={this.onChange} />
                        </div>
                        <div className="col-lg-1">
                            
                        <img src={showImage1} width="50" height="50"/>
                         {/* <div className="btn btn-success" onClick={this.uploadImage}>Upload</div> */}
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-lg-3">
                         <input type='file'  onChange={this.onChange} />
                        </div>
                        <div className="col-lg-1">
                        <img src={showImage2} width="50" height="50"/>
                        {/* <div className="btn btn-success" onClick={this.uploadImage}>Upload</div> */}
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-lg-3">
                         <input type='file'  onChange={this.onChange} />
                        </div>
                        <div className="col-lg-1">
                        <img src={showImage3} width="50" height="50"/>
                        {/* <div className="btn btn-success" onClick={this.uploadImage}>Upload</div> */}
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-lg-3">
                         <input type='file'  onChange={this.onChange} />
                        </div>
                        <div className="col-lg-1">
                        <img src={showImage4} width="50" height="50"/>
                        {/* <div className="btn btn-success" onClick={this.uploadImage}>Upload</div> */}
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-lg-3">
                         <input type='file'  onChange={this.onChange} />
                        </div>
                        <div className="col-lg-1">
                        <img src={showImage5} width="50" height="50"/>
                        {/* <div className="btn btn-success" onClick={this.uploadImage}>Upload</div> */}
                        </div>
                    </div>

                    <div className="row text-right form-group">
                    <div className="col-lg-6">
                      <input  type="button" onClick={this.AddNewProduct} name="submit" value="Add Product" className="btn btn-danger"/>
                    </div>
                 </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onAddTodo: () => {
        dispatch(addToDo());
      }
    };
};   

const mapStateToProps = state =>{
    return {
        productList : state.productReducer.productList
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);
