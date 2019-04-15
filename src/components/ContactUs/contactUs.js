import React from 'react';
import Header from "../Header/header";
import InnnerHeader from "../../container/InnerHeader/innerHeader";
import SectionHeading from "../../container/SectionHeading/sectionHeading";
import EnquiryForm from "../../container/EnquiryForm/enquiryForm";
import ContactInformation from "../../container/ContactInformation/contactInformation";
import GoogleMap from '../../container/FooterMap/footerMap';
import Footer from "../Footer/footer";
const ContactUs = () =>{
    const MY_API = 'AIzaSyCk_0Vw_pTXFOYQLAcujSJ8hNxyyzb25iw';
    let _url = ` https://www.google.com/maps/embed/v1/place?q=Fablas%20Impex%20Pvt%20Ltd&key=${MY_API}`
   
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
               
            </div>
            <div className="row pt-4 pb-4">
                    <div className="col-lg-12">
                    <iframe className="frame" frameBorder="0" height="400" style={{ width: "100%"}} 
                        src={_url}>
                    </iframe>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default ContactUs;