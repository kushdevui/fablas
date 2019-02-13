/**
 *  Home Component { Rendering the complete layout of landing page }
 */


// Dependencies
import React from "react";
import Header from "../Header/header";
import Hero from "../Hero/hero";
import Products from "../Products/products";
import CenterMode from "../Retail/retail";
import DirectorMessage from "./DirectorMessage/directorMessage";
import ServiceSection from "./Services/services";
import WhyChooseUs from "./WhyChooseUs/whyChooseUs";
import BulkOrders from "./BulkOrders/bulkOrders";
import Associations from "./Association/association";
import FunFacts from "./FunFacts/funFacts";
import Footer from "../Footer/footer";

// import SignUpForm from "../SignUpForm/signupform";
import Search from "../Search/search";

// Styles & Images
// import "bootstrap/dist/css/bootstrap.min.css";
import "./home.scss";


const Home = () =>{
    return(
        <div>
            <Header/>
            <Hero/>
            <Products/>
            <CenterMode/>
            <DirectorMessage/>
            <ServiceSection/>
            <WhyChooseUs/>
            <BulkOrders/>
            <Associations/>
            <FunFacts/>
            <Footer/>

        </div>     
    );
};

export default Home;
