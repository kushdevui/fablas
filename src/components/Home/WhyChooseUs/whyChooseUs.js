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
            <div>
                <div className="tile-choose-us pt-0 pt-lg-5 pb-0 pb-lg-5 d-none d-lg-block text-center m-0 col-12">
                    <h1 className="col-lg-12">Why <span>Choose Us</span></h1>
                    <p>Compelling reasons to choose to have a business partnership with Fablas Impex Pvt. Ltd.
                    </p>
                    <div className="col-lg-12 choose-use-section">
                        <img src="./assets/images/WhyChooseUs.png" className="img-fluid"/>
                        <img src="./assets/images/Globe.gif" width="450" className="globe"/>
                    </div>
                    
                </div>
               
            </div>
        )
    }
   
}

export default WhyChooseUs;
