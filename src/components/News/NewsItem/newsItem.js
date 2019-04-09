import React from "react";
import "./news-item.scss";

const NewsItem = (props) =>{
    console.log(props.data);
    return(
        <div className="news-item">
            <img src={props.data.image} className="img-fluid"/>
            <h6>{props.data.title}</h6>
            <p>{props.data.year}</p>
            <p className="desc">{props.data.description}</p>
            <button className="btn btn-success">Read More</button>
        </div>
    )
}

export default NewsItem;