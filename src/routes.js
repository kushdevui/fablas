import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/AboutUs/Aboutus";
import Services from "./components/Services/services";
import Career from "./components/Career/career";
import ContactUs from "./components/ContactUs/contactUs";
import Shop from "./components/Shop/shop";
import ProductsList from "./components/ProductList/productList";

// Import Components;
import Layout from "./container/Layout/layout";

class Routes extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Route path="/" exact  component={Home}/>
                <Route path="/About" exact  component={About}/>
                <Route path="/Services" exact  component={Services}/>
                <Route path="/Career" exact component={Career}/>
                <Route path="/Contact" exact component={ContactUs}/>
                <Route path="/Shop" exact component={Shop}/>
                <Route name="products" path="/Products:catId" exact component={ProductsList}/>
            </div>
        );
    }
}



export default Routes; 