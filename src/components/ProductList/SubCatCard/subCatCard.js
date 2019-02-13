import React from "react";

import "./sub-cat.scss";

const SubCatCard = (props) =>{
    return(
        <div className="sub-cat-card-section mb-5">
            <img src="./assets/images/sub-cat.png" className="img-fluid"/>
            <p className="pt-2 pb-1 mb-0">Title</p>
            <span>Desc</span>
        </div>
    )
}

export default SubCatCard;