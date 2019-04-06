import React,{Component} from 'react';
import Header from "../Header/header"
import InnerHeader from "../../container/InnerHeader/innerHeader"; 
import SectionHeading from "../../container/SectionHeading/sectionHeading"
import ServiceItem from "../../components/Services/ServicesItem/servicesItem";
import Modal from 'react-responsive-modal';


import './services.scss';



class Services extends Component{
    constructor(props){
        super(props);
        this.state = {
            open:false
        }
    }
    onOpenModal = () => {
        this.setState({ open: true });
      };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };
    render(){
        const { open } = this.state;
        const services = [
       
            {
                image:<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496"><title>FMCG</title><path d="M216,336a24,24,0,1,0,24-24A24,24,0,0,0,216,336Zm24-8a8,8,0,1,1-8,8A8,8,0,0,1,240,328Z"/><path d="M128,336a24,24,0,1,0,24-24A24,24,0,0,0,128,336Zm24-8a8,8,0,1,1-8,8A8,8,0,0,1,152,328Z"/><path d="M125.22,264.18A23.86,23.86,0,0,0,112,285.55V304a8,8,0,0,0,8,8H272V296H128V285.55a8,8,0,0,1,6.69-7.89l130.63-21.77A8,8,0,0,0,272,248V192a8,8,0,0,0-8-8H117.29l-5.65-18.35A8,8,0,0,0,104,160H64v16H98.09Zm58.78-11L167.16,256l-6.22-56H184ZM200,200h22.94l-6,47.73-17,2.83Zm56,41.22L233.44,245l5.62-45H256ZM144.84,200l6.52,58.66-10.55,1.77L122.21,200Z"/><path d="M384,0C327.69,0,281.08,41.82,273.28,96H8a8,8,0,0,0-8,8V408a8,8,0,0,0,8,8H200v32H128a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8H368a8,8,0,0,0,8-8V456a8,8,0,0,0-8-8H296V416H488a8,8,0,0,0,8-8V112A112.12,112.12,0,0,0,384,0Zm96,112a96.07,96.07,0,0,1-61.95,89.65c5.95-9,11-20.32,14.75-33.73a23.89,23.89,0,0,0,6.87-46.55c.12-3.12.33-6.22.33-9.37,0-37.18-8.66-69.48-22.21-89.74A96.06,96.06,0,0,1,480,112ZM384,224a111.31,111.31,0,0,0,64-20.21V368H48V144H276.72A112.16,112.16,0,0,0,384,224ZM336,72a8,8,0,1,1-8,8A8,8,0,0,1,336,72Zm8.34,30.43A23.83,23.83,0,0,0,350.46,61C356.38,39.46,365.88,23.8,376,18.23V205.66c-16.4-9.1-32-45-32-93.66C344,108.78,344.2,105.61,344.34,102.43ZM432,152a8,8,0,1,1,8-8A8,8,0,0,1,432,152Zm-8.34-30.43A23.83,23.83,0,0,0,417.54,163c-5.92,21.51-15.42,37.17-25.54,42.73V18.33c16.4,9.11,32,45,32,93.67C424,115.22,423.8,118.39,423.66,121.57ZM350,22.35c-5.95,9-11,20.32-14.75,33.73a23.89,23.89,0,0,0-6.87,46.55c-.12,3.12-.33,6.21-.33,9.37,0,37.18,8.66,69.48,22.21,89.74A95.84,95.84,0,0,1,350,22.35ZM360,480H136V464H360Zm-80-32H216V416h64Zm200-48H16V112H272a111,111,0,0,0,1.28,16H40a8,8,0,0,0-8,8V376a8,8,0,0,0,8,8H456a8,8,0,0,0,8-8V190.23a112.47,112.47,0,0,0,16-20.84Z"/></svg>,
                title:"FMCG/B2B/ E-commerce",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam."
            },
            {
                image:<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 323.87"><title>Automobile</title><path d="M476.16,231.36l-13.26-53a8,8,0,0,0,6.34-7.84v-8.55a33.7,33.7,0,0,0-33.67-33.67H375.18V110.63a16.58,16.58,0,0,0-16.57-16.57H50.77A16.59,16.59,0,0,0,34.2,110.63V256a8,8,0,0,0,16,0V110.63a.53.53,0,0,1,.53-.53H358.61a.53.53,0,0,1,.54.53V256a8,8,0,1,0,16,0v-9.09h94.61a26.23,26.23,0,0,1,24.91,18.18H469.78a8,8,0,0,0-8,8v17.1a25.14,25.14,0,0,0,25.12,25.12H496V350.6H475a50.75,50.75,0,0,0-96,0h-3.86V290.2a8,8,0,0,0-16,0v60.39H192.82a50.76,50.76,0,0,0-96,0H50.77a.53.53,0,0,1-.53-.53V332.42H85a8,8,0,0,0,0-16H8a8,8,0,1,0,0,16H34.21v17.64a16.58,16.58,0,0,0,16.56,16.57H94.08c0,.18,0,.35,0,.53a50.78,50.78,0,0,0,101.55,0c0-.18,0-.35,0-.53H376.26c0,.18,0,.35,0,.53a50.77,50.77,0,0,0,101.54,0c0-.18,0-.35,0-.53H504a8,8,0,0,0,8-8V273.1A42.3,42.3,0,0,0,476.16,231.36Zm-101-87.06h60.39a17.66,17.66,0,0,1,17.64,17.64v.53h-78Zm0,86.58V178.51h71.24l13.09,52.37Zm-230.34,171a34.74,34.74,0,1,1,34.73-34.74A34.77,34.77,0,0,1,144.84,401.9Zm282.18,0a34.74,34.74,0,1,1,34.74-34.74A34.78,34.78,0,0,1,427,401.9Zm69-102.61h-9.09a9.09,9.09,0,0,1-9.08-9.09v-9.08H496v18.17Z" transform="translate(0 -94.06)"/><path d="M144.84,350.6a16.57,16.57,0,1,0,16.56,16.56A16.58,16.58,0,0,0,144.84,350.6Z" transform="translate(0 -94.06)"/><path d="M427,350.6a16.57,16.57,0,1,0,16.57,16.56A16.58,16.58,0,0,0,427,350.6Z" transform="translate(0 -94.06)"/><path d="M333,316.39H213.24a8,8,0,0,0,0,16H333a8,8,0,0,0,0-16Z" transform="translate(0 -94.06)"/><path d="M127.73,282.19H25.12a8,8,0,1,0,0,16H127.73a8,8,0,1,0,0-16Z" transform="translate(0 -94.06)"/><path d="M278.77,173.37a8,8,0,0,0-11.34,0l-71.29,71.29-37.09-37.09a8,8,0,0,0-11.33,11.34l42.75,42.76a8,8,0,0,0,11.34,0l77-77A8,8,0,0,0,278.77,173.37Z" transform="translate(0 -94.06)"/></svg>,
                title:"Automobile",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam."
            },
            {
                image:<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><title>printing</title><path d="M50,32a5,5,0,1,0-5-5A5,5,0,0,0,50,32Zm0-8a3,3,0,1,1-3,3A3,3,0,0,1,50,24Z"/><path d="M42,43H18a1,1,0,0,0,0,2H42a1,1,0,0,0,0-2Z"/><path d="M42,48H18a1,1,0,0,0,0,2H42a1,1,0,0,0,0-2Z"/><path d="M51,17V0H9V17H0V51H6v3H9v6H51V54h3V51h6V17ZM11,2H49V17H11ZM9,19H58V35H2V19ZM8,52V45a1,1,0,0,0-2,0v4H2V37H9V52Zm41,6H11V37H49V58Zm5-9V45a1,1,0,0,0-2,0v7H51V37h7V49Z"/></svg>,
                title:"Paper & Printing",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam."
            },
            {
                image:<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 503.22 506"><title>dairy</title><path d="M464.4,140.83a119.62,119.62,0,0,1-35.27-85.16V48.78A25.1,25.1,0,0,0,420.74,0H336.87a25.1,25.1,0,0,0-8.39,48.78v6.91a121.23,121.23,0,0,1-35.28,85.15,137.55,137.55,0,0,0-29.74,44.46,133,133,0,0,0-7.9,26.2,101.75,101.75,0,0,0-19.15-1.82,100.2,100.2,0,0,0-67.9,26.16,101.18,101.18,0,0,0-138.16,2.21,96.6,96.6,0,0,0-29,69.48,105.33,105.33,0,0,0,30.81,75l116,115.1a28.83,28.83,0,0,0,40.55,0L253,434v27.31a42,42,0,0,0,41.93,41.93H462.67a42,42,0,0,0,41.94-41.93V226.45a7.67,7.67,0,0,0-.84-3.41A136.2,136.2,0,0,0,464.4,140.83ZM336.87,16.77h83.87a8.39,8.39,0,0,1,0,16.78H336.87a8.39,8.39,0,1,1,0-16.78Zm-57.93,175a121,121,0,0,1,26.12-39.08,138.18,138.18,0,0,0,40.19-97V50.32h67.1v5.35a136.29,136.29,0,0,0,40.21,97,119.47,119.47,0,0,1,33.55,65.35H276.58c-1.58-.68-3.19-1.3-4.81-1.91A118.17,118.17,0,0,1,278.94,191.78Zm-102,294a12.22,12.22,0,0,1-16.94,0L44,370.66a88.52,88.52,0,0,1-25.85-63A79.91,79.91,0,0,1,42,250.09a84.4,84.4,0,0,1,117.82.64l2.76,2.74a8.39,8.39,0,0,0,11.81,0l2.76-2.74a84.4,84.4,0,0,1,118.47,0,82.62,82.62,0,0,1,0,117.32l-40.09,39.76-.18.19ZM307.45,379.93a99.34,99.34,0,0,0,0-141.17c-1.42-1.4-2.94-2.65-4.43-3.95H487.68c0,1,.16,2,.16,3V436.13H269.77V417.34ZM462.67,486.45H294.93a25.17,25.17,0,0,1-25.16-25.16V452.9H487.84v8.39A25.17,25.17,0,0,1,462.67,486.45Z" transform="translate(-1.39 0)"/><path d="M462.67,377.42a8.39,8.39,0,0,0,8.39-8.39V260a8.39,8.39,0,1,0-16.77,0V369A8.39,8.39,0,0,0,462.67,377.42Z" transform="translate(-1.39 0)"/><path d="M462.67,419.35a8.38,8.38,0,0,0,8.39-8.39v-8.38a8.39,8.39,0,1,0-16.77,0V411A8.38,8.38,0,0,0,462.67,419.35Z" transform="translate(-1.39 0)"/><path d="M83.23,243.47a69.05,69.05,0,0,0-48,48,8.38,8.38,0,0,0,6.1,10.17,8.18,8.18,0,0,0,2,.25,8.39,8.39,0,0,0,8.13-6.35,52.09,52.09,0,0,1,35.86-35.84,8.39,8.39,0,0,0-4.09-16.27Z" transform="translate(-1.39 0)"/></svg>,
                title:"Dairy & Food",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam."
            },
            {
                image:<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 60"><title>OEMs</title><path d="M42.54,4H36V0H24V4H17.46A3.46,3.46,0,0,0,14,7.46V56.54A3.46,3.46,0,0,0,17.46,60H42.53A3.46,3.46,0,0,0,46,56.54V7.46A3.46,3.46,0,0,0,42.54,4ZM26,2h8V4H26ZM44,56.54A1.47,1.47,0,0,1,42.54,58H17.46A1.47,1.47,0,0,1,16,56.54V7.46A1.47,1.47,0,0,1,17.46,6H42.54A1.47,1.47,0,0,1,44,7.46Z" transform="translate(-14)"/><path d="M34,17.11a1.06,1.06,0,0,0-.6-1l-.78-.32-.5.61L21.2,34H27V46.88a1.07,1.07,0,0,0,.58,1l.8.35.5-.64L38.65,29H34ZM35.35,31,29,43.1V32H24.8L32,20.37V31Z" transform="translate(-14)"/></svg>,
                title:"OEMs & Electronics",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam."
            },
            {
                image:<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 480.62"><title>material-sourcing</title><path d="M490,341.13H448a22,22,0,0,0-22,22v57.05H86V363.13a22,22,0,0,0-22-22H22a22,22,0,0,0-22,22v81.56a52,52,0,0,0,51.93,51.93H460.07A52,52,0,0,0,512,444.69V363.13A22,22,0,0,0,490,341.13Zm2,103.56a32,32,0,0,1-31.93,31.93H51.93A32,32,0,0,1,20,444.69V363.13a2,2,0,0,1,2-2H64a2,2,0,0,1,2,2v67.05a10,10,0,0,0,10,10H436a10,10,0,0,0,10-10V363.13a2,2,0,0,1,2-2h42a2,2,0,0,1,2,2Z" transform="translate(0 -16)"/><path d="M119,132.73h18.22V250a10,10,0,0,0,10,10h43.17a10,10,0,0,0,10-10V132.73h18.21A26.48,26.48,0,0,0,239.43,90l-49.8-63.77a26.48,26.48,0,0,0-41.74,0L98.09,90A26.48,26.48,0,0,0,119,132.73Zm-5.1-30.47,49.8-63.77a6.48,6.48,0,0,1,10.21,0l49.8,63.77a6.47,6.47,0,0,1-5.11,10.47H190.35a10,10,0,0,0-10,10V240H157.18V122.73a10,10,0,0,0-10-10H119a6.48,6.48,0,0,1-5.1-10.47Z" transform="translate(0 -16)"/><path d="M322.37,249.81a26.48,26.48,0,0,0,41.74,0L413.91,186A26.48,26.48,0,0,0,393,143.26H374.82V26a10,10,0,0,0-10-10H321.65a10,10,0,0,0-10,10V143.26H293.44A26.48,26.48,0,0,0,272.57,186ZM287.61,166.9a6.32,6.32,0,0,1,5.83-3.64h28.21a10,10,0,0,0,10-10V36h23.17V153.26a10,10,0,0,0,10,10H393a6.48,6.48,0,0,1,5.1,10.47l-49.8,63.77a6.48,6.48,0,0,1-10.21,0l-49.8-63.77A6.32,6.32,0,0,1,287.61,166.9Z" transform="translate(0 -16)"/><path d="M373.85,276.42H138.15a29.53,29.53,0,0,0,0,59.06h235.7a29.53,29.53,0,0,0,0-59.06Zm0,39.06H138.15a9.53,9.53,0,0,1,0-19.06h235.7a9.53,9.53,0,0,1,0,19.06Z" transform="translate(0 -16)"/><path d="M138.15,369H263.24a10,10,0,0,0,0-20H138.15a29.53,29.53,0,1,0,0,59.06h235.7a29.53,29.53,0,0,0,0-59.06H343.24a10,10,0,0,0,0,20h30.61a9.53,9.53,0,0,1,0,19.06H138.15a9.53,9.53,0,0,1,0-19.06Z" transform="translate(0 -16)"/><path d="M313.26,359a10,10,0,0,0-10-10h0a10,10,0,1,0,10,10Z" transform="translate(0 -16)"/></svg>,
                title:"Material Sourcing",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam."
            },
            {
                image:<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 479.59 480"><title>machinery</title><path d="M89.87,130.47A41.18,41.18,0,1,0,48.69,89.29,41.18,41.18,0,0,0,89.87,130.47Zm0-66.38a25.2,25.2,0,1,1-25.2,25.2A25.21,25.21,0,0,1,89.87,64.09Z" transform="translate(-0.58)"/><path d="M448.18,355l-3.09-80.62,15-20.68-18.24-33.51,3.66-11.27L480,192.48V159.1l-34.45-16.4-3.66-11.27,18.24-33.51-19.63-27-37.5,7-9.59-7-5-37.82L356.73,22.8,330.49,50.49H318.64L292.4,22.8,260.67,33.12l-1.55,11.79-111-6.61-7.48-7.47-2.07-16.78L108.64,1.6,95.3,12H84.48L71.1,1.6,41.14,14,39.08,30.81l-7.67,7.67L14.63,40.54l-12.45,30L12.62,83.9V94.74L2.18,108.06l9.9,23.88-11,141.37a46.93,46.93,0,0,0-.43,5.43v.3H.58v.62a47.89,47.89,0,0,0,67.3,43.83l47.28-19.71a47.64,47.64,0,0,0,21.07,57.15l-73,23.53a47.94,47.94,0,0,0,9.31,95h.42L367.14,464l4.5,10.8L397.05,480l20.62-20,5.26-1.74,28.51,3.67,17.22-19.4-7-27.88,1.12-5.42,17.44-22.86L472,361.73Zm-173-309.76,12.55-4.07,24,25.35h25.57l24-25.35,12.55,4.07,4.53,34.64,20.69,15,34.36-6.39,7.75,10.66-16.69,30.7,7.91,24.33,31.54,15v13.19l-31.54,15-7.91,24.33,16.69,30.69-7.75,10.67-34.36-6.39-20.69,15-4.53,34.64-12.55,4.08-24-25.36H311.77l-24,25.36-12.55-4.08-4.54-34.62L250,256.7l-34.36,6.39-7.75-10.66,16.68-30.68-7.9-24.34-31.54-15V169.2l31.54-15,7.9-24.34L207.85,99.16l7.75-10.67L250,94.88l20.69-15.06ZM20.56,68l5.27-12.79,13-1.6L54.28,38.24l1.6-13L68.67,20,79,28h21.85l10.29-8,12.78,5.27,1.6,13,15.4,15.44,13,1.59,5.29,12.79-8.08,10.33v21.85l8.08,10.33-5.29,12.79-13,1.6-15.44,15.44-1.6,13-12.78,5.28-10.33-8.07H79l-10.33,8.07-12.78-5.28-1.6-13L38.82,124.89l-13-1.59-5.27-12.79,8.06-10.33V78.37Zm-4,211.76.1-1.24a30.07,30.07,0,1,1-.1,1.24Zm143.83,7.85a32,32,0,1,1-32,32A32,32,0,0,1,160.39,287.65ZM40.54,431.48a31.94,31.94,0,0,1,18.52-28.91l7.72-2.48a31.92,31.92,0,1,1,6,63.35H72.4A32,32,0,0,1,40.54,431.48Zm69.3,30a47.78,47.78,0,0,0-12.78-71.11l78-25.11a47.94,47.94,0,1,0-32.76-90L93.79,295.47a47.84,47.84,0,0,0-74.17-53.89l8-101.94,3.87.48,7.67,7.67,2.06,16.78,30,12.4,13.34-10.39H95.37L108.71,177l29.88-12.37,2.07-16.78,7.67-7.67,16.78-2.07,12.4-30L167.12,94.79V83.9l10.39-13.35-6.13-14.82,85.69,5.07-1.32,10.14-9.59,7-37.5-7L189,97.92l18.23,33.51-3.65,11.24L169.16,159.1v33.38l34.44,16.39,3.66,11.27L189,253.65l19.63,27,37.5-7,9.59,7,4.95,37.82,31.73,10.32,26.25-27.69h11.84l26.24,27.69,31.74-10.32,4.95-37.81,9.59-7,26.27,4.89,1.91,50-2-4.88-25.41-5.23-20.67,20-5.26,1.75-28.51-3.68-17.22,19.4,7,27.88L338,389.25,320.58,412.1l8.19,24.61,27.65,7.87,4.15,3.68v.05Zm338-59.06L445.24,415l5.86,23.23-6,6.75-23.76-3-12.17,4L392,462.64l-8.85-1.81-9.22-22.1-9.58-8.53-23-6.55-2.86-8.58L353,396l2.58-12.57-5.86-23.23,6-6.76,23.76,3.06,12.18-4,17.19-16.68,8.85,1.82,9.23,22.11,9.59,8.51,23,6.54,2.86,8.59Z" transform="translate(-0.58)"/><path d="M64.51,279.66a16,16,0,1,1-16-16A16,16,0,0,1,64.51,279.66Z" transform="translate(-0.58)"/><path d="M176.37,319.61a16,16,0,1,1-16-16A16,16,0,0,1,176.37,319.61Z" transform="translate(-0.58)"/><path d="M88.48,431.48a16,16,0,1,1-16-16A16,16,0,0,1,88.48,431.48Z" transform="translate(-0.58)"/><path d="M400.1,359.56a40,40,0,1,0,39.95,39.95A39.95,39.95,0,0,0,400.1,359.56Zm0,63.92a24,24,0,1,1,24-24A24,24,0,0,1,400.1,423.48Z" transform="translate(-0.58)"/><path d="M320.2,255.69a79.91,79.91,0,1,0-79.91-79.9A79.9,79.9,0,0,0,320.2,255.69Zm0-143.83a63.93,63.93,0,1,1-63.93,63.93A63.92,63.92,0,0,1,320.2,111.86Z" transform="translate(-0.58)"/><path d="M320.2,223.73a47.95,47.95,0,1,0-47.95-47.94A47.95,47.95,0,0,0,320.2,223.73Zm0-79.9a32,32,0,1,1-32,32A32,32,0,0,1,320.2,143.83Z" transform="translate(-0.58)"/><path d="M432.06,24A24,24,0,1,0,456,0,24,24,0,0,0,432.06,24Zm32,0a8,8,0,1,1-8-8A8,8,0,0,1,464,24Z" transform="translate(-0.58)"/><path d="M224.31,16a16,16,0,1,1-16-16A16,16,0,0,1,224.31,16Z" transform="translate(-0.58)"/></svg>,
                title:"Machinery & Tools",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam."
            },
            {
                image:<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 424.02 472.03"><title>Govt-supplies</title><path d="M64,264a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V272A8,8,0,0,0,64,264Z" transform="translate(-24 0)"/><path d="M96,280a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V288A8,8,0,0,0,96,280Z" transform="translate(-24 0)"/><path d="M387.8,322.94a8,8,0,0,0-9,13.25A48,48,0,1,1,352,328a8,8,0,0,0,0-16,64,64,0,1,0,35.8,10.94Z" transform="translate(-24 0)"/><path d="M444.23,349.43A96,96,0,0,0,392,288.8V112a8,8,0,0,0-3.92-6.89l-176-104a8,8,0,0,0-8.15,0l-176,104a5.07,5.07,0,0,0-.45.36c-.16.11-.31.24-.47.36a8.07,8.07,0,0,0-1.77,2s-.09.08-.12.14V108a7.8,7.8,0,0,0-.91,2.61c0,.24-.07.47-.09.71A5.54,5.54,0,0,0,24,112V320a8,8,0,0,0,3.93,6.89l176,104c.21.1.43.19.65.27a5.65,5.65,0,0,0,.67.29,7.12,7.12,0,0,0,5.51,0,6.61,6.61,0,0,0,.68-.29,6.77,6.77,0,0,0,.64-.27l47.76-28.23a96,96,0,1,0,184.39-53.23ZM208,17.29l41.6,24.58L187.92,78.32a8,8,0,1,0,8.15,13.79L265.34,51.2l41.6,24.59L146.67,170.47l-41.6-24.59,67-39.6a8,8,0,1,0-8.14-13.78l-74.6,44.09L47.73,112Zm-69.33,167v53.42L97.34,213.32V159.91Zm120.5,166.94A95.6,95.6,0,0,0,256,376a98.8,98.8,0,0,0,.53,10L216,410V384a8,8,0,0,0-16,0v26L40,315.44V126l41.34,24.42v67.43a8,8,0,0,0,3.93,6.9l57.33,33.88a8.08,8.08,0,0,0,4.07,1.11,8,8,0,0,0,8-8v-58L200,220.57V352a8,8,0,0,0,16,0V220.57l145-85.68a8,8,0,0,0-8.15-13.78L208,206.71l-45.6-27L322.68,85.05,376,116.56V283.2A95.6,95.6,0,0,0,259.17,351.27ZM352,456a80,80,0,1,1,80-80A80,80,0,0,1,352,456Z" transform="translate(-24 0)"/><path d="M381.46,354.35a8,8,0,0,0-11.11,0L340,384.69l-6.34-6.34a8,8,0,0,0-11.31,11.31l12,12a8,8,0,0,0,11.31,0l36-36A8,8,0,0,0,381.46,354.35Z" transform="translate(-24 0)"/></svg>,
                title:"Govt. Supplies",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam."
            },
            {
                image:<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412.67 512"><title>personal-care</title><path d="M180.12,150a10,10,0,0,0-10-10h-.24a10,10,0,0,0,0,20h.24A10,10,0,0,0,180.12,150Z" transform="translate(-50)"/><path d="M229.88,160h.24a10,10,0,0,0,0-20h-.24a10,10,0,0,0,0,20Z" transform="translate(-50)"/><path d="M200,210a38,38,0,0,0,27.07-11.21,10,10,0,1,0-14.14-14.15,18.28,18.28,0,0,1-25.86,0,10,10,0,1,0-14.14,14.15A38,38,0,0,0,200,210Z" transform="translate(-50)"/><path d="M452.67,411H421V379.33a10,10,0,0,0-10-10H371.71a10,10,0,0,0-10,10V411H350V271.43a10,10,0,0,0-7.25-9.61L320,255.32V120A120.13,120.13,0,0,0,200,0a10,10,0,0,0,0,20A100.11,100.11,0,0,1,300,120V249.6l-49-14h0l-1.53-.44A90,90,0,0,0,290,160V120.85a10,10,0,0,0-10-10c-26.21,0-35.81-8.95-51.34-35.85a10,10,0,0,0-17.32,0c-14.25,24.68-63.59,33.87-91.34,33.87a10,10,0,0,0-10,10V160a90,90,0,0,0,40.55,75.16L100,249.6V120a100.59,100.59,0,0,1,40.63-80.33,10,10,0,1,0-11.92-16.06A120.68,120.68,0,0,0,80,120V255.32l-22.75,6.49A10,10,0,0,0,50,271.43V502a10,10,0,0,0,10,10H211a10,10,0,0,0,0-20h-1V467.48l46.18-92.9a10,10,0,0,0,.31-8.21L241.75,330l24.18-20.28a10,10,0,0,0,3.37-9.63l-8.2-40.8L330,279V411a10,10,0,0,0-10,10v39.25a10,10,0,0,0,10,10V492H290V416.27c9.71-8.61,15.75-24,15.75-41.19,0-19.6-7.76-35.78-20.75-43.28a10,10,0,0,0-10,17.32c6.63,3.83,10.75,13.77,10.75,26S281.23,399,275,402.57a10,10,0,0,0-5,8.66V502a10,10,0,0,0,10,10h60a10,10,0,0,0,10-10V470.29h11.71V502a10,10,0,0,0,10,10H411a10,10,0,0,0,10-10V470.29h31.71a10,10,0,0,0,10-10V421A10,10,0,0,0,452.67,411ZM160.54,253.1l2.43-.69,19.17,71.53-30.67-25.73Zm13.82,90.42L190,356.64v65.9l-26.26-52.83Zm8.21-95.22a90.15,90.15,0,0,0,34.85,0l-17.42,65ZM130,160V128.55c26.41-1.61,66.58-9.57,88.92-31.21,13.31,20,26.83,30.86,51.08,33.08V160a70.11,70.11,0,0,1-43.23,64.67,8.48,8.48,0,0,0-.88.35,69.75,69.75,0,0,1-51.79,0q-.4-.18-.84-.33A70.1,70.1,0,0,1,130,160Zm0,332V411.23a10,10,0,0,0-5-8.66c-6.23-3.6-10.75-15.16-10.75-27.49s4.12-22.13,10.75-26a10,10,0,1,0-10-17.32c-13,7.5-20.75,23.68-20.75,43.28,0,17.17,6,32.58,15.75,41.19V492H70V279l68.9-19.68-8.2,40.8a10,10,0,0,0,3.37,9.63L158.25,330l-14.74,36.37a10,10,0,0,0,.31,8.21L190,467.48V492ZM236.26,369.71,210,422.54v-65.9l15.64-13.12Zm12.26-71.5-30.66,25.73L237,252.41l2.43.69ZM442.67,450.29H411a10,10,0,0,0-10,10V492H381.71V460.29a10,10,0,0,0-10-10H340V431h31.71a10,10,0,0,0,10-10V389.33H401V421a10,10,0,0,0,10,10h31.71Z" transform="translate(-50)"/><path d="M258.34,502a10,10,0,1,1-10-10A10,10,0,0,1,258.34,502Z" transform="translate(-50)"/><path d="M169.34,18a10,10,0,1,1-10-10A10,10,0,0,1,169.34,18Z" transform="translate(-50)"/></svg>,
                title:"Personal Care",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam."
            },
            {
                image:<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480.6 512"><title>pharma</title><path d="M125.7,126a10,10,0,1,0,10,10A10,10,0,0,0,125.7,126Z" transform="translate(-15.7)"/><path d="M215.69,313h-30V283a10,10,0,0,0-20,0v30h-30a10,10,0,1,0,0,20h30v30a10,10,0,0,0,20,0V333h30a10,10,0,1,0,0-20Z" transform="translate(-15.7)"/><path d="M485.58,322A80,80,0,0,0,376.3,292.71l-40.61,23.45V229.32a50.35,50.35,0,0,0-10-30l-50-66.66V104.27a30,30,0,0,0,20-28.27V30a30,30,0,0,0-30-30H85.7a30,30,0,0,0-30,30V76a30.05,30.05,0,0,0,20,28.28v28.38l-50,66.67a50.3,50.3,0,0,0-10,30V423a50.06,50.06,0,0,0,50,50H226.4a79.92,79.92,0,0,0,108.66,28.28l121.24-70A80.06,80.06,0,0,0,485.58,322ZM75.7,30a10,10,0,0,1,10-10h180a10,10,0,0,1,10,10V76a10,10,0,0,1-10,10H85.7a10,10,0,0,1-10-10V30Zm-34,181.32L93.7,142a10,10,0,0,0,2-6V106h160v20h-90a10,10,0,1,0,0,20h95l49,65.33A30.25,30.25,0,0,1,315.47,226H35.91A30.25,30.25,0,0,1,41.7,211.32ZM65.7,453a30,30,0,0,1-30-30v-10.1H217.38a80.16,80.16,0,0,0,.48,40.1Zm159.52-60H35.7V246h280V327.7l-60.62,35A79.41,79.41,0,0,0,225.22,393Zm99.85,90.95a60,60,0,1,1-60-103.91l54.28-31.34,60,103.92Zm121.23-70L396.66,442.6l-60-103.92L386.3,310a60,60,0,0,1,60,103.92Z" transform="translate(-15.7)"/></svg>,
                title:"Pharma",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam."
            },
        ]
    
    const renderServices = () =>{
        return services.map(item=>{
            return(<div className="col-lg-3 mb-3 services-item" onClick={this.onOpenModal}>
                    <ServiceItem data={item} />
            </div>)
        })
    }
    return(
        <div className="tile-services">
           
            <Header/>
            <InnerHeader title="Our Services" subTitle="What We Do !"/>
            <SectionHeading title="OUR SERVICES" subTitle="We work across varied verticals and industries "/>
            <div className="container">
                <div className="row mt-3">
                <Modal  open={open} onClose={this.onCloseModal} center>
                    <div className="modal-body-full">
                    <div className="icon">
                        <svg id="Capa_1" fill="#fff"  data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><title>printing</title>
                        <path className="white" d="M50,32a5,5,0,1,0-5-5A5,5,0,0,0,50,32Zm0-8a3,3,0,1,1-3,3A3,3,0,0,1,50,24Z"/><path className="white" d="M42,43H18a1,1,0,0,0,0,2H42a1,1,0,0,0,0-2Z"/><path className="white" d="M42,48H18a1,1,0,0,0,0,2H42a1,1,0,0,0,0-2Z"/><path className="white" d="M51,17V0H9V17H0V51H6v3H9v6H51V54h3V51h6V17ZM11,2H49V17H11ZM9,19H58V35H2V19ZM8,52V45a1,1,0,0,0-2,0v4H2V37H9V52Zm41,6H11V37H49V58Zm5-9V45a1,1,0,0,0-2,0v7H51V37h7V49Z"/></svg>
                    </div>
                    <h4 className="pt-2 pb-2">FMCG/B2B/ E-commerce</h4>    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam.</p>
                    </div>
                   
            </Modal>
                {renderServices()}
                </div>
            </div>
        </div>
        )
    }
}

export default Services;