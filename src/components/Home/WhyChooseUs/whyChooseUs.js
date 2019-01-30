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
                                { this.state.tooltips.map((tooltip, i) => {
                                    return <TooltipItem key={i} item={tooltip} id={i} />;
                                })}
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
