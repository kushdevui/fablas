import React from "react";
import "./app.scss";
import { hot } from "react-hot-loader";
import Routes from "./routes";
import { BrowserRouter,HashRouter } from "react-router-dom";
import { browserHistory} from "react-router";
//import { HashRouter } from 'react-router-dom';

const App = ()=> {
    return(
        <HashRouter history = {browserHistory}>
            <Routes></Routes>
        </HashRouter>
    );
};


export default hot(module)(App);

