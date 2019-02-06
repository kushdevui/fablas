import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/home";

// Import Components;
import Layout from "./container/Layout/layout";

class Routes extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Route path="/" exact  component={Home}/>
            </div>
        );
    }
}



export default Routes; 