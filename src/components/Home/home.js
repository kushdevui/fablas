/**
 *  Home Component { Rendering the complete layout of landing page }
 */


// Dependencies
import React from "react";
import Header from "../Header/header";
import Hero from "../Hero/hero";
import FeaturedProducts from "../Products/FeaturedProducts/featuredProducts";
import CenterMode from "../Retail/retail";

// import SignUpForm from "../SignUpForm/signupform";
import Search from "../Search/search";

// Styles & Images
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.scss";


const Home = () =>{
    return(
        <div>
            <div className="row">
                <Header/>
            </div>
            <div className="row">
                <Hero/>
            </div>
            <FeaturedProducts/>
            <CenterMode/>
        </div>     
    );
};

export default Home;
