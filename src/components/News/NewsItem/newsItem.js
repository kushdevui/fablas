import React from "react";
import "./news-item.scss";

const NewsItem = () =>{
    return(
        <div className="news-item">
            <img src="./assets/images/image-1.jpg" className="img-fluid"/>
            <h6>Standard Post With Image</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel.</p>
            <button className="btn btn-success">Read More</button>
        </div>
    )
}

export default NewsItem;