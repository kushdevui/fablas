import React from 'react';

import "./inner-header.scss";

const INNERHEADER = (props) =>{
    return(
        <div className="row inner-header-tile">
            <div className="col-lg-11 pl-5">
                <h1>{props.title}</h1>
                <p>{props.subTitle}</p>
                <ul className="breadcrums">
                    <li>{props.category}</li>
                    <li>{props.subCategory}</li>
                </ul>
            </div>
        </div>
    )
}

export default INNERHEADER;
