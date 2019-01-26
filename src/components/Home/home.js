/**
 *  Home Component { Rendering the complete layout of landing page }
 */


// Dependencies
import React from "react";
import Header from "../Header/header";
import Hero from "../Hero/hero";
<<<<<<< HEAD
import FeaturedProducts from "../Products/FeaturedProducts/featuredProducts";
import CenterMode from "../Retail/retail";
=======
>>>>>>> 677835a97823dbb7fb14c510b7f87072ff9171c1

// import SignUpForm from "../SignUpForm/signupform";
import Search from "../Search/search";

// Styles & Images
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.scss";


const Home = () =>{
    return(
<<<<<<< HEAD
        <div>
            <div className="row">
                <Header/>
            </div>
            <div className="row">
                <Hero/>
            </div>
            <FeaturedProducts/>
            <CenterMode/>
=======
        <div className="row">
            <Header/>
            <Hero/>
            {/* <Search/>
            <SignUpForm/> */}
>>>>>>> 677835a97823dbb7fb14c510b7f87072ff9171c1
        </div>     
    );
};

export default Home;
