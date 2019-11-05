import React from "react";
import "./app.scss";
import { hot } from "react-hot-loader";
import { BrowserRouter,HashRouter,Route,Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { Router,browserHistory } from 'react-router';
import Home from "./components/Home/home";
import AboutUs from "./components/AboutUs/Aboutus";
import Services from "./components/Services/services";
import Career from "./components/Career/career";
import ContactUs from "./components/ContactUs/contactUs";
import Shop from "./components/Shop/shop";
import ProductsList from "./components/ProductList/productList";
import SellProductsList from "./components/SellProductsList/sellProductList"
import Cart from "./components/Cart/cart";

import ProductDetail from "./container/ProductDetails/productDetails";
import News from "./components/News/News";
import NewsDetails from "./components/News/NewsDetails";
import Dashboard from "./components/Admin/Dashboard";
import NewsList from "./components/Admin/NewsList/News";
import UpdateProduct from "./components/Admin/UpdateProduct/updateProduct";
import AddProduct from "./components/Admin/AddProduct";

import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./redux/store";
const { persistor, store } = configureStore();


const App = ()=> {
    return(
        <div className="container-fluid">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/About"  component={AboutUs}/>
                           
                            <Route path="/Services" exact render={(props) => (<Services {...props} />)}/>
                            <Route path="/Products/:ProductSubCategoryName" exact  render={(props)=><ProductsList {...props}/>}/>
                            <Route path="/Career" exact render={(props) => (<Career {...props} />)}/>
                            <Route path="/Contact" exact render={(props) => (<ContactUs {...props} />)}/>

                            <Route path="/Shop" exact render={(props) => (<Shop {...props} />)}/>
                            <Route path="/Dashboard/News" exact render={(props) => (<NewsList {...props} />)}/>
                            <Route path="/Cart/" exact render={(props) => (<Cart {...props} />)}/>    
                            <Route path="/News/" exact render={(props) => (<News {...props} />)}/>          
                            <Route path="/NewsDetails/:id" exact render={(props) => (<NewsDetails {...props} />)}/>   
                            <Route path="/ProductList/:productCategory/:ProductSubCategory" exact render={(props) => (<SellProductsList {...props} />)}/> 
                            <Route path="/ProductDetail/:productCategory/:productSubCategory/:productName" exact render={(props) => (<ProductDetail {...props} />)}/>   

                            <Route path="/Dashboard/updateProduct" exact render={(props)=>(<UpdateProduct {...props}/>)}/>
                            <Route path="/Dashboard" exact component={Dashboard}/>
                            <Route path="/Dashboard/AddProduct" exact component={AddProduct}/>
                            
                        </Switch>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </div>
        
    );
};


export default hot(module)(App);

