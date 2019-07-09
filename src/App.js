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
import ProductDetail from "./container/ProductDetails/productDetails";
import News from "./components/News/News";
import NewsDetails from "./components/News/NewsDetails";
import Dashboard from "./components/Admin/Dashboard";
import NewsList from "./components/Admin/NewsList/News";
import UpdateProduct from "./components/Admin/UpdateProduct/updateProduct";
import AddProduct from "./components/Admin/AddProduct";


const App = ()=> {
    return(
        <div className="container-fluid">
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route path="/" exact  component={Home}/>
                        <Route path="/updateProduct" exact component={UpdateProduct}/>
                        <Route path="/About" exact component={About}/>
                        <Route path="/Dashboard" exact component={Dashboard}/>
                        <Route path="/Dashboard/AddProduct" exact component={AddProduct}/>
                        <Route path="/Dashboard/News" exact component={NewsList}/>
                        <Route path="/Services" exact  component={Services}/>
                        <Route path="/Career" exact component={Career}/>
                        <Route path="/Contact" exact component={ContactUs}/>
                        <Route path="/shop/" exact component={Shop}/>
                        <Route path="/Products/:ProductSubCategoryName" exact  component={ProductsList}/>
                        <Route path="/Cart/" exact  component={Cart}/>
                        <Route path="/News/" exact  component={News}/>
                        <Route path="/NewsDetails/:id" exact  component={NewsDetails}/>
                        <Route path='/ProductList/:productCategory/:ProductSubCategory' exact component={SellProductsList}/>
                        <Route path='/ProductDetail/:productCategory/:productSubCategory/:productName' exact component={ProductDetail}/>
                    </Switch>
                </HashRouter>
            </Provider>
        </div>
        
    );
};


export default hot(module)(App);

