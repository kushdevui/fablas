import React from 'react';
import Header from "../Header/header"
import InnerHeader from "../../container/InnerHeader/innerHeader"; 
import SectionHeading from "../../container/SectionHeading/sectionHeading"
import ServiceItem from "../../components/Services/ServicesItem/servicesItem";

import './services.scss';

const Services = () =>{
    return(
        <div>
            <Header/>
            <InnerHeader title="Our Services" subTitle="What We Do !"/>
            <SectionHeading title="OUR SERVICES" subTitle="We work across varied verticals and industries "/>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-lg-3 ">
                        <ServiceItem/>
                    </div>
                    <div className="col-lg-3 ">
                        <ServiceItem/>
                    </div>
                    <div className="col-lg-3 ">
                        <ServiceItem/>
                    </div>
                    <div className="col-lg-3 ">
                        <ServiceItem/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-3 ">
                        <ServiceItem/>
                    </div>
                    <div className="col-lg-3 ">
                        <ServiceItem/>
                    </div>
                    <div className="col-lg-3 ">
                        <ServiceItem/>
                    </div>
                    <div className="col-lg-3 ">
                        <ServiceItem/>
                    </div>
                </div>
            </div>
           
            
        </div>
    )
}

export default Services;