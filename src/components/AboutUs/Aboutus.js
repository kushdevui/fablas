import React from 'react';
import Header from '../Header/header'
// import GoogleMap from '../../container/FooterMap/footerMap';
import InnerHeader from "../../container/InnerHeader/innerHeader";
import SectionHeader from "../../container/SectionHeading/sectionHeading"
import Footer from "../Footer/footer";
import EnquiryForm from "../../container/EnquiryForm/enquiryForm";
import ContactInformation from "../../container/ContactInformation/contactInformation";
import Carousel from "../../components/Widgets/Carousel/carouselImage";
import { withRouter } from "react-router-dom";
import "./about-us.scss";
import Slider from "react-slick";


const AboutUs = () =>{
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      const teamItems = [
        {
          name:"Seraj Akhtar Siddiqui",
          designation:"CEO / Managing Director",
          image:"./assets/images/team/Seraj.jpg"
        },
        {
          name:"Zafar Uddin",
          designation:"Finance head",
          image:"./assets/images/team/Zafar.jpg"
        },
        {
          name:"Amit Kumar Sinha ",
          designation:"Supply Chain Head",
          image:"./assets/images/team/Amit.jpg"
        },
        {
          name:"Deepti Bhadodia",
          designation:"Sales Head",
          image:"./assets/images/team/Deepti.jpg"
        },
        {
          name:"Vijayamma Mohan",
          designation:"Accounts Head",
          image:"./assets/images/team/Vijayamma.jpg"
        },
        {
          name:"Sangeeta Mittal ",
          designation:"Modern Trade Head",
          image:"./assets/images/team/Sangeeta.jpg"
        },
        {
          name:"Jyoti Chaddha",
          designation:"HR / Admin",
          image:"./assets/images/team/Jyoti.jpg"
        }
    ]
    
    

    const MY_API = 'AIzaSyCk_0Vw_pTXFOYQLAcujSJ8hNxyyzb25iw'
    let _url = `https://www.google.com/maps/embed/v1/place?key=${MY_API}&q=28.709498,77.184029`
    return(
        <div className="about-us-section">
            <Header/>
            <InnerHeader title="About Us" subTitle="Who We Are"/>
            <div className="container">
                <SectionHeader title="Introduction" subTitle="All What You Want To Know About Fablas!

"/>
                <div className="row content-section">
                    <div className="col-lg-6 p-4">
                        <div className="carousel-image">
                            <Carousel/>
                        </div>
                    </div>
                    <div className="col-lg-6 p-4">
                   <p>
                   Fablas Impex Pvt. Ltd. is one of India’s largest & most prominent FMCG companies, with a rich history of expertise in manufacturing & packaging. With a legacy of over four decades of providing winning solutions to Traditional as well as Modern Trade Markets, Fablas has been the supplier of choice for HORECA, B2B & Organised retail sectors for Bulk & Raw material supplies with 3rdparty  label arrangements. The major center of manufacturing is a 5 acre+ freehold factory with a hundred plus strong skilled workforce. 
                   </p> 
                   <p>
                   Fablas started it's journey four decades ago and successfully transforming itself from a family run company to an industry leading corporate. The company prides itself on the knowledge & experience brought to the table by an able team, led by a veteran set of directors.
                   </p>
                   <p>
                   Fablas has been at the forefront of industry defining innovations in several categories, including scrubbers, wipes, draining mats, sponges, tissue, floor pads, F&V storage bags, gloves, glass cleaners and industrial pads among others. The company holds the distinction of having the sole Indian license of Spontex, Europe’s leading cleaning tool brand.  It also possesses a country wide marketing & distribution network that caters to a top-of-the-line, hygienic and bio-degradable products to a vast array of clients. 
                   </p>


                    </div>
                </div> 
            </div>
            <div className="grey-section corporate-responsibility">
                <div className="container">
                <SectionHeader title="Mission & Vision" subTitle="Become the Leading Brand Name in Cleaning Industry Nationwide

"/>
                    <div className="row">
                        <div className="col-12 col-lg-3 res-item">
                            <div className="res-icon col-lg-4 col-3">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 462.45 512"><defs></defs><title>sustainbility</title><path fill="#ffffff" class="cls-1" d="M454.19,82.58a33.07,33.07,0,0,0-33,33v104.5L404,242a24.8,24.8,0,0,0-24.1-19h-1.08a24.85,24.85,0,0,0-18.11,7.87L258.85,339.94a39.93,39.93,0,0,0-2.85,3.69,39.93,39.93,0,0,0-2.85-3.69L151.32,230.84A24.85,24.85,0,0,0,133.21,223h-1.08A24.79,24.79,0,0,0,108,242L90.84,220.11V115.61a33,33,0,0,0-66.07,0V256a8.33,8.33,0,0,0,1,4l49.55,90.83a8.7,8.7,0,0,0,1.41,1.89l64.66,64.65a25,25,0,0,1,7.25,17.52v68.89A8.26,8.26,0,0,0,156.9,512H355.1a8.26,8.26,0,0,0,8.25-8.26V434.85a25,25,0,0,1,7.25-17.52l64.66-64.65a8.7,8.7,0,0,0,1.41-1.89L486.22,260a8.33,8.33,0,0,0,1-4V115.61A33.07,33.07,0,0,0,454.19,82.58ZM153.07,405.65,89.26,341.84l-48-87.94V115.61a16.52,16.52,0,0,1,33,0V223a8.23,8.23,0,0,0,1.77,5.1l90.84,115.62,13-10.21-56-71.33V247.74a8.28,8.28,0,0,1,8.26-8.26h1.08a8.32,8.32,0,0,1,6,2.62L241.08,351.21a24.72,24.72,0,0,1,6.66,16.91v94.33H165.16v-27.6A41,41,0,0,0,153.07,405.65ZM165.16,479h82.58v16.51H165.16Zm99.1,16.51V479h82.58v16.51ZM470.71,253.9l-48,87.93-63.81,63.82a41,41,0,0,0-12.09,29.2v27.6H264.26V368.12a24.72,24.72,0,0,1,6.66-16.91l101.84-109.1a8.26,8.26,0,0,1,6-2.63h1.08a8.28,8.28,0,0,1,8.26,8.26v14.41l-56,71.33,13,10.2,90.84-115.62a8.18,8.18,0,0,0,1.77-5.09V115.61a16.52,16.52,0,0,1,33,0Z" transform="translate(-24.77)"/><path class="cls-1" fill="#ffffff" d="M256,264.26c72.85,0,132.13-59.28,132.13-132.13S328.85,0,256,0,123.87,59.28,123.87,132.13,183.15,264.26,256,264.26Zm0-16.52A115.75,115.75,0,0,1,141,143.25l19.37-19.38h13.1a8.26,8.26,0,0,0,5.84-2.42l14.09-14.1h13.1a8.23,8.23,0,0,0,5.84-2.41l33-33a8.24,8.24,0,0,0,2.42-5.84V53l14.1-14.1A8.24,8.24,0,0,0,264.26,33V16.94a114.81,114.81,0,0,1,41.29,10.89v18.3l-14.1,14.1A8.22,8.22,0,0,0,289,66.06v13.1l-14.09,14.1a8.2,8.2,0,0,0-2.42,5.84v16.51a8.2,8.2,0,0,0,2.42,5.84L289,135.55v13.1a8.23,8.23,0,0,0,2.42,5.83L308,171a8.24,8.24,0,0,0,5.84,2.42H326.9l24.24,24.24A115.54,115.54,0,0,1,256,247.74ZM371.61,132.13a114.74,114.74,0,0,1-11.89,50.75l-23.56-23.56a8.24,8.24,0,0,0-5.84-2.42H317.23l-11.68-11.67v-13.1a8.24,8.24,0,0,0-2.42-5.84L289,112.19v-9.67l14.1-14.1a8.26,8.26,0,0,0,2.42-5.84V69.48l14.1-14.09a8.25,8.25,0,0,0,2.41-5.84V37.38A115.48,115.48,0,0,1,371.61,132.13ZM247.74,16.94V29.61l-14.09,14.1a8.2,8.2,0,0,0-2.42,5.84v13.1L203,90.84H189.94a8.24,8.24,0,0,0-5.84,2.42L170,107.35H156.9a8.26,8.26,0,0,0-5.84,2.42l-10,10A115.7,115.7,0,0,1,247.74,16.94Z" transform="translate(-24.77)"/><path fill="#ffffff" class="cls-1" d="M272.52,170V148.65a8.24,8.24,0,0,0-2.42-5.84l-16.52-16.52a8.24,8.24,0,0,0-5.84-2.42H231.23a8.24,8.24,0,0,0-5.84,2.42l-14.1,14.1H181.68a8.26,8.26,0,0,0-8.26,8.26v41.29a8.26,8.26,0,0,0,8.26,8.25h13.09l14.1,14.1a8.26,8.26,0,0,0,5.84,2.42h13.1l14.09,14.1a8.26,8.26,0,0,0,5.84,2.42h16.52a8.26,8.26,0,0,0,5.84-2.42l16.51-16.52a8.2,8.2,0,0,0,2.42-5.84V189.94a8.2,8.2,0,0,0-2.42-5.84Zm0,33-11.68,11.68h-9.68l-14.1-14.1a8.22,8.22,0,0,0-5.83-2.42h-13.1L204,184.1a8.2,8.2,0,0,0-5.84-2.42h-8.25V156.9h24.77a8.22,8.22,0,0,0,5.84-2.42l14.1-14.09h9.67L256,152.06v21.36a8.26,8.26,0,0,0,2.42,5.84l14.1,14.09Z" transform="translate(-24.77)"/></svg>
                                </div>
                            <div className="pt-2 font-weight-bold">Global Presence</div>
                            <p>By constantly seeking out new contractors around the globe with whom we can work. By investing time and resources to ensuring that these contractors consistently work to our standards.</p>
                        </div>
                        <div className="col-lg-3 col-12 res-item">
                            <div className="res-icon col-lg-4 col-3">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 512 512"><defs></defs><title>community</title><path class="cls-1" fill="#ffffff" d="M109.83,496.21,94.78,475a10,10,0,0,0-16.31,11.58l15.06,21.21a10,10,0,1,0,16.3-11.58Z" transform="translate(0)"/><path fill="#ffffff" class="cls-1" d="M225.21,500l-16.39-78.09a147.32,147.32,0,0,0-62.28-92.46l-35-23.52A35.2,35.2,0,0,0,67,310.43V189.94a33.47,33.47,0,0,0-54.42-26.11A33.31,33.31,0,0,0,0,189.94V345a96.85,96.85,0,0,0,18,56.37l17.83,25.12A10,10,0,1,0,52.12,414.9L34.28,389.78A77,77,0,0,1,20,345v-155a13.48,13.48,0,1,1,27,0V313a69.89,69.89,0,0,0,18,46.92c.5.59,1,1.18,1.55,1.76,6.65,7,14.45,15.33,21.81,23.14l10.29,11,.11.1c8.8,9.37,15.3,16.28,15.43,16.43a10,10,0,0,0,14.58-13.69L103.49,371.7,80.56,347.29l-.17-.18A16.88,16.88,0,0,1,80.71,325a15.12,15.12,0,0,1,19.69-2.51l35,23.52a127.37,127.37,0,0,1,53.87,80l16.38,78.09a10,10,0,0,0,9.78,7.95,10.36,10.36,0,0,0,2.06-.21A10,10,0,0,0,225.21,500Z" transform="translate(0)"/><path fill="#ffffff" class="cls-1" d="M74.09,445.86l-.07-.09a10,10,0,0,0-16.28,11.61l.07.09a10,10,0,1,0,16.28-11.61Z" transform="translate(0)"/><path fill="#ffffff" class="cls-1" d="M499.48,163.83a33.48,33.48,0,0,0-54.43,26.11V310.43a35.2,35.2,0,0,0-44.61-4.55l-35,23.52a147.32,147.32,0,0,0-62.28,92.46L286.8,500a10,10,0,0,0,7.73,11.84,10.36,10.36,0,0,0,2.06.21,10,10,0,0,0,9.78-7.95L322.75,426a127.34,127.34,0,0,1,53.87-80l35-23.52A15.11,15.11,0,0,1,431.29,325a16.86,16.86,0,0,1,.34,22.09l-.18.21-48.19,51.28a10,10,0,0,0,14.58,13.69c.13-.15,41-43.59,47.64-50.63.54-.57,1-1.17,1.55-1.76a69.89,69.89,0,0,0,18-46.91v-123a13.48,13.48,0,1,1,26.95,0V345a77,77,0,0,1-14.28,44.79L402.17,496.21a10,10,0,0,0,16.31,11.58L494,401.36A96.85,96.85,0,0,0,512,345v-155A33.34,33.34,0,0,0,499.48,163.83Z" transform="translate(0)"/><path fill="#ffffff" class="cls-1" d="M382.66,191.66l-17.79-4.25v-3.19A44.73,44.73,0,0,0,384,147.55V124.42a44.72,44.72,0,0,0-73.79-34A58.39,58.39,0,0,0,202,90.48a44.72,44.72,0,0,0-73.89,33.94v23.13a44.73,44.73,0,0,0,19.15,36.67v3.19l-17.79,4.25a46.84,46.84,0,0,0-36.08,45.71v18.68a10,10,0,0,0,10,10h46c-.07,1.21-.12,2.43-.12,3.66v36a10,10,0,0,0,10,10h60.11a10,10,0,0,0,0-20H209V275a10,10,0,0,0-20,0v20.67H169.22v-26a41.4,41.4,0,0,1,31.86-40.39l27.44-6.58,18.36,41.78a10,10,0,0,0,9.16,6h0a10,10,0,0,0,9.15-6l18.35-41.72,27.35,6.53a41.41,41.41,0,0,1,31.89,40.4v25.93H323V275a10,10,0,0,0-20,0v20.67H291.67a10,10,0,0,0,0,20h61.11a10,10,0,0,0,10-10V269.74c0-1.24,0-2.47-.13-3.69h46.09a10,10,0,0,0,10-10V237.37A46.84,46.84,0,0,0,382.66,191.66Zm-43.4-92A24.79,24.79,0,0,1,364,122.79H350.05a72.83,72.83,0,0,1-33.52-8.18A24.78,24.78,0,0,1,339.26,99.66ZM314.5,146.09c0-.49,0-1,0-1.46v-8.91a92.92,92.92,0,0,0,35.51,7.06h14v4.77a24.76,24.76,0,0,1-49.51,0Zm-96.78-33.68h0a38.41,38.41,0,0,1,76.33-6.1l-16.83-9.89a10,10,0,0,0-12.73,2.19,43.08,43.08,0,0,1-33.11,15.45H217.72v-1.65ZM172.87,99.66a24.8,24.8,0,0,1,22.73,15,72.86,72.86,0,0,1-33.53,8.17h-13.9A24.78,24.78,0,0,1,172.87,99.66Zm-24.75,43.12h13.95a92.77,92.77,0,0,0,35.56-7.08v11.85a24.76,24.76,0,0,1-49.51,0v-4.77Zm48.3,67.09a61.31,61.31,0,0,0-42.5,36.18H113.39v-8.68a26.91,26.91,0,0,1,20.73-26.26L159.58,205a10,10,0,0,0,7.68-9.73v-3.36a45.18,45.18,0,0,0,5.61.36,44.41,44.41,0,0,0,5.57-.36v2.86c0,.15,0,.3,0,.44a10,10,0,0,0,8.13,9.84l14.91,3.58Zm27.89-15.52a46.29,46.29,0,0,0-8-2.7l-17.86-4.29v-3.11a45.62,45.62,0,0,0,8.67-7.92,58.76,58.76,0,0,0,17.2,17.24v.78ZM267.74,209,256,235.65,244.31,209v-7.14a58.26,58.26,0,0,0,23.43,0Zm-11.61-26a38.45,38.45,0,0,1-38.41-38.41V134.06h13.67a63,63,0,0,0,42.49-16.41l20.62,12.11v16.33A38.45,38.45,0,0,1,256.13,183Zm31.61,11.34v-.68a58.84,58.84,0,0,0,17.35-17.29,45,45,0,0,0,8.59,7.84v3.11l-17.86,4.29A46.28,46.28,0,0,0,287.74,194.38Zm111,51.67H358.07a61.31,61.31,0,0,0-42.53-36.16l-5-1.2,15-3.59a10.06,10.06,0,0,0,8.17-9.85,1.93,1.93,0,0,0,0-.24v-3.07a44.66,44.66,0,0,0,5.57.36,45.22,45.22,0,0,0,5.62-.36v3.36a10,10,0,0,0,7.67,9.73L378,211.11a26.92,26.92,0,0,1,20.73,26.26v8.68Z" transform="translate(0)"/><path fill="#ffffff" class="cls-1" d="M263.07,298.59a10,10,0,1,0,2.93,7.08A10.08,10.08,0,0,0,263.07,298.59Z" transform="translate(0)"/><path fill="#ffffff" class="cls-1" d="M256,0a10,10,0,0,0-10,10V25a10,10,0,0,0,20,0V10A10,10,0,0,0,256,0Z" transform="translate(0)"/><path fill="#ffffff" class="cls-1" d="M219.16,32.62,208.67,22.14a10,10,0,1,0-14.14,14.15L205,46.77a10,10,0,0,0,14.14-14.15Z" transform="translate(0)"/><path fill="#ffffff" class="cls-1" d="M317.22,22.4a10,10,0,0,0-14.14,0L292.67,32.82A10,10,0,0,0,306.82,47l10.41-10.42A10,10,0,0,0,317.22,22.4Z" transform="translate(0)"/></svg>
                                </div>
                            <div className="pt-2 font-weight-bold">Investment</div>
                            <p>Investment in the training and development of staff, equipment and company growth to the benefit of all. Resource focus on maintaining cleaning standards with existing staff and company growth.</p>
                        </div>
                        <div className="col-lg-3 col-12 res-item">
                        <div className="res-icon col-lg-4 col-3">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 512 465.08"><defs></defs><title>Partner</title><path fill="#ffffff" class="cls-1" d="M509,355.86l-24.41-24.21a10,10,0,0,0-14.08,14.21L495,370.07A10,10,0,1,0,509,355.86Z" transform="translate(0 -23.46)"/><path class="cls-1" d="M459.76,306.88a10,10,0,0,0-14.14,0l0,0a10,10,0,1,0,14.16,0Z" transform="translate(0 -23.46)"/><path class="cls-1" fill="#ffffff" d="M374.49,353l97-97a37.67,37.67,0,0,0-18.18-63.36,37.69,37.69,0,0,0-27.78-53A37.64,37.64,0,0,0,396.2,90.66a37.7,37.7,0,0,0-53.79-44.95l-1-1a66.76,66.76,0,0,0-48.71-21.21H214.2a10,10,0,0,0-10,10V46.58a45.59,45.59,0,0,0,2.58,15.16,37.7,37.7,0,0,0-50.23,46.66,37.68,37.68,0,0,0-29.4,48.92,37.7,37.7,0,0,0-27.76,53,37.69,37.69,0,0,0-18.18,63.38l20,20L2.93,391.89A10,10,0,1,0,17.07,406l99.18-99.18a37.68,37.68,0,0,0,56.27-34.3c.51,0,1,0,1.52,0a37.66,37.66,0,0,0,37.69-37.67c0-.51,0-1,0-1.52.5,0,1,0,1.51,0a37.66,37.66,0,0,0,37.69-37.67c0-.51,0-1,0-1.52.5,0,1,0,1.5,0a37.68,37.68,0,0,0,29.15-61.57l66.4-66.39a17.68,17.68,0,1,1,25,25l-9.79,9.79L327.6,136.65a10,10,0,0,0,14.15,14.14l35.52-35.51a17.68,17.68,0,1,1,25,25l-9.79,9.79-25.73,25.73A10,10,0,1,0,380.9,190l25.73-25.73a17.69,17.69,0,1,1,25,25l-13.43,13.43L405.92,215a10,10,0,1,0,14.14,14.15l12.3-12.3a17.68,17.68,0,0,1,25,25l-97,97a135.54,135.54,0,0,1-91.18,39.72,10,10,0,0,0-6.72,2.94l-89.64,90A10,10,0,0,0,187,485.6l65.93-66.17A93,93,0,0,0,309.37,434L361,485.56a10,10,0,0,0,14.15-14.15l-54.86-54.87a10,10,0,0,0-7.89-2.89l-3.17.26a73,73,0,0,1-41.74-9.09l6.43-6.45A155.36,155.36,0,0,0,374.49,353Zm-227.1-66.41a17.68,17.68,0,0,1-25,0l-27-27a17.69,17.69,0,0,1,25-25l27,27A17.7,17.7,0,0,1,147.39,286.59Zm39.16-39.16a17.7,17.7,0,0,1-25,0l-27-27L121.07,207a17.7,17.7,0,0,1,12.51-30.2,17.53,17.53,0,0,1,12.5,5.19l40.47,40.46h0a17.68,17.68,0,0,1,0,25Zm39.16-39.16a17.71,17.71,0,0,1-25,0L150.44,158a17.68,17.68,0,0,1,25-25l22.91,22.9,27.35,27.36h0a17.71,17.71,0,0,1,0,25Zm39.15-39.15a17.71,17.71,0,0,1-25,0L189.6,118.86h0l-9.77-9.78a17.68,17.68,0,0,1,25-25l60,60a17.7,17.7,0,0,1,0,25Zm2.63-50.68L240,91a45.55,45.55,0,0,0,9.58,1h.22l27.45-.13a10,10,0,0,0,0-20h-.05L249.73,72h-.13a25.4,25.4,0,0,1-25.4-25.41V43.47h68.54A46.66,46.66,0,0,1,326.8,58.3l.41.43Z" transform="translate(0 -23.46)"/></svg></div>
                            <div className="pt-2 font-weight-bold">Consistency</div>
                            <p>To retain consistency in the provision of our high quality cleaning services, by maintaining our breadth in range of specialisms by retaining staff knowledge & experience.</p>
                        </div>
                        <div className="col-lg-3 col-12 res-item">
                        <div className="res-icon col-lg-4 col-3">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 452.14 512"><defs></defs><title>Rewards</title><path fill="#ffffff" class="cls-1" d="M336,160.83a10,10,0,0,0-8.07-6.81l-43.51-6.31L265,108.3a10,10,0,0,0-9-5.57h0a10,10,0,0,0-9,5.58l-19.45,39.42-43.5,6.33a10,10,0,0,0-5.53,17.06L210,201.8l-7.42,43.32a10,10,0,0,0,14.51,10.54L256,235.2l38.91,20.44a10,10,0,0,0,14.51-10.54L302,201.77l31.47-30.69A10,10,0,0,0,336,160.83Zm-51.72,30.3a10,10,0,0,0-2.88,8.85l4.91,28.53-25.64-13.46a10,10,0,0,0-9.3,0l-25.63,13.48L230.62,200a10,10,0,0,0-2.88-8.85L207,170.94l28.66-4.18a10,10,0,0,0,7.52-5.47l12.81-26,12.82,26a10,10,0,0,0,7.53,5.46L305,170.91Z" transform="translate(-29.93 0)"/><path fill="#ffffff" class="cls-1" d="M480.74,439.37,398.08,295.6A181.07,181.07,0,0,0,438,182C438,81.65,356.36,0,256,0S74,81.65,74,182a181.12,181.12,0,0,0,39.91,113.6L31.26,439.37a10,10,0,0,0,10,14.9l64.51-8.67,24.76,60.2a10,10,0,0,0,8.58,6.18l.67,0a10,10,0,0,0,8.65-5l83.45-144.53,0-.07a182.15,182.15,0,0,0,48.18,0l0,.07L363.57,507a10,10,0,0,0,8.66,5l.67,0a10,10,0,0,0,8.58-6.18l24.75-60.2,64.52,8.67a10,10,0,0,0,10-14.9Zm-339.46,40-18-43.82,16.18-26.39a10,10,0,0,0-17.06-10.45L106,425.39l-47.33,6.35L128,311.24a181.93,181.93,0,0,0,83.14,47.16ZM256,344c-89.33,0-162-72.67-162-162S166.67,20,256,20,418,92.67,418,182,345.33,344,256,344Zm150,81.39-16.35-26.67a10,10,0,1,0-17.05,10.45l16.17,26.39-18,43.82-69.85-121A181.91,181.91,0,0,0,384,311.24l69.28,120.5Z" transform="translate(-29.93 0)"/><path class="cls-1" fill="#ffffff" d="M256,52a130,130,0,0,0-63.67,16.64,10,10,0,0,0,9.8,17.43,110,110,0,0,1,153.2,143.26A10,10,0,0,0,373.38,238,128.92,128.92,0,0,0,386,182C386,110.32,327.68,52,256,52Z" transform="translate(-29.93 0)"/><path class="cls-1" fill="#ffffff" d="M349.05,258.42a10,10,0,0,0-14.14.22l-.22.22a10,10,0,0,0,14.31,14l.26-.28A10,10,0,0,0,349.05,258.42Z" transform="translate(-29.93 0)"/><path class="cls-1" fill="#ffffff" d="M322.59,282.35A10,10,0,0,0,309,278.41a110,110,0,0,1-153.16-142,10,10,0,0,0-18.2-8.29A128.9,128.9,0,0,0,126,182c0,71.68,58.32,130,130,130a130.2,130.2,0,0,0,62.66-16.07A10,10,0,0,0,322.59,282.35Z" transform="translate(-29.93 0)"/><path class="cls-1" fill="#ffffff" d="M175,92.9a10,10,0,0,0-14.13.5l-.23.24a10,10,0,0,0,14.69,13.58l.17-.19A10,10,0,0,0,175,92.9Z" transform="translate(-29.93 0)"/></svg>
                                </div>
                        
                            <div className="pt-2 font-weight-bold">Excellence</div>
                            <p>Maintaining our existing clients by maintaining excellence in our provision of services and encouraging referrals to new and potential clients through our quality services and price.</p>
                        </div>
                </div>
                </div>
                    
            </div>
            <div className="team-section">
                <div className="container">
                <SectionHeader title="Meet Our Team" subTitle="Awesome, Great & Creative People
"/>
                <div className="row pb-5">
                    <div className="col-lg-12">
                        <Slider {...settings}>
                        {teamItems.map((teamMate)=>{
                                return(
                                    <div>
                                <div className="col-lg-12">
                                    <div className="team-list">
                                        <div className="team-item">
                                            <img src={teamMate.image} className="img-fluid"/>
                                            <div className="pt-2 font-weight-bold heading">{teamMate.name}</div>
                                            <span>{teamMate.designation}</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                )
                                })}
                        </Slider>
                    </div>
                </div>
                </div>
            </div>
            <div className="grey-section contact-section">
                <div className="container">
                    <SectionHeader title="Contact Us" subTitle="We Want To Hear From You 
"/>
                    <div className="row text-center">
                        <div className="col-lg-4 pt-4">
                        <iframe className="frame" frameBorder="0" height="250" style={{ width: "100%"}} 
                            src={_url}>
                         </iframe>
                        </div>
                        <div className="col-lg-4 pt-4">
                            <EnquiryForm/>
                        </div>
                        <div className="col-lg-4  pt-4">
                            <ContactInformation/>
                    </div>
                </div>
                </div>
            </div>
           <Footer/>
        </div>
    )
}

export default withRouter(AboutUs);