import React,{Component} from "react";
import { Button, Tooltip } from 'reactstrap';
import TooltipItem from './TooltipItem';

import './why-choose-us.scss';

class WhyChooseUs extends Component{
    constructor(){
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltips: [
              {
                image:'./assets/images/Icon-0.png',
                placement: 'left',
                text: 'Left'
              },
              {
                image:'./assets/images/Icon-0.png',
                placement: 'left',
                text: 'Left'
              },
              {
                image:'./assets/images/Icon-0.png',
                placement: 'left',
                text: 'Left'
              },
              {
                image:'./assets/images/Icon-0.png',
                placement: 'left',
                text: 'Left'
              },
              {
                image:'./assets/images/Icon-0.png',
                placement: 'top',
                text: 'Top'
              },
              {
                image:'./assets/images/Icon-0.png',
                placement: 'right',
                text: 'Right'
              },
              {
                image:'./assets/images/Icon-0.png',
                placement: 'right',
                text: 'Right'
              },
              {
                image:'./assets/images/Icon-0.png',
                placement: 'right',
                text: 'Right'
              },
              {
                image:'./assets/images/Icon-0.png',
                placement: 'right',
                text: 'Right'
              },
              {
                image:'./assets/images/Icon-0.png',
                placement: 'right',
                text: 'Right'
              }
            ]
          };
    }
    toggle() {
        this.setState({
          tooltipOpen: !this.state.tooltipOpen
        });
    }
    componentDidMount(){
       
    }
    render(){
        return(
            <div >
                <div className="tile-choose-us text-center m-0 col-12">
                <h1 className="col-lg-12">Why <span>Choose Us</span></h1>
                <p>Search our databases of the Top 100 providers in key segments of the supply chain industry.
                </p>
                <div className="row d-flex justify-content-center">
                <div className="features-section col-lg-6">
                   
                        <div className='circle-container'>
                            <ul>
                            <li  className="mr-1" color="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 480.55 480.56"><title>icon-telephone-fablas</title><path class="icon" fill="#cccccc" d="M365.35,317.9c-15.7-15.5-35.3-15.5-50.9,0-11.9,11.8-23.8,23.6-35.5,35.6-3.2,3.3-5.9,4-9.8,1.8-7.7-4.2-15.9-7.6-23.3-12.2-34.5-21.7-63.4-49.6-89-81-12.7-15.6-24-32.3-31.9-51.1-1.6-3.8-1.3-6.3,1.8-9.4,11.9-11.5,23.5-23.3,35.2-35.1,16.3-16.4,16.3-35.6-.1-52.1-9.3-9.4-18.6-18.6-27.9-28-9.6-9.6-19.1-19.3-28.8-28.8-15.7-15.3-35.3-15.3-50.9.1-12,11.8-23.5,23.9-35.7,35.5-11.3,10.7-17,23.8-18.2,39.1-1.9,24.9,4.2,48.4,12.8,71.3,17.6,47.4,44.4,89.5,76.9,128.1,43.9,52.2,96.3,93.5,157.6,123.3,27.6,13.4,56.2,23.7,87.3,25.4,21.4,1.2,40-4.2,54.9-20.9,10.2-11.4,21.7-21.8,32.5-32.7,16-16.2,16.1-35.8.2-51.8Q394.05,346.35,365.35,317.9Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M346.25,238.2l36.9-6.3A165.63,165.63,0,0,0,243.05,96l-5.2,37.1a128,128,0,0,1,108.4,105.1Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M404,77.8A272.09,272.09,0,0,0,248,0l-5.2,37.1a237.42,237.42,0,0,1,200.9,194.7l36.9-6.3A274.08,274.08,0,0,0,404,77.8Z" transform="translate(-0.01)"/></svg>
                                <div className="content">
                                  <p>Largest <span> Destinations .05</span></p>
                                  <div>The best contact you will get here lorem ipsum dolor sit amet</div>
                                </div>
                            </li>
                            <li  className="mr-1" color="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 480.55 480.56"><title>icon-telephone-fablas</title><path class="icon" fill="#cccccc" d="M365.35,317.9c-15.7-15.5-35.3-15.5-50.9,0-11.9,11.8-23.8,23.6-35.5,35.6-3.2,3.3-5.9,4-9.8,1.8-7.7-4.2-15.9-7.6-23.3-12.2-34.5-21.7-63.4-49.6-89-81-12.7-15.6-24-32.3-31.9-51.1-1.6-3.8-1.3-6.3,1.8-9.4,11.9-11.5,23.5-23.3,35.2-35.1,16.3-16.4,16.3-35.6-.1-52.1-9.3-9.4-18.6-18.6-27.9-28-9.6-9.6-19.1-19.3-28.8-28.8-15.7-15.3-35.3-15.3-50.9.1-12,11.8-23.5,23.9-35.7,35.5-11.3,10.7-17,23.8-18.2,39.1-1.9,24.9,4.2,48.4,12.8,71.3,17.6,47.4,44.4,89.5,76.9,128.1,43.9,52.2,96.3,93.5,157.6,123.3,27.6,13.4,56.2,23.7,87.3,25.4,21.4,1.2,40-4.2,54.9-20.9,10.2-11.4,21.7-21.8,32.5-32.7,16-16.2,16.1-35.8.2-51.8Q394.05,346.35,365.35,317.9Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M346.25,238.2l36.9-6.3A165.63,165.63,0,0,0,243.05,96l-5.2,37.1a128,128,0,0,1,108.4,105.1Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M404,77.8A272.09,272.09,0,0,0,248,0l-5.2,37.1a237.42,237.42,0,0,1,200.9,194.7l36.9-6.3A274.08,274.08,0,0,0,404,77.8Z" transform="translate(-0.01)"/></svg>
                                <div className="content1">
                                    <p>Costumer  <span>Support .04</span></p>
                                    <div>The best contact you will get here lorem ipsum dolor sit amet</div>
                                </div>
                            </li>
                            <li  className="mr-1" color="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 480.55 480.56"><title>icon-telephone-fablas</title><path class="icon" fill="#cccccc" d="M365.35,317.9c-15.7-15.5-35.3-15.5-50.9,0-11.9,11.8-23.8,23.6-35.5,35.6-3.2,3.3-5.9,4-9.8,1.8-7.7-4.2-15.9-7.6-23.3-12.2-34.5-21.7-63.4-49.6-89-81-12.7-15.6-24-32.3-31.9-51.1-1.6-3.8-1.3-6.3,1.8-9.4,11.9-11.5,23.5-23.3,35.2-35.1,16.3-16.4,16.3-35.6-.1-52.1-9.3-9.4-18.6-18.6-27.9-28-9.6-9.6-19.1-19.3-28.8-28.8-15.7-15.3-35.3-15.3-50.9.1-12,11.8-23.5,23.9-35.7,35.5-11.3,10.7-17,23.8-18.2,39.1-1.9,24.9,4.2,48.4,12.8,71.3,17.6,47.4,44.4,89.5,76.9,128.1,43.9,52.2,96.3,93.5,157.6,123.3,27.6,13.4,56.2,23.7,87.3,25.4,21.4,1.2,40-4.2,54.9-20.9,10.2-11.4,21.7-21.8,32.5-32.7,16-16.2,16.1-35.8.2-51.8Q394.05,346.35,365.35,317.9Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M346.25,238.2l36.9-6.3A165.63,165.63,0,0,0,243.05,96l-5.2,37.1a128,128,0,0,1,108.4,105.1Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M404,77.8A272.09,272.09,0,0,0,248,0l-5.2,37.1a237.42,237.42,0,0,1,200.9,194.7l36.9-6.3A274.08,274.08,0,0,0,404,77.8Z" transform="translate(-0.01)"/></svg>
                                <div className="content2">
                                    <p>Costumer <span> Support .03</span></p>
                                    <div>The best contact you will get here lorem ipsum dolor sit amet</div>
                                </div>
                            </li>
                            <li  className="mr-1" color="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 480.55 480.56"><title>icon-telephone-fablas</title><path class="icon" fill="#cccccc" d="M365.35,317.9c-15.7-15.5-35.3-15.5-50.9,0-11.9,11.8-23.8,23.6-35.5,35.6-3.2,3.3-5.9,4-9.8,1.8-7.7-4.2-15.9-7.6-23.3-12.2-34.5-21.7-63.4-49.6-89-81-12.7-15.6-24-32.3-31.9-51.1-1.6-3.8-1.3-6.3,1.8-9.4,11.9-11.5,23.5-23.3,35.2-35.1,16.3-16.4,16.3-35.6-.1-52.1-9.3-9.4-18.6-18.6-27.9-28-9.6-9.6-19.1-19.3-28.8-28.8-15.7-15.3-35.3-15.3-50.9.1-12,11.8-23.5,23.9-35.7,35.5-11.3,10.7-17,23.8-18.2,39.1-1.9,24.9,4.2,48.4,12.8,71.3,17.6,47.4,44.4,89.5,76.9,128.1,43.9,52.2,96.3,93.5,157.6,123.3,27.6,13.4,56.2,23.7,87.3,25.4,21.4,1.2,40-4.2,54.9-20.9,10.2-11.4,21.7-21.8,32.5-32.7,16-16.2,16.1-35.8.2-51.8Q394.05,346.35,365.35,317.9Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M346.25,238.2l36.9-6.3A165.63,165.63,0,0,0,243.05,96l-5.2,37.1a128,128,0,0,1,108.4,105.1Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M404,77.8A272.09,272.09,0,0,0,248,0l-5.2,37.1a237.42,237.42,0,0,1,200.9,194.7l36.9-6.3A274.08,274.08,0,0,0,404,77.8Z" transform="translate(-0.01)"/></svg>
                                <div className="content3">
                                    <p>Largest <span>Wherehouse .02</span></p>
                                    <div>The best contact you will get here lorem ipsum dolor sit amet</div>
                                </div>
                            </li>
                           
                            <li  className="mr-1" color="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 480.55 480.56"><title>icon-telephone-fablas</title><path class="icon" fill="#cccccc" d="M365.35,317.9c-15.7-15.5-35.3-15.5-50.9,0-11.9,11.8-23.8,23.6-35.5,35.6-3.2,3.3-5.9,4-9.8,1.8-7.7-4.2-15.9-7.6-23.3-12.2-34.5-21.7-63.4-49.6-89-81-12.7-15.6-24-32.3-31.9-51.1-1.6-3.8-1.3-6.3,1.8-9.4,11.9-11.5,23.5-23.3,35.2-35.1,16.3-16.4,16.3-35.6-.1-52.1-9.3-9.4-18.6-18.6-27.9-28-9.6-9.6-19.1-19.3-28.8-28.8-15.7-15.3-35.3-15.3-50.9.1-12,11.8-23.5,23.9-35.7,35.5-11.3,10.7-17,23.8-18.2,39.1-1.9,24.9,4.2,48.4,12.8,71.3,17.6,47.4,44.4,89.5,76.9,128.1,43.9,52.2,96.3,93.5,157.6,123.3,27.6,13.4,56.2,23.7,87.3,25.4,21.4,1.2,40-4.2,54.9-20.9,10.2-11.4,21.7-21.8,32.5-32.7,16-16.2,16.1-35.8.2-51.8Q394.05,346.35,365.35,317.9Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M346.25,238.2l36.9-6.3A165.63,165.63,0,0,0,243.05,96l-5.2,37.1a128,128,0,0,1,108.4,105.1Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M404,77.8A272.09,272.09,0,0,0,248,0l-5.2,37.1a237.42,237.42,0,0,1,200.9,194.7l36.9-6.3A274.08,274.08,0,0,0,404,77.8Z" transform="translate(-0.01)"/></svg>
                                <div className="content4">
                                    <p>Largest <span>Wherehouse .01</span></p>
                                    <div>The best contact you will get here lorem ipsum dolor sit amet</div>
                                </div>
                            </li>
                            
                            <li  className="mr-1" color="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 480.55 480.56"><title>icon-telephone-fablas</title><path class="icon" fill="#cccccc" d="M365.35,317.9c-15.7-15.5-35.3-15.5-50.9,0-11.9,11.8-23.8,23.6-35.5,35.6-3.2,3.3-5.9,4-9.8,1.8-7.7-4.2-15.9-7.6-23.3-12.2-34.5-21.7-63.4-49.6-89-81-12.7-15.6-24-32.3-31.9-51.1-1.6-3.8-1.3-6.3,1.8-9.4,11.9-11.5,23.5-23.3,35.2-35.1,16.3-16.4,16.3-35.6-.1-52.1-9.3-9.4-18.6-18.6-27.9-28-9.6-9.6-19.1-19.3-28.8-28.8-15.7-15.3-35.3-15.3-50.9.1-12,11.8-23.5,23.9-35.7,35.5-11.3,10.7-17,23.8-18.2,39.1-1.9,24.9,4.2,48.4,12.8,71.3,17.6,47.4,44.4,89.5,76.9,128.1,43.9,52.2,96.3,93.5,157.6,123.3,27.6,13.4,56.2,23.7,87.3,25.4,21.4,1.2,40-4.2,54.9-20.9,10.2-11.4,21.7-21.8,32.5-32.7,16-16.2,16.1-35.8.2-51.8Q394.05,346.35,365.35,317.9Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M346.25,238.2l36.9-6.3A165.63,165.63,0,0,0,243.05,96l-5.2,37.1a128,128,0,0,1,108.4,105.1Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M404,77.8A272.09,272.09,0,0,0,248,0l-5.2,37.1a237.42,237.42,0,0,1,200.9,194.7l36.9-6.3A274.08,274.08,0,0,0,404,77.8Z" transform="translate(-0.01)"/></svg>
                                <div className="content5">
                                    <p>Contract  <span>Logistic</span></p>
                                    <div>The best contact you will get here lorem ipsum dolor sit amet</div>
                                </div>
                            </li>
                            <li  className="mr-1" color="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 480.55 480.56"><title>icon-telephone-fablas</title><path class="icon" fill="#cccccc" d="M365.35,317.9c-15.7-15.5-35.3-15.5-50.9,0-11.9,11.8-23.8,23.6-35.5,35.6-3.2,3.3-5.9,4-9.8,1.8-7.7-4.2-15.9-7.6-23.3-12.2-34.5-21.7-63.4-49.6-89-81-12.7-15.6-24-32.3-31.9-51.1-1.6-3.8-1.3-6.3,1.8-9.4,11.9-11.5,23.5-23.3,35.2-35.1,16.3-16.4,16.3-35.6-.1-52.1-9.3-9.4-18.6-18.6-27.9-28-9.6-9.6-19.1-19.3-28.8-28.8-15.7-15.3-35.3-15.3-50.9.1-12,11.8-23.5,23.9-35.7,35.5-11.3,10.7-17,23.8-18.2,39.1-1.9,24.9,4.2,48.4,12.8,71.3,17.6,47.4,44.4,89.5,76.9,128.1,43.9,52.2,96.3,93.5,157.6,123.3,27.6,13.4,56.2,23.7,87.3,25.4,21.4,1.2,40-4.2,54.9-20.9,10.2-11.4,21.7-21.8,32.5-32.7,16-16.2,16.1-35.8.2-51.8Q394.05,346.35,365.35,317.9Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M346.25,238.2l36.9-6.3A165.63,165.63,0,0,0,243.05,96l-5.2,37.1a128,128,0,0,1,108.4,105.1Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M404,77.8A272.09,272.09,0,0,0,248,0l-5.2,37.1a237.42,237.42,0,0,1,200.9,194.7l36.9-6.3A274.08,274.08,0,0,0,404,77.8Z" transform="translate(-0.01)"/></svg>
                                <div className="content6">
                                    <p>Contract <span>Logistic</span></p>
                                    <div>The best contact you will get here lorem ipsum dolor sit amet</div>
                                </div>
                            </li>
                            <li  className="mr-1" color="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 480.55 480.56"><title>icon-telephone-fablas</title><path class="icon" fill="#cccccc" d="M365.35,317.9c-15.7-15.5-35.3-15.5-50.9,0-11.9,11.8-23.8,23.6-35.5,35.6-3.2,3.3-5.9,4-9.8,1.8-7.7-4.2-15.9-7.6-23.3-12.2-34.5-21.7-63.4-49.6-89-81-12.7-15.6-24-32.3-31.9-51.1-1.6-3.8-1.3-6.3,1.8-9.4,11.9-11.5,23.5-23.3,35.2-35.1,16.3-16.4,16.3-35.6-.1-52.1-9.3-9.4-18.6-18.6-27.9-28-9.6-9.6-19.1-19.3-28.8-28.8-15.7-15.3-35.3-15.3-50.9.1-12,11.8-23.5,23.9-35.7,35.5-11.3,10.7-17,23.8-18.2,39.1-1.9,24.9,4.2,48.4,12.8,71.3,17.6,47.4,44.4,89.5,76.9,128.1,43.9,52.2,96.3,93.5,157.6,123.3,27.6,13.4,56.2,23.7,87.3,25.4,21.4,1.2,40-4.2,54.9-20.9,10.2-11.4,21.7-21.8,32.5-32.7,16-16.2,16.1-35.8.2-51.8Q394.05,346.35,365.35,317.9Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M346.25,238.2l36.9-6.3A165.63,165.63,0,0,0,243.05,96l-5.2,37.1a128,128,0,0,1,108.4,105.1Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M404,77.8A272.09,272.09,0,0,0,248,0l-5.2,37.1a237.42,237.42,0,0,1,200.9,194.7l36.9-6.3A274.08,274.08,0,0,0,404,77.8Z" transform="translate(-0.01)"/></svg>
                                <div className="content7">
                                    <p>08. Logistic  <span>Services</span></p>
                                    <div>The best contact you will get here lorem ipsum dolor sit amet</div>
                                </div>
                            </li>
                            <li  className="mr-1" color="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 480.55 480.56"><title>icon-telephone-fablas</title><path class="icon" fill="#cccccc" d="M365.35,317.9c-15.7-15.5-35.3-15.5-50.9,0-11.9,11.8-23.8,23.6-35.5,35.6-3.2,3.3-5.9,4-9.8,1.8-7.7-4.2-15.9-7.6-23.3-12.2-34.5-21.7-63.4-49.6-89-81-12.7-15.6-24-32.3-31.9-51.1-1.6-3.8-1.3-6.3,1.8-9.4,11.9-11.5,23.5-23.3,35.2-35.1,16.3-16.4,16.3-35.6-.1-52.1-9.3-9.4-18.6-18.6-27.9-28-9.6-9.6-19.1-19.3-28.8-28.8-15.7-15.3-35.3-15.3-50.9.1-12,11.8-23.5,23.9-35.7,35.5-11.3,10.7-17,23.8-18.2,39.1-1.9,24.9,4.2,48.4,12.8,71.3,17.6,47.4,44.4,89.5,76.9,128.1,43.9,52.2,96.3,93.5,157.6,123.3,27.6,13.4,56.2,23.7,87.3,25.4,21.4,1.2,40-4.2,54.9-20.9,10.2-11.4,21.7-21.8,32.5-32.7,16-16.2,16.1-35.8.2-51.8Q394.05,346.35,365.35,317.9Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M346.25,238.2l36.9-6.3A165.63,165.63,0,0,0,243.05,96l-5.2,37.1a128,128,0,0,1,108.4,105.1Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M404,77.8A272.09,272.09,0,0,0,248,0l-5.2,37.1a237.42,237.42,0,0,1,200.9,194.7l36.9-6.3A274.08,274.08,0,0,0,404,77.8Z" transform="translate(-0.01)"/></svg>
                                <div className="content8">
                                    <p>Largest <span>Wherehouse .01</span></p>
                                    <div>The best contact you will get here lorem ipsum dolor sit amet</div>
                                </div>
                            </li>
                            <li  className="mr-1" color="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 480.55 480.56"><title>icon-telephone-fablas</title><path class="icon" fill="#cccccc" d="M365.35,317.9c-15.7-15.5-35.3-15.5-50.9,0-11.9,11.8-23.8,23.6-35.5,35.6-3.2,3.3-5.9,4-9.8,1.8-7.7-4.2-15.9-7.6-23.3-12.2-34.5-21.7-63.4-49.6-89-81-12.7-15.6-24-32.3-31.9-51.1-1.6-3.8-1.3-6.3,1.8-9.4,11.9-11.5,23.5-23.3,35.2-35.1,16.3-16.4,16.3-35.6-.1-52.1-9.3-9.4-18.6-18.6-27.9-28-9.6-9.6-19.1-19.3-28.8-28.8-15.7-15.3-35.3-15.3-50.9.1-12,11.8-23.5,23.9-35.7,35.5-11.3,10.7-17,23.8-18.2,39.1-1.9,24.9,4.2,48.4,12.8,71.3,17.6,47.4,44.4,89.5,76.9,128.1,43.9,52.2,96.3,93.5,157.6,123.3,27.6,13.4,56.2,23.7,87.3,25.4,21.4,1.2,40-4.2,54.9-20.9,10.2-11.4,21.7-21.8,32.5-32.7,16-16.2,16.1-35.8.2-51.8Q394.05,346.35,365.35,317.9Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M346.25,238.2l36.9-6.3A165.63,165.63,0,0,0,243.05,96l-5.2,37.1a128,128,0,0,1,108.4,105.1Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M404,77.8A272.09,272.09,0,0,0,248,0l-5.2,37.1a237.42,237.42,0,0,1,200.9,194.7l36.9-6.3A274.08,274.08,0,0,0,404,77.8Z" transform="translate(-0.01)"/></svg>
                                <div className="content9">
                                    <p>10. Goods <span>Whe Tracking Support</span></p>
                                    <div>The best contact you will get here lorem ipsum dolor sit amet</div>
                                </div>
                            </li>
                            
                                {/* { this.state.tooltips.map((tooltip, i) => {
                                  return  <li  className="mr-1" color="secondary">
                                            <img src="../../../assets/images/Icon-0.png"/>
                                            <div className="content">
                                              <p>Largest <span>Wherehouse .01</span></p>
                                              <div>The best contact you will get here lorem ipsum dolor sit amet</div>
                                            </div>
                                          </li>
                                    // return <TooltipItem key={i} item={tooltip} id={i} />;
                                })} */}
                            </ul>
                            <div id="earth"></div>
                        </div>
{/*                        
                        <div className="goods">
                            <img src="./assets/images/products.png"/>
                        </div> */}
                    </div>
                </div>
            </div>
            </div>
        )
    }
   
}

export default WhyChooseUs;
