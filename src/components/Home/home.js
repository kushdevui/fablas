/**
 *  Home Component { Rendering the complete layout of landing page }
 */


// Dependencies
import React from "react";
import Header from "../Header/header";
// import SignUpForm from "../SignUpForm/signupform";
import {Row} from "reactstrap";
import Search from "../Search/search";

// Styles & Images
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.scss";


const Home = () =>{
    return(
        <Row>
            <Header headerTemplate="landing"/>
            {/* <Search/>
            <SignUpForm/> */}
        </Row>     
    );
};

export default Home;
