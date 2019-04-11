import React from "react";
import "./news-item.scss";

const NewsItem = (props) =>{
    
    return(
        <div className="news-list mt-4">
            <div className="row">
                <div className="col-lg-4">
                    <img src={props.data.image} className="img-fluid"/>
                </div>
                <div className="col-lg-8 item">
                    <p className="side-desc">{props.data.description}</p>
                    <a href="">READ MORE</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;