import React from 'React';
import { faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "../../Widgets/Carousel/carousel";
import "./fun-facts.scss";

const FunFacts = () =>{
    return(
        <div className="tile-fun-facts container">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <div className="heading">
                        <h3>OUR <span>FUN FACTS</span></h3>
                        <p>WHAT HAVE WE ACHIEVED SO FAR</p>
                    </div>
                    <div className=" row pt-4 pb-4">
                        <div className="col-md-12">
                            <img src="./assets/images/facts-plane.png"/>
                        </div>
                    </div>
                    <div className="subhead">
                        <div className="">
                            <span className="d-block number">200<span className="ml-1">+</span></span>
                            <span className="min-heading">PRODUCTS</span>
                        </div>
                        <div className="">
                            <span className="d-block number">500<span className="ml-1">+</span></span>
                            <span className="min-heading">CLIENTS</span>
                        </div>
                        <div className="">
                            <span className="d-block number">50k<span className="ml-1">+</span></span>
                            <span className="min-heading">DESTINATIONS</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 mt-lg-0 mt-5">
                    <div className="heading">
                        <h3>OUR <span>TESTIMONIAL</span></h3>
                        <p>What clients say about us</p>
                    </div>
                    <Carousel type="text"/>
                </div>
                <div className="col-md-4 col-sm-12 mt-lg-0 mt-5">
                    <div className="heading">
                        <h3>LATEST <span>NEWS & EVENTS</span></h3>
                        <p>What new is happening</p>
                    </div>
                    <div className="row ">
                        <div className="col-lg-12">
                            <div className="news-list">
                                <div className="item">
                                    <img src="./assets/images/news1.png" className="img-fluid"/>
                                </div>
                                <div className="item-content">
                                    <p>Preparing Costumers Package on The Board.</p>
                                    <a href="">READ MORE</a>
                                </div>
                            </div>
                            <div className="news-list">
                                <div className="item">
                                    <img src="./assets/images/news1.png" className="img-fluid"/>
                                </div>
                                <div className="item-content">
                                    <p>Preparing Costumers Package on The Board.</p>
                                    <a href="">READ MORE</a>
                                </div>
                            </div>
                            <div className="news-list">
                                <div className="item">
                                    <img src="./assets/images/news1.png" className="img-fluid"/>
                                </div>
                                <div className="item-content">
                                    <p>Preparing Costumers Package on The Board.</p>
                                    <a href="">READ MORE</a>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FunFacts;