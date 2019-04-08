import React from 'react';
import './section-heading.scss';

const SECTIONHEADING = (props) =>{
    return(
        <div className="row text-center section-head-tile">
            <h1 className="col-lg-12">{props.title}</h1>
            <p className="col-lg-12 m-0">{props.subTitle}</p>
        </div>
    )
}

export default SECTIONHEADING;