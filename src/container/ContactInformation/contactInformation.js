import React from 'react';
import { faShoppingCart,faMapMarked,faHourglass  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'

import "./contact-information.scss";
const ContactInformation = () =>{
    return(
        <div className="contact-information">   
            <h5>
                Contact Information :
            </h5>
            <div className="contact-item d-flex">
                <div className="p-2"><FontAwesomeIcon icon={faMapMarked } style={{color:'red'}} size="lg" /></div>
                <div className="p-2">
                    <span>2151/3D, New Patel Nagar, Delhi- 08</span>
                    <span> +91-11-25891350,  25892350 </span>
                    <span> info@fablas.com</span>
                </div>
            </div>
            <h5 className="pt-4">
                Business Hours :
            </h5>
            <div className="contact-item d-flex ">
                <div className="p-2"><FontAwesomeIcon icon={faHourglass } style={{color:'red'}} size="lg" /></div>
                <div className="p-2">
                    <span>Monday – Saturday</span>
                    <span>9:30 am to 6:30 pm</span>
                </div>
            </div>
        </div>
    )
}

export default ContactInformation;