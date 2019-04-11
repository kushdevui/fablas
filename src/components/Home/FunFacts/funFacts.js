import React,{Component} from 'React';
import { faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "../../Widgets/Carousel/carousel";
import NewsItemSide from "../../News/NewsItem/newsItemSide";
import "./fun-facts.scss";

class FunFacts extends Component{
    render(){
        const News = [
            {
                "title":"Cosmo Tech Expo 2019",
                "description":"Cosmo Tech Expo is India's Biggest Manufacturing Solutions Trade Show for the Cosmetic, Personal care, Cosmeceutical, Perfumery & Soap, detergent, Toiletries market.",
                "image":"./assets/images/NewsEvents/Cosmo-Tech-Expo-2019.jpg",
                "Year":"2019"
            },
            {
                "title":"Beauty & Spa Expo",
                "description":"Nexus, Beauty & Spa Expo is synonymous as the most successful Beauty Exhibition around which has brought the trending styles in Beauty Industry from around the world to India. The show has created landmarks in the industry through its shows from 2010.",
                "image":"./assets/images/NewsEvents/Beauty&SpaExpo-2016.JPG",
                "Year":"2016"
            },
            {
                "title":"AAHAR The International Food & Hospitality Fair",
                "description":"“AAHAR – The International Food & Hospitality Fair” is one of Asia’s best known brands in Food & Hospitality shows & is in its 33rd year. It is organized by India Trade Promotion Organization (the premier trade promotion body of the Government of India) in New Delhi, India. AAHAR is one of Asia’s best known brands in Food & Hospitality shows. The show has grown by leaps & bounds in the recent years and has become the ultimate destination for global vendors and sourcing professionals to visit in the month of March.",
                "image":"./assets/images/NewsEvents/Aahar-2015.JPG",
                "Year":"2015"
            },
            {
                "title":"AAHAR The International Food & Hospitality Fair",
                "description":"“AAHAR – The International Food & Hospitality Fair” is one of Asia’s best known brands in Food & Hospitality shows & is in its 33rd year. It is organized by India Trade Promotion Organization (the premier trade promotion body of the Government of India) in New Delhi, India. AAHAR is one of Asia’s best known brands in Food & Hospitality shows. The show has grown by leaps & bounds in the recent years and has become the ultimate destination for global vendors and sourcing professionals to visit in the month of March.",
                "image":"./assets/images/NewsEvents/Aahar-2014.JPG",
                "Year":"2014"
            },
            {
                "title":"Clean India Show, Mumbai",
                "description":"Clean India Show is Asia’s leading & forerunning B2B event, promoting cleaning as a sustainable business & providing a platform to companies to showcase their cleaning technologies & solutions. A flagship event for the Indian cleaning & hygiene Industry, showcasing the latest products and trends, and technological refinements from India and other global players, Clean India Show generates a wide range of opportunities for everyone connected to cleaning & hygiene and its business and economy.",
                "image":"./assets/images/NewsEvents/CleanIndia-2013.JPG",
                "Year":"2013"
            }
        
        ]
        const showSideNews = News.map((item)=>{
            return <NewsItemSide data={item}/>
        })
        return(
            <div className="tile-fun-facts container">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="heading">
                            <h3>OUR <span>FUN FACTS</span></h3>
                            <p>What we have achieved so far</p>
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
                                <span className="d-block number">2000<span className="ml-1">+</span></span>
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
                            <div className="col-lg-12 latest-news">
                               {showSideNews}
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default FunFacts;