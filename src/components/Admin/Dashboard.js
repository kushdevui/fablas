import React, {Component} from "react";
import {connect} from "react-redux";
import Sidenav from "./SideNav";
import {addToDo} from '../../redux/actions/globalActions';
import axios from 'axios';
import "./dashboard.scss";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';


class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            subCategories:"",
            productList:"",
            selectedSubCat:"",
            selectedCat:""

        }
        this.renderSubCategories = this.renderSubCategories.bind(this);
        this.renderProductList = this.renderProductList.bind(this);
    }

    componentDidMount(){
        this.props.onAddToDo();
    }

    HandleDeleteProduct = (productId,SubCatId) =>{
        const headers = {
            'Content-Type':'application/json'
        }
        axios.post('https://fablasnode.herokuapp.com/products/deleteProduct',
        {
            data:{
                "subCategoryId" : SubCatId,
                "productId":productId
            }
        },
        {"headers":headers}
        ).then(res=>{
           alert("Product Delelted Successfully!");
           window.location.href = "http://fablas.com/#/dashboard";
        })
    }

    renderSubCategories(event){
        const catName = event.target.dataset.id;
        const headers = {
            'Content-Type': 'application/json'
        }
        axios.post('https://fablasnode.herokuapp.com/products/getSubcategory',
        {
            "cat_name": catName
        },
        {"headers": headers}
        ).then(res=>{
            this.setState({
                subCategories:res.data,
                selectedCat:catName
            })
        })
    }

    renderProductList(event){
        const subCatId = event.target.dataset.id;
        const headers = {
            'Content-Type': 'application/json'
        }
       axios.post("https://fablasnode.herokuapp.com/products/getProductBySubcategory",{
        "id":subCatId
       }, {"headers": headers}).then(list=>{
           this.setState({
            productList : list.data[0].productsList,
            selectedSubCat:subCatId
           })
       })
    }

    render(){
        return(
            <div className="dashboard-tile row">
                <div className="col-lg-2 p-0">
                        <Sidenav/>
                </div>
                <div class="col-lg-10">
                    <div class="row">
                    <div className="col-lg-6 p-0">
                        <ul className="listing-wrapper">
                        <li><strong>Category Name</strong></li>
                        {
                            this.props.productList.map((item)=>{
                                return(
                                    <li onClick={this.renderSubCategories} data-id={item.categoryName}>{item.categoryName}</li>
                                )
                            })
                        }
                        </ul>
                    </div>
                    <div className="col-lg-6">
                    <ul className="listing-wrapper">
                        <li><strong>Sub Category</strong></li>
                        {
                            this.state.subCategories?this.state.subCategories.map(item=>{
                                return(
                                    <li data-id={item.id} onClick={this.renderProductList}>{item.name}</li>
                                )
                            }):""
                        }
                    </ul>
                </div>
                </div>
                    <div className="row text-left">
                        <div className="col-lg-12 p-0">
                            <ul className="listing-wrapper">
                                <li>
                                    <div className="row">
                                        <div className="col-lg-4 inner-list">
                                            Product Name
                                        </div>
                                        <div className="col-lg-3 inner-list">
                                            Product Features
                                        </div>
                                        <div className="col-lg-3 inner-list">
                                            Product Usage
                                        </div>
                                        <div className="col-lg-2 inner-list">
                                            Status
                                        </div>
                                    </div>
                                </li>
                                {
                                    this.state.productList?this.state.productList.map(item=>{
                                        return(
                                        <li>
                                            <div className="row">
                                                <div className="col-lg-4 inner-list">
                                                  
                                                    {
                                                        item.productName
                                                    }
                                                </div>
                                                <div className="col-lg-3 inner-list">
                                                   
                                                    {
                                                        item.productFeature
                                                    }
                                                </div>
                                                <div className="col-lg-3 inner-list">
                                                    {
                                                        item.productUsage
                                                    }
                                                </div>
                                                <div className="col-lg-2">
                                                    <Link to={{ pathname: '/Dashboard/updateProduct', query: { productId: item.id , subCatId:this.state.selectedSubCat , catName:this.state.selectedCat} }}>
                                                        Update
                                                    </Link>
                                                    <div onClick={()=>this.HandleDeleteProduct(item.id,this.state.selectedSubCat)}>
                                                        Delete
                                                    </div>
                                                    {/* <Link to={"/updateProduct"} params={{ testvalue: "hello" }}>Update</Link> | Delete  */}
                                                </div>
                                            </div>
                                        </li>
                                        )
                                    }):""
                                }
                            </ul>
                        </div>
                </div>
                </div>
            </div>
        
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onAddToDo:()=>{
            dispatch(addToDo())
        }
    }
}

const mapStateToProps = state =>{
    return{
        productList : state.productReducer.productList
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);