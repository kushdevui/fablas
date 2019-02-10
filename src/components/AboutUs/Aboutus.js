import React from 'react';
import Header from '../Header/header'
import GoogleMap from '../../container/FooterMap/footerMap';
import { faShoppingCart  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import InnerHeader from "../../container/InnerHeader/innerHeader";
import SectionHeader from "../../container/SectionHeading/sectionHeading"
import Footer from "../Footer/footer";
import "./about-us.scss";

const AboutUs = () =>{
    return(
        <div className="about-us-section">
            <Header/>
            <InnerHeader title="About Us" subTitle="Who We Are"/>
            <div className="container">
                <SectionHeader title="Introduction" subTitle="All What You Want To Know About Fablas!

"/>
                <div className="row content-section">
                    <div className="col-lg-6 p-4">
                        <div className="video-carousel">
                        Video Section
                        </div>
                    </div>
                    <div className="col-lg-6 p-4">
                        <p>Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipidng iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristue senectus et netus et malesuada fames ac turpis egestas. Duis dapibus aliquam mi, eget euismod sem scelerisque ut. 
                        </p>
                        <p>Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis dapibus aliquam mi, eget euismod sem scelerisque ut. 
    </p>
                        <p>Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque.Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. </p>
                    </div>
            </div>
            <SectionHeader title="Corporate responsibility" subTitle="Awesome & Great Services Done With Love

"/>
                <div className="row">
                    <div className="col-lg-3 res-item">
                        <img src="./assets/images/bulbicon.png"/>
                        <div className="pt-2 font-weight-bold">Sustainability</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel. <span>Read More</span></p>
                    </div>
                    <div className="col-lg-3 res-item">
                        <img src="./assets/images/bulbicon.png"/>
                        <div className="pt-2 font-weight-bold">Sustainability</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel <span>Read More</span></p>
                    </div>
                    <div className="col-lg-3 res-item">
                        <img src="./assets/images/bulbicon.png"/>
                        <div className="pt-2 font-weight-bold">Sustainability</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel, <span>Read More</span></p>
                    </div>
                    <div className="col-lg-3 res-item">
                        <img src="./assets/images/bulbicon.png"/>
                        <div className="pt-2 font-weight-bold">Sustainability</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel. <span>Read More</span></p>
                    </div>
                </div>
                <SectionHeader title="Meet Our Team" subTitle="Awesome, Great & Creative People

"/>
                
                <div className="row pb-5">
                    <div className="col-lg-3 ">
                        <div className="team-list">
                            <div className="team-item">
                                <img src="./assets/images/personimage.png" className="img-fluid"/>
                                <div className="pt-2 font-weight-bold heading">Member Name</div>
                                <span>Co - Founder</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="team-list">
                            <div className="team-item">
                                <img src="./assets/images/personimage.png" className="img-fluid"/>
                                <div className="pt-2 font-weight-bold heading">Member Name</div>
                                <span>Co - Founder</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="team-list">
                            <div className="team-item">
                                <img src="./assets/images/personimage.png" className="img-fluid"/>
                                <div className="pt-2 font-weight-bold heading">Member Name</div>
                                <span>Co - Founder</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="team-list">
                            <div className="team-item">
                                <img src="./assets/images/personimage.png" className="img-fluid"/>
                                <div className="pt-2 font-weight-bold heading">Member Name</div>
                                <span>Co - Founder</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <SectionHeader title="Contact Us" subTitle="We Want To Hear From You 

"/>
                <div className="row text-center">
                   
                    <div className="col-lg-4 pt-4">
                        <GoogleMap/>
                    </div>
                    <div className="col-lg-4 pt-4">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Email"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Message"></textarea>
                                </div>
                                <button className="btn btn-danger form-control ">Send Your Message</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 pl-5 pt-4 contact-information">
                            <h5>
                                Contact Information :
                            </h5>
                            <div className="contact-item d-flex">
                                <div className="p-2"><FontAwesomeIcon icon={faShoppingCart } style={{color:'red'}} size="lg" /></div>
                                <div className="p-2">
                                    <span>2151/3D, New Patel Nagar, Delhi- 08</span>
                                    <span> +91-11-25891350,  25892350 </span>
                                    <span> info@fablas.com</span>
                                </div>
                            </div>
                            <h5>
                               Business Hours :
                            </h5>
                            <div className="contact-item d-flex">
                                <div className="p-2"><FontAwesomeIcon icon={faShoppingCart } style={{color:'red'}} size="lg" /></div>
                                <div className="p-2">
                                    <span>Monday – Saturday</span>
                                    <span>9:30 am to 6:30 pm</span>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
           <Footer/>
        </div>
    )
}

export default AboutUs;