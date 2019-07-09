import React,{Component} from "react";
import { connect } from 'react-redux';
import {addToDo} from '../../redux/actions/globalActions';
import axios from "axios";

class AddProduct extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.HandleCategoryChange = this.HandleCategoryChange.bind(this);
        this.AddNewProduct = this.AddNewProduct.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
        this.state = {
            subCat : [],
            product:{},
            message:""
        }
    }


    componentDidMount(){
        this.props.onAddTodo();
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
        console.log(this.state);
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
                <p>{this.state.message}</p>
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
                        <input type="text"  onChange={this.HandleChange} name="productName" placeholder="Meta Description" className="form-control"/>
                    </div>
                    <div className="col-lg-6">
                        <input type="text"  onChange={this.HandleChange} name="productName" placeholder="Title" className="form-control"/>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-lg-6">
                        <input type="text"  onChange={this.HandleChange} name="productName" placeholder=" clonical link" className="form-control"/>
                    </div>
                    <div className="col-lg-6">
                        <input type="text"  onChange={this.HandleChange} name="productName" placeholder="Product name" className="form-control"/>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-lg-6">
                       <textarea  onChange={this.HandleChange} name="productUsage" placeholder="Description" className="form-control"></textarea>
                    </div>
                    <div className="col-lg-6">
                       <textarea  onChange={this.HandleChange} name="brand" placeholder="Other Details" className="form-control"></textarea>
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
                        <input name="price"  onChange={this.HandleChange} type="text" placeholder="Usage" className="form-control"/>
                    </div>
                    <div className="col-lg-6">
                        <input name="price"  onChange={this.HandleChange} type="text" placeholder="Features" className="form-control"/>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-lg-6">
                        <input name="price"  onChange={this.HandleChange} type="text" placeholder="Colors" className="form-control"/>
                    </div>
                </div>
                <div className="row text-right form-group">
                    <div className="col-lg-4">
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
