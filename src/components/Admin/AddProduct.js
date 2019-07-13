import React,{Component} from "react";
import { connect } from 'react-redux';
import {addToDo} from '../../redux/actions/globalActions';
import axios from "axios";
import Notifications, { notify,toastColor } from 'react-notify-toast'
import CKEditor from 'ckeditor4-react';


class AddProduct extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.HandleCategoryChange = this.HandleCategoryChange.bind(this);
        this.HandleEditorChange = this.HandleEditorChange.bind(this);
        this.AddNewProduct = this.AddNewProduct.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
        this.state = {
            subCat : [],
            loading: true,
            uploading: false,
            product:{
                images:{}
            },
            message:"",
            
        }
    }
    

    
    componentDidMount(){
        this.props.onAddTodo();
    }

    onChange = e => {
        // const errs = [] ;
        // const files = Array.from(e.target.files)
        // if (files.length > 3) {
        //     const msg = 'Only 3 images can be uploaded at a time'
        //     return this.toast(msg, 'custom', 2000, toastColor)  
        // }
        // const formData = new FormData()
        // const types = ['image/png', 'image/jpeg', 'image/gif'];
        // var filesName = [];
        // files.forEach((file, i) => {
        //     if (types.every(type => file.type !== type)) {
        //       errs.push(`'${file.type}' is not a supported format`)
        //     }
      
        //     if (file.size > 150000) {
        //       errs.push(`'${file.name}' is too large, please pick a smaller file`)
        //     }
        //     filesName.push(file.name);
        //     formData.append(i, file)
        // })
        // this.setState({ uploading: true });

        // this.setState({
        //     product:{
        //         ...this.state.product,
        //         images :[
        //             {
        //                 "path":filesName
        //             }
        //         ]
        //     }
        // })
        //console.log(e.target.files[0]);
        this.setState({
            product:{
                ...this.state.product,
                images:[
                    {
                        path:e.target.files[0]
                    }
                ]
            }
        })
    }


    
    HandleEditorChange(event){
        const data = event.editor.getData();
        var name = event.editor.name;
        if(name=="editor1"){
            name="description"
        }
        if(name=="editor2"){
            name="details"
        }
        if(name=="editor3"){
            name="productUsage"
        }
        if(name=="editor4"){
            name="productFeature"
        }

        this.setState({
            product:{
               ...this.state.product,
               [name]:data
            }
        })
    }

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
            this.setState({
                message:"Product Added Successfuly"
            })
        })

      //  let res = await this.uploadFile(this.state.product.images.path);
        
        const formData = new FormData();
        formData.append('avatar',this.state.product.images[0].path);
         axios.post("http://fablas.com/uploadImage.php", formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        


    }
    

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
                subCat:res.data
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
        return(
            <div>
                <h4 className="mt-3">Add New Product</h4>
                {/* <p>{this.state.message}</p> */}
                <form method="post" onSubmit={this.AddNewProduct}>
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
                            <input type="text" value={this.state.metaClonical}  onChange={this.HandleChange} name="metaClonical" placeholder=" clonical link" className="form-control"/>
                        </div>
                        <div className="col-lg-6">
                            <input type="text" value={this.state.productName}  onChange={this.HandleChange} name="productName" placeholder="Product Name" className="form-control"/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-lg-12">
                        <label>Product Description</label>
                        <CKEditor onChange={this.HandleEditorChange} name="description" className="form-control" 
                                    data={this.state.product.description}/>
                        </div>
                        
                    </div>
                    <div className="row form-group">
                            <div className="col-lg-12">
                            <label>other Details</label>
                            <CKEditor onChange={this.HandleEditorChange} name="details" className="form-control"
                                        data={this.state.details}/>
                            </div>
                    </div>
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
                            <CKEditor onChange={this.HandleEditorChange} name="productUsage" className="form-control" 
                                        data={this.state.productUsage}/>
                        </div>
                        <div className="col-lg-6">
                            <label>Product Features</label>
                         <CKEditor onChange={this.HandleEditorChange} name="productFeature" className="form-control" data={this.state.productFeature}/>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-lg-3">
                        <label>Upload maximum 5 images in resolution(550X550)</label>
                         <input type='file'  onChange={this.onChange} />
                        </div>
                    </div>

                    <div className="row text-right form-group">
                    <div className="col-lg-6">
                      <input  type="submit" name="submit" value="Add Product" className="btn btn-danger"/>
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
