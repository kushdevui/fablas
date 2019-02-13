import React from 'react';
import { faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./product-card.scss";

const ProductCard = () =>{
    return(
        <div className="border pb-4">
            <img src="./assets/images/product-image.png" className="img-fluid"/>
            <div className="d-flex price-container">
                <div>
                    <h6 className="pt-4 pl-2 mb-0">Scrub n Bright</h6>
                    <span className="d-block pl-2"><small>Homecare</small></span>
                    <div className="pl-2">
                        <span><FontAwesomeIcon icon={faStar } style={{color:'#000000'}} size="sm" /></span>
                        <span><FontAwesomeIcon icon={faStar } style={{color:'#000000'}} size="sm" /></span>
                        <span><FontAwesomeIcon icon={faStar } style={{color:'#000000'}} size="sm" /></span>
                        <span><FontAwesomeIcon icon={faStar } style={{color:'#000000'}} size="sm" /></span>
                        <span><FontAwesomeIcon icon={faStar } style={{color:'#000000'}} size="sm" /></span>
                    </div>
                </div>
                <div className="pt-4 pr-2 text-center">
                    <h4>$150</h4>
                    <span className="text-muted">$450</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;