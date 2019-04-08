import React from 'react';
import './service-item.scss';
const ServiceItem = (props) =>{
   // console.log(props);
    
    return(
        <div onClick={()=> props.handleModalClick(props.data)} className="p-3 service-item-tile text-center">
            {props.data.image}
            <div>{props.data.title}</div>
            <p>{props.data.description}</p>
        </div>
    )
}

export default ServiceItem;