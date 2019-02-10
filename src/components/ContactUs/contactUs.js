import React from 'react';
import Header from "../Header/header";
import InnnerHeader from "../../container/InnerHeader/innerHeader";
import SectionHeading from "../../container/SectionHeading/sectionHeading";
import EnquiryForm from "../../container/EnquiryForm/enquiryForm";
import ContactInformation from "../../container/ContactInformation/contactInformation";
import GoogleMap from '../../container/FooterMap/footerMap';
import Footer from "../Footer/footer";
const ContactUs = () =>{
    return(
        <div>
            <Header/>
            <InnnerHeader title="Contact Us" subTitle="We Want to Hear From You.."/>
            <SectionHeading title="CONTACT US" subTitle="Give us a miss call or simply drop us a message"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <EnquiryForm/>
                    </div>
                    <div className="col-lg-4 pl-4">
                        <ContactInformation/>
                    </div>
                </div>
                <div className="row pt-4 pb-4">
                    <div className="col-lg-12">
                        <GoogleMap/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactUs;