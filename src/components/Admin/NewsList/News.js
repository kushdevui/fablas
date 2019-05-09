import React, {Component} from "react";
import {connect} from "react-redux";
import Sidenav from "../Sidenav";
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';


class NewsList extends Component{
    constructor(props){
        super(props);
        this.state={
            newsList:"",
        }
        
    }

    componentDidMount(){
        const headers = {
            'Content-Type': 'application/json'
        }
       axios.get("https://fablasnode.herokuapp.com/news/getNews",{
       }, {"headers": headers}).then(res=>{
           this.setState({
            newsList : res.data,
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
                    <div className="row text-left">
                        <div className="col-lg-12 p-0">
                            <ul className="listing-wrapper">
                                <li>
                                    <div className="row">
                                        <div className="col-lg-3 inner-list">
                                            <strong>News Title</strong>
                                        </div>
                                        <div className="col-lg-5 inner-list">
                                            <strong>News Date</strong>
                                        </div>
                                        <div className="col-lg-2 inner-list">
                                            <strong>News Image</strong>
                                        </div>
                                        <div className="col-lg-2 inner-list">
                                           <strong> News Status</strong>
                                        </div>
                                    </div>
                                </li>
                                {
                                    this.state.newsList?this.state.newsList.map(item=>{
                                        return(
                                            <li>
                                                <div className="row">
                                                    <div className="col-lg-3 inner-list">
                                                        {item.newsTitle}
                                                    </div>
                                                    <div className="col-lg-5 inner-list">
                                                        {item.addedOn}
                                                    </div>
                                                    <div className="col-lg-2 inner-list">
                                                        <img src={item.newsImage} width="100" height="100"/>
                                                    </div>
                                                    <div className="col-lg-2 inner-list">
                                                        <a href="">Update</a>
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





export default NewsList;