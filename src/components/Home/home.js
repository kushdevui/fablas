/**
 *  Home Component { Rendering the complete layout of landing page }
 */


// Dependencies
import React from "react";
import Header from "../Header/header";
import Hero from "../Hero/hero";

// import SignUpForm from "../SignUpForm/signupform";
import Search from "../Search/search";

// Styles & Images
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.scss";


const Home = () =>{
    return(
        <div className="row">
            <Header/>
            <Hero/>
            {/* <Search/>
            <SignUpForm/> */}
        </div>     
    );
};

export default Home;
