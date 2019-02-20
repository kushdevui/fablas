import React from "react";

import "./sub-cat.scss";

const SubCatCard = (props) =>{
    if(props.images){
        var showImg = props.images[0]
    }
    return(
        <div className="sub-cat-card-section mb-5 ">
            <div className="border">
                <img src={showImg} className="img-fluid"/>
            </div>
            <p className="pt-2 pb-1 mb-0">{props.name}</p>
            <span></span>
        </div>
    )
}

export default SubCatCard;