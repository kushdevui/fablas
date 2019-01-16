/**
 *  Home Component { Rendering brand logo and optimize it as per the viewport }
 */

// Dependencies
import React from "react";
import { Picture } from 'react-responsive-picture';


const Logo = (props) =>{
    return(
        <Picture
        sources = {[
            {
                srcSet: "../../assets/images/Logo.png 2x",
                media: "(max-width: 1024px)",
            },
            {
                srcSet: "../../assets/images/Logo-l.png",
                  media: "(max-width: 1440px)",
            },
            {
                srcSet: "../../assets/images/Logo.png",
                type: "image/webp"
            }
        ]}
    />
    )
};

export default Logo;


