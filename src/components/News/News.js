import React from "React";
import Header from "../Header/header";
import InnerHeader from "../../container/InnerHeader/innerHeader";
import NewsItems from "./NewsItem/newsItem";
import Footer from "../Footer/footer";
import "./news.scss";

const News = () =>{
    return(
        <div className="news-component">
            <Header/>
            <InnerHeader title="News" subTitle="Our News and Events"/>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row mt-5">
                            <div className="col-lg-6">
                                <NewsItems/>
                            </div>
                            <div className="col-lg-6">
                                <NewsItems/>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-6">
                                <NewsItems/>
                            </div>
                            <div className="col-lg-6">
                                <NewsItems/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="col-12">
                        <div className="heading">
                            <h3>LATEST <span>NEWS & EVENTS</span></h3>
                            <p>WHAT NEW IS HAPPENING</p>
                        </div>
                        <div className="news-list mt-4">
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
                    <div className="news-list mt-3">
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
                    <div className="news-list mt-3">
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
            </div>
            <Footer/>
        </div>
    )
}

export default News;