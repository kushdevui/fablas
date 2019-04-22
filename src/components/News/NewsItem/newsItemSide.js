import React from "react";
import "./news-item.scss";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
const NewsItem = (props) =>{
    //console.log(props);
    return(
        <div className="news-list mt-4">
            <div className="row">
                <div className="col-lg-4">
                    <img src={props.data.image} className="img-fluid"/>
                </div>
                <div className="col-lg-8 item">
                    <p className="side-desc">{props.data.description}</p>
                    <Link to={`/NewsDetails/${props.data.id}`}>READ MORE</Link>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;