/**
 *  Home Component { Rendering the complete layout of landing page }
 */


// Dependencies
import React,{Component} from "react";
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
import {Helmet} from "react-helmet";
import Modal from 'react-responsive-modal';
import Search from "../Search/search";

import "./home.scss";



class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            modalState:false
        }
    }

    componentDidMount(){
        setTimeout(()=>{this.setState({modalState:true})},5000)    
    }
  

    closeModal = () =>{
        this.setState({
            modalState:false
        })
       
    }

    redirectPage =()=>{
        window.location("https://www.facebook.com/events/899601267080077/");
    }

    render(){
        return(
            <React.Fragment>
                  <Modal classNames="col-lg-6" onClick={this.redirectPage}  open={this.state.modalState} onClose={this.closeModal} center>
                       <a href="https://www.facebook.com/events/899601267080077/">
                       <img src="./assets/popUpBanner.jpg" className="img-fluid"/>
                           </a>
                  </Modal>
                 <Helmet>
                 <meta http-equiv="Content-Type" content="text/html; charset= UTF-8"/>
                <meta charset="utf-8"/>
                <meta name="audience" content="all"/>
                <meta name="rating" content="General"/>
                <meta name="language" content="English"/>
                <meta name="author" content="Fablas Impex Pvt. Ltd."/>
                <meta http-equiv="CACHE-CONTROL" content="PUBLIC"/>
                <meta name="msnbot" content="INDEX, FOLLOW"/>
                <meta name="Identifier-URL" content="http://fablas.com"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="Keywords" content="SS Scrubber manufacturer in Delhi, wipes manufacturer in Delhi, Home Care Manufacturer Delhi, Personal Care Manufacture, Best Cleaning Tools Supplier & manufacturer in India, Commercial Cleaning Supplier Delhi. " />
                <meta name="Description" content="Looking for Home Care & personal care Cleaning Products manufacture & Suppliers in India - Fablas Manufacture Scrubber, Sponge mop, Face & kitchen cleaning wipes, cellulose sponge, wiper and more. If you are looking for Suppliers, manufacturer and exporter in Delhi, India then contact Fablas Impex" />
                <meta property="og:title" content= " SS Scrubber | wipes | Home Cleaning & Personal Care Manufacture in India - Fablas Impex "/>
                <meta property="og:description" content="Looking for Home Care & personal care Cleaning Products manufacture & Suppliers in India - Fablas Manufacture Scrubber, Sponge mop, Face & kitchen cleaning wipes, cellulose sponge, wiper and more. If you are looking for Suppliers, manufacturer and exporter in Delhi, India then contact Fablas Impex " />
                <meta name="distribution" content="global"/>
                <meta name="revisit-after" content=" 6days"/>
                <meta property="og:url" content="http://www.fablas.com" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="http://fablas.com/assets/images/Logo.png" />
                <meta property="og:locale" content="en_US"/>
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <title> SS Scrubber | wipes | Home Cleaning & Personal Care Manufacture in India - Fablas Impex</title>
                <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <Header/>
                <Hero/>
                <Products/>
                <CenterMode/>
                <DirectorMessage/>
                <ServiceSection/>
                <WhyChooseUs/>
                <BulkOrders/>
                <FunFacts/>
                <Footer/>
    
            </React.Fragment>     
        );
    }
}


export default Home;
