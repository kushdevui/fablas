import React from 'React';
import { faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "../../Widgets/Carousel/carousel";
import "./fun-facts.scss";

const FunFacts = () =>{
    return(
        <div className="tile-fun-facts container">
            <div className="row">
                <div className="col-4">
                    <div className="heading">
                        <h3>OUR <span>FUN FACTS</span></h3>
                        <p>WHAT HAVE WE ACHIEVED SO FAR</p>
                    </div>
                    <div className="subhead pt-4 pb-4">
                        <img src="./assets/images/facts-plane.png"/>
                        <div className="row">
                            <div className="col-lg-4">
                                <span className="d-block number">26<span className="ml-1 red">+</span></span>
                                <span className="min-heading">PROJECTS DONE</span>
                            </div>
                            <div className="col-lg-4">
                                <span className="d-block number">11k<span className="ml-1 red">+</span></span>
                                <span className="min-heading">DESTINATION</span>
                            </div>
                            <div className="col-lg-4">
                                <span className="d-block number">25k<span className="ml-1 red">+</span></span>
                                <span className="min-heading">HAPPY CLIENTS</span>
                            </div>
                            
                        </div>
                        <p className="pt-3">LOREM IPSUM DOLOR SITAMET CONSECTEUERER ADISPICING ELIT DIAM, SED NONOUMY NIBH EUISMOD TINCIDUNT.</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="heading">
                        <h3>OUR <span>TESTIMONIAL</span></h3>
                        <p>WHAT HAVE WE ACHIEVED SO FAR</p>
                    </div>
                    <Carousel type="text"/>
                </div>
                <div className="col-4">
                    <div className="heading">
                        <h3>LATEST <span>NEWS & EVENTS</span></h3>
                        <p>WHAT NEW IS HAPPENING</p>
                    </div>
                    <div className="news-list mt-5">
                        <div className="row">
                            <div className="col-lg-4">
                                <img src="./assets/images/news1.png" className="img-fluid"/>
                            </div>
                            <div className="col-lg-8 item">
                                <p>Preparing Costumers Package on The Board.</p>
                                <a href="">READ MORE</a>
                            </div>
                        </div>
                    </div>
                    <div className="news-list">
                        <div className="row">
                            <div className="col-lg-4">
                                <img src="./assets/images/news1.png" className="img-fluid"/>
                            </div>
                            <div className="col-lg-8 item">
                                <p>Preparing Costumers Package on The Board.</p>
                                <a href="">READ MORE</a>
                            </div>
                        </div>
                    </div>
                    <div className="news-list">
                        <div className="row">
                            <div className="col-lg-4">
                                <img src="./assets/images/news1.png" className="img-fluid"/>
                            </div>
                            <div className="col-lg-8 item">
                                <p>Preparing Costumers Package on The Board.</p>
                                <a href="">READ MORE</a>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default FunFacts;