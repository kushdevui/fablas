import React from "react";
import "./app.scss";
import { hot } from "react-hot-loader";
import { BrowserRouter,HashRouter,Route,Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { Router } from 'react-router';
import { browserHistory} from "react-router";
import Home from "./components/Home/home";
import About from "./components/AboutUs/Aboutus";
import Services from "./components/Services/services";
import Career from "./components/Career/career";
import ContactUs from "./components/ContactUs/contactUs";
import Shop from "./components/Shop/shop";
import ProductsList from "./components/ProductList/productList";
import SellProductsList from "./components/SellProductsList/sellProductList"
import Cart from "./components/Cart/cart";
import store from "./redux/store";
const App = ()=> {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact  component={Home}/>
                    <Route path="/About" exact component={About}/>
                    <Route path="/Services" exact  component={Services}/>
                    <Route path="/Career" exact component={Career}/>
                    <Route path="/Contact" exact component={ContactUs}/>
                    <Route path="/Shop" exact component={Shop}/>
                    <Route path="/Products/:catId" exact  component={ProductsList}/>
                    <Route path="/Cart" exact  component={Cart}/>
                    <Route path='/ProductList/Product/:product_id' exact component={SellProductsList}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};


export default hot(module)(App);

