import React,{Component} from "React";
import Header from "../Header/header";
import InnerHeader from "../../container/InnerHeader/innerHeader";
import NewsItems from "./NewsItem/newsItem";
import NewsItemSide from "./NewsItem/newsItemSide";
import Footer from "../Footer/footer";
import NewsCallendar from "../News/NewsCallendar";
import {Helmet} from "react-helmet";

import "./news.scss";

class News extends Component{
    constructor(props){
        super(props);
        this.state = {
            News: [
                {
                    "id":"1",
                    "title":"Cosmo Tech Expo 2019",
                    "description":"Cosmo Tech Expo is India's Biggest Manufacturing Solutions Trade Show for the Cosmetic, Personal care, Cosmeceutical, Perfumery & Soap, detergent, Toiletries market.",
                    "image":"./assets/images/NewsEvents/Cosmo-Tech-Expo-2019.jpg",
                    "Year":"2019"
                },
                {
                    "id":"2",
                    "title":"Beauty & Spa Expo",
                    "description":"Nexus, Beauty & Spa Expo is synonymous as the most successful Beauty Exhibition around which has brought the trending styles in Beauty Industry from around the world to India. The show has created landmarks in the industry through its shows from 2010.",
                    "image":"./assets/images/NewsEvents/Beauty&SpaExpo-2016.JPG",
                    "Year":"2016"
                },
                {
                    "id":"3",
                    "title":"AAHAR The International Food & Hospitality Fair",
                    "description":"AAHAR – The International Food & Hospitality Fair” is one of Asia’s best known brands in Food & Hospitality shows & is in its 33rd year. It is organized by India Trade Promotion Organization (the premier trade promotion body of the Government of India) in New Delhi, India. AAHAR is one of Asia’s best known brands in Food & Hospitality shows. The show has grown by leaps & bounds in the recent years and has become the ultimate destination for global vendors and sourcing professionals to visit in the month of March.",
                    "image":"./assets/images/NewsEvents/Aahar-2015.JPG",
                    "Year":"2015"
                },
                {
                    "id":"4",
                    "title":"AAHAR The International Food & Hospitality Fair",
                    "description":"AAHAR – The International Food & Hospitality Fair” is one of Asia’s best known brands in Food & Hospitality shows & is in its 33rd year. It is organized by India Trade Promotion Organization (the premier trade promotion body of the Government of India) in New Delhi, India. AAHAR is one of Asia’s best known brands in Food & Hospitality shows. The show has grown by leaps & bounds in the recent years and has become the ultimate destination for global vendors and sourcing professionals to visit in the month of March.",
                    "image":"./assets/images/NewsEvents/Aahar-2014.JPG",
                    "Year":"2014"
                },
                {
                    "id":"5",
                    "title":"Clean India Show, Mumbai",
                    "description":"Clean India Show is Asia&#39;s leading & forerunning B2B event, promoting cleaning as a sustainable business & providing a platform to companies to showcase their cleaning technologies & solutions. A flagship event for the Indian cleaning & hygiene Industry, showcasing the latest products and trends, and technological refinements from India and other global players, Clean India Show generates a wide range of opportunities for everyone connected to cleaning & hygiene and its business and economy.",
                    "image":"./assets/images/NewsEvents/CleanIndia-2013.JPG",
                    "Year":"2013"
                },
               
            
            ],
            SearchNews:[
                {
                    "id":"1",
                    "title":"Cosmo Tech Expo 2019",
                    "description":"Cosmo Tech Expo is India Biggest Manufacturing Solutions Trade Show for the Cosmetic, Personal care, Cosmeceutical, Perfumery & Soap, detergent, Toiletries market.",
                    "image":"./assets/images/NewsEvents/Cosmo-Tech-Expo-2019.jpg",
                    "Year":"2019"
                },
                {
                    "id":"2",
                    "title":"Beauty & Spa Expo",
                    "description":"Nexus, Beauty & Spa Expo is synonymous as the most successful Beauty Exhibition around which has brought the trending styles in Beauty Industry from around the world to India. The show has created landmarks in the industry through its shows from 2010.",
                    "image":"./assets/images/NewsEvents/Beauty&SpaExpo-2016.JPG",
                    "Year":"2016"
                },
                {
                    "id":"3",
                    "title":"AAHAR The International Food & Hospitality Fair",
                    "description":"AAHAR – The International Food & Hospitality Fair” is one of Asia’s best known brands in Food & Hospitality shows & is in its 33rd year. It is organized by India Trade Promotion Organization (the premier trade promotion body of the Government of India) in New Delhi, India. AAHAR is one of Asia’s best known brands in Food & Hospitality shows. The show has grown by leaps & bounds in the recent years and has become the ultimate destination for global vendors and sourcing professionals to visit in the month of March.",
                    "image":"./assets/images/NewsEvents/Aahar-2015.JPG",
                    "Year":"2015"
                },
                {
                    "id":"4",
                    "title":"AAHAR The International Food & Hospitality Fair",
                    "description":"AAHAR – The International Food & Hospitality Fair” is one of Asia’s best known brands in Food & Hospitality shows & is in its 33rd year. It is organized by India Trade Promotion Organization (the premier trade promotion body of the Government of India) in New Delhi, India. AAHAR is one of Asia’s best known brands in Food & Hospitality shows. The show has grown by leaps & bounds in the recent years and has become the ultimate destination for global vendors and sourcing professionals to visit in the month of March.",
                    "image":"./assets/images/NewsEvents/Aahar-2014.JPG",
                    "Year":"2014"
                },
                {
                    "id":"5",
                    "title":"Clean India Show, Mumbai",
                    "description":"Clean India Show is Asia leading & forerunning B2B event, promoting cleaning as a sustainable business & providing a platform to companies to showcase their cleaning technologies & solutions. A flagship event for the Indian cleaning & hygiene Industry, showcasing the latest products and trends, and technological refinements from India and other global players, Clean India Show generates a wide range of opportunities for everyone connected to cleaning & hygiene and its business and economy.",
                    "image":"./assets/images/NewsEvents/CleanIndia-2013.JPG",
                    "Year":"2013"
                },
            ]
        }
    }

    HandleYearSearch = (year) =>{
       const searchResult =  this.state.News.filter((item)=>{
            return (
                item.Year==year
            )
        })
        this.setState({
            SearchNews:searchResult
        })
    }
    

    render(){
        const showNews =  this.state.SearchNews.map((item)=>{
            return (<div className="col-lg-6 mt-3">
                <NewsItems data={item}/>
            </div>
                
                )
        })

        const showSideNews = this.state.SearchNews.map((item)=>{
            return <NewsItemSide data={item}/>
        })
        return(
            <div className="news-component">
             <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Nested component" />

                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
                <Header/>
                <InnerHeader title="News" subTitle="Our News and Events"/>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row mt-5">
                                  {
                                      showNews
                                  }
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="col-lg-12">
                            <NewsCallendar data={this.state.News} search={this.HandleYearSearch}/>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="heading">
                                <h3>LATEST <span>NEWS & EVENTS</span></h3>
                                <p>WHAT NEW IS HAPPENING</p>
                            </div>
                            {showSideNews}
                            
                        </div>
                       
                       
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
   
}

export default News;