import React from 'react';
import {Row,Col} from "reactstrap";

//import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.scss";
import { Picture } from 'react-responsive-picture';


const Hero = () =>{
    return(
        <div class="hero-banner row">
          <Picture
           className={'img-fluid'}
            sources = {[
            {
                srcSet: "./assets/images/Banner-600.jpg",
                media: "(max-width: 600px)",
            },
            {
                srcSet: "./assets/images/Banner-1366.jpg",
                media: "(max-width: 1440px)",
                
            },
            {
                srcSet: "./assets/images/Home-banner.jpg",
                type: "image/webp"
            }
        ]}
    />
            {/* <img className="col-lg-12 img-fluid" src="./assets/images/Home-banner.jpg"/> */}
        </div>
    )
}

export default Hero;