import React from 'react';
import {Row,Col} from "reactstrap";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.scss";


const Hero = () =>{
    return(
        <div class="hero-banner">
            <img className="col-12 p-0 img-fluid" src="./assets/images/Homepage-Banner.jpg"/>
        </div>
    )
}

export default Hero;