import React,{Component} from "React";
import Header from "../Header/header";
import InnerHeader from "../../container/InnerHeader/innerHeader";
import NewsItems from "./NewsItem/newsItem";
import NewsItemSide from "./NewsItem/newsItemSide";
import Footer from "../Footer/footer";
import "./news.scss";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

class NewsDetails extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const News = [
            {
                "id":"1",
                "title":"Cosmo Tech Expo 2019",
                "description":"Cosmo Tech Expo is India's Biggest Manufacturing Solutions Trade Show for the Cosmetic, Personal care, Cosmeceutical, Perfumery & Soap, detergent, Toiletries market.",
                "image":"/assets/images/NewsEvents/Cosmo-Tech-Expo-2019.jpg",
                "Year":"2019",
                "Day":"17",
                "Month":"April"
            },
            {
                "id":"2",
                "title":"Beauty & Spa Expo",
                "description":"Nexus, Beauty & Spa Expo is synonymous as the most successful Beauty Exhibition around which has brought the trending styles in Beauty Industry from around the world to India. The show has created landmarks in the industry through its shows from 2010.",
                "image":"/assets/images/NewsEvents/Beauty&SpaExpo-2016.JPG",
                "Year":"2016",
                "Day":"27",
                "Month":"January"
            },
            {
                "id":"3",
                "title":"AAHAR The International Food & Hospitality Fair",
                "description":"“AAHAR – The International Food & Hospitality Fair” is one of Asia’s best known brands in Food & Hospitality shows & is in its 33rd year. It is organized by India Trade Promotion Organization (the premier trade promotion body of the Government of India) in New Delhi, India. AAHAR is one of Asia’s best known brands in Food & Hospitality shows. The show has grown by leaps & bounds in the recent years and has become the ultimate destination for global vendors and sourcing professionals to visit in the month of March.",
                "image":"/assets/images/NewsEvents/Aahar-2015.JPG",
                "Year":"2015",
                "Day":"27",
                "Month":"January"
            },
            {
                "id":"4",
                "title":"AAHAR The International Food & Hospitality Fair",
                "description":"“AAHAR – The International Food & Hospitality Fair” is one of Asia’s best known brands in Food & Hospitality shows & is in its 33rd year. It is organized by India Trade Promotion Organization (the premier trade promotion body of the Government of India) in New Delhi, India. AAHAR is one of Asia’s best known brands in Food & Hospitality shows. The show has grown by leaps & bounds in the recent years and has become the ultimate destination for global vendors and sourcing professionals to visit in the month of March.",
                "image":"/assets/images/NewsEvents/Aahar-2014.JPG",
                "Year":"2014",
                "Day":"27",
                "Month":"January"
            },
            {
                "id":"5",
                "title":"Clean India Show, Mumbai",
                "description":"Clean India Show is Asia’s leading & forerunning B2B event, promoting cleaning as a sustainable business & providing a platform to companies to showcase their cleaning technologies & solutions. A flagship event for the Indian cleaning & hygiene Industry, showcasing the latest products and trends, and technological refinements from India and other global players, Clean India Show generates a wide range of opportunities for everyone connected to cleaning & hygiene and its business and economy.",
                "image":"/assets/images/NewsEvents/CleanIndia-2013.JPG",
                "Year":"2013",
                "Day":"27",
                "Month":"January"
            },
            {
                "id":"5",
                "title":"Clean India Show, Mumbai",
                "description":"Clean India Show is Asia’s leading & forerunning B2B event, promoting cleaning as a sustainable business & providing a platform to companies to showcase their cleaning technologies & solutions. A flagship event for the Indian cleaning & hygiene Industry, showcasing the latest products and trends, and technological refinements from India and other global players, Clean India Show generates a wide range of opportunities for everyone connected to cleaning & hygiene and its business and economy.",
                "image":"/assets/images/NewsEvents/CleanIndia-2013.JPG",
                "Year":"2013",
                "Day":"27",
                "Month":"January"
            }
        
        ]
        const showSideNews = News.map((item)=>{
            return <NewsItemSide data={item}/>
        })

        const GetNews = News.filter((item)=>{
            return item.id==this.props.match.params.id
        });
        console.log(GetNews);

        return(
            <div className="news-component">
                <Header/>
                <InnerHeader title="News" subTitle="Our News and Events"/>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-lg-7 mt-5">
                            <img src={GetNews[0].image} className="img-fluid"/>
                            <div className="row">
                                <div className="col-lg-2 text-center pt-2 pb-2 news-date">
                                    <span className="d-block date">{GetNews[0].Day}</span>
                                    <span className="d-inline-block">{GetNews[0].Month}</span>
                                    <span classNam="d-inline-block ml-3"> {GetNews[0].Year}</span>
                                </div>
                                <div className="col-lg-10 news-details">
                                    <h5 className="pt-2 pb-2">{GetNews[0].title}</h5>
                                    <p>{GetNews[0].description}</p>
                                </div>
                            </div>
                           
                        </div>
                        <div className="col-lg-5">
                       
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

export default NewsDetails;