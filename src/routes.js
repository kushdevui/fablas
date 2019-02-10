import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/AboutUs/Aboutus";
import Services from "./components/Services/services";

// Import Components;
import Layout from "./container/Layout/layout";

class Routes extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Route path="/" exact  component={Home}/>
                <Route path="/About" exact  component={About}/>
                <Route path="/Services" exact  component={Services}/>
            </div>
        );
    }
}



export default Routes; 