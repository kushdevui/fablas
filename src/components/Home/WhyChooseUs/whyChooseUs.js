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
                image:'../../../assets/images/Icon-0.png',
                placement: 'left',
                text: 'Left'
              },
              {
                image:'../../../assets/images/Icon-0.png',
                placement: 'left',
                text: 'Left'
              },
              {
                image:'../../../assets/images/Icon-0.png',
                placement: 'left',
                text: 'Left'
              },
              {
                image:'../../../assets/images/Icon-0.png',
                placement: 'left',
                text: 'Left'
              },
              {
                image:'../../../assets/images/Icon-0.png',
                placement: 'top',
                text: 'Top'
              },
              {
                image:'../../../assets/images/Icon-0.png',
                placement: 'right',
                text: 'Right'
              },
              {
                image:'../../../assets/images/Icon-0.png',
                placement: 'right',
                text: 'Right'
              },
              {
                image:'../../../assets/images/Icon-0.png',
                placement: 'right',
                text: 'Right'
              },
              {
                image:'../../../assets/images/Icon-0.png',
                placement: 'right',
                text: 'Right'
              },
              {
                image:'../../../assets/images/Icon-0.png',
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
            <div className="tile-choose-us text-center">
                <h1 className="col-lg-12">Why <span>Choose Us</span></h1>
                <p>Search our databases of the Top 100 providers in key segments of the supply chain industry.
                </p>
                <div className="row d-flex justify-content-center">
                <div className="features-section col-lg-6">
                    <div id="earth"></div>
                        <div className='circle-container'>
                            <ul>
                            <li  className="mr-1" color="secondary">
                                <img src="../../../assets/images/Icon-0.png"/>
                                <div className="content">
                                  <p>Largest <span> Destinations .05</span></p>
                                  <div>The best contact you will get here lorem ipsum dolor sit amet</div>
                                </div>
                            </li>
                            <li  className="mr-1" color="secondary">
                                <img src="../../../assets/images/Icon-0.png"/>
                                <div className="content1">
                                    <p>Costumer  <span>Support .04</span></p>
                                    <div>The best contact you will get here lorem ipsum dolor sit amet</div>
                                </div>
                            </li>
                            <li  className="mr-1" color="secondary">
                                <img src="../../../assets/images/Icon-0.png"/>
                                <div className="content2">
                                    <p>Costumer <span> Support .03</span></p>
                                    <div>The best contact you will get here lorem ipsum dolor sit amet</div>
                                </div>
                            </li>
                            <li  className="mr-1" color="secondary">
                                <img src="../../../assets/images/Icon-0.png"/>
                                <div className="content3">
                                    <p>Largest <span>Wherehouse .02</span></p>
                                    <div>The best contact you will get here lorem ipsum dolor sit amet</div>
                                </div>
                            </li>
                           
                            <li  className="mr-1" color="secondary">
                                <img src="../../../assets/images/Icon-1.png"/>
                                <div className="content4">
                                    <p>Largest <span>Wherehouse .01</span></p>
                                    <div>The best contact you will get here lorem ipsum dolor sit amet</div>
                                </div>
                            </li>
                            
                            <li  className="mr-1" color="secondary">
                                <img src="../../../assets/images/Icon-2.png"/>
                                <div className="content5">
                                    <p>Contract  <span>Logistic</span></p>
                                    <div>The best contact you will get here lorem ipsum dolor sit amet</div>
                                </div>
                            </li>
                            <li  className="mr-1" color="secondary">
                                <img src="../../../assets/images/Icon-3.png"/>
                                <div className="content6">
                                    <p>Contract <span>Logistic</span></p>
                                    <div>The best contact you will get here lorem ipsum dolor sit amet</div>
                                </div>
                            </li>
                            <li  className="mr-1" color="secondary">
                                <img src="../../../assets/images/Icon-4.png"/>
                                <div className="content7">
                                    <p>08. Logistic  <span>Services</span></p>
                                    <div>The best contact you will get here lorem ipsum dolor sit amet</div>
                                </div>
                            </li>
                            <li  className="mr-1" color="secondary">
                                <img src="../../../assets/images/Icon-4.png"/>
                                <div className="content8">
                                    <p>Largest <span>Wherehouse .01</span></p>
                                    <div>The best contact you will get here lorem ipsum dolor sit amet</div>
                                </div>
                            </li>
                            <li  className="mr-1" color="secondary">
                                <img src="../../../assets/images/Icon-4.png"/>
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
                        </div>
                       
                        <div className="goods">
                            <img src="../../../assets/images/products.png"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
   
}

export default WhyChooseUs;
