import React,{Component} from 'react';

import Header from "../Header/header";
import InnerHeader from "../../container/InnerHeader/innerHeader";
import Footer from "../Footer/footer";
import './career.scss';

class Career extends Component{
    constructor(props){
        super(props)
        this.state = {
            showTab: "vendor"
        }
    }
    changeTab = (event) =>{
        //console.log(event.target.dataset.id);
        if(event.target.dataset.id=="vendor"){
            this.setState({
                showTab:"vendor"
            })
        }
        else if(event.target.dataset.id=="distributor"){
            this.setState({
                showTab:"distributor"
            })
        }
        else{
            this.setState({
                showTab:"job"
            })
        }
       
    }

    render(){
        const RenderDistributor = <div className="row vendor-form justify-content-center">
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Full Name" className="form-control"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control" placeholder="Company Name"/>
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea placeholder="Company Address" className="form-control"></textarea>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control" placeholder="Phone"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control" placeholder="City"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control" placeholder="Country"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control" placeholder="Invetment Range"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control" placeholder="Website"/>
                                    </div>
                                   
                                    <div className="col-lg-12">
                                        <textarea placeholder="Please let us know about you" className="form-control"></textarea>
                                    </div>
                                    <div className="col-lg-3">
                                        <input type="submit" className="btn btn-danger w-100"/>
                                    </div>
                                </div>;
        const RenderVendor =  <div className="row vendor-form justify-content-center">
        <div className="col-lg-6">
            <input type="text" placeholder="Full Name" className="form-control"/>
        </div>
        <div className="col-lg-6">
            <input type="text" className="form-control" placeholder="Business Name"/>
        </div>
        <div className="col-lg-12">
            <textarea placeholder="Business Address" className="form-control"></textarea>
        </div>
        <div className="col-lg-6">
            <input type="text" className="form-control" placeholder="City"/>
        </div>
        <div className="col-lg-6">
            <input type="text" className="form-control" placeholder="Country"/>
        </div>
        <div className="col-lg-6">
            <input type="text" className="form-control" placeholder="Primary Business Type"/>
        </div>
        <div className="col-lg-6">
            <input type="text" className="form-control" placeholder="Website"/>
        </div>
        <div className="col-lg-3">
            <input type="submit" className="btn btn-danger w-100"/>
        </div>
    </div>;   
        const RenderJobSeeker = <div className="row">
        <div className="col-lg-8">
            <h3>Current Openings</h3>
            <div className="row">
                <div className="col-lg-4 ">
                    <div className="carrer-item">
                        <img src="./assets/images/career.png" className="img-fluid"/>
                        <p className="pt-4 text-center">
                            Need an experienced Digital Marketer
                        </p>
                        <button className="btn form-control">Apply</button>
                    </div>
                </div>
                <div className="col-lg-4 ">
                    <div className="carrer-item">
                        <img src="./assets/images/career.png" className="img-fluid"/>
                        <p className="pt-4 text-center">
                            Need an experienced Digital Marketer
                        </p>
                        <button className="btn form-control">Apply</button>
                    </div>
                </div>
                <div className="col-lg-4 ">
                    <div className="carrer-item">
                        <img src="./assets/images/career.png" className="img-fluid"/>
                        <p className="pt-4 text-center">
                            Need an experienced Digital Marketer
                        </p>
                        <button className="btn form-control">Apply</button>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="col-lg-4">
            <div className="contact-form">
                <div className="head">
                    <h4>want to join us ?</h4>
                </div>
                <div className="form-section">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="email form-control" placeholder="Your Email"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="phone col-lg-12 form-control" placeholder="Phone" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="phone form-control" placeholder="Position Applying For" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Message"></textarea>
                    </div>
                    <div className="form-group">
                        <button className="col-lg-12 btn btn-danger">Submit</button>
                    </div>
                </div>
               
            </div>
        </div>
    </div>;
         
        const showrecentTab = this.state.showTab?this.state.showTab:"";
        return(
            <div className="career-tile">
                <Header/>
                <InnerHeader title="Career" subTitle="work with us"/>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-4 p-4 career-category" data-id="vendor"  onClick={this.changeTab}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-id="vendor" viewBox="0 0 480.55 480.56"><title>icon-telephone-fablas</title><path class="icon" fill="#999999" d="M365.35,317.9c-15.7-15.5-35.3-15.5-50.9,0-11.9,11.8-23.8,23.6-35.5,35.6-3.2,3.3-5.9,4-9.8,1.8-7.7-4.2-15.9-7.6-23.3-12.2-34.5-21.7-63.4-49.6-89-81-12.7-15.6-24-32.3-31.9-51.1-1.6-3.8-1.3-6.3,1.8-9.4,11.9-11.5,23.5-23.3,35.2-35.1,16.3-16.4,16.3-35.6-.1-52.1-9.3-9.4-18.6-18.6-27.9-28-9.6-9.6-19.1-19.3-28.8-28.8-15.7-15.3-35.3-15.3-50.9.1-12,11.8-23.5,23.9-35.7,35.5-11.3,10.7-17,23.8-18.2,39.1-1.9,24.9,4.2,48.4,12.8,71.3,17.6,47.4,44.4,89.5,76.9,128.1,43.9,52.2,96.3,93.5,157.6,123.3,27.6,13.4,56.2,23.7,87.3,25.4,21.4,1.2,40-4.2,54.9-20.9,10.2-11.4,21.7-21.8,32.5-32.7,16-16.2,16.1-35.8.2-51.8Q394.05,346.35,365.35,317.9Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M346.25,238.2l36.9-6.3A165.63,165.63,0,0,0,243.05,96l-5.2,37.1a128,128,0,0,1,108.4,105.1Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M404,77.8A272.09,272.09,0,0,0,248,0l-5.2,37.1a237.42,237.42,0,0,1,200.9,194.7l36.9-6.3A274.08,274.08,0,0,0,404,77.8Z" transform="translate(-0.01)"/></svg>
                            <h3 data-id="vendor" >Vendor</h3>
                            <p data-id="vendor" >We have many opportunities for local vendor for collaboration and expansion drop us message for more details</p>
                        </div>
                        <div  className="col-lg-4 p-4 career-category" data-id="job Seeker" onClick={this.changeTab}>
                        <svg data-id="job" xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-id="job seeker" viewBox="0 0 480.55 480.56"><title>icon-telephone-fablas</title><path class="icon" fill="#999999" d="M365.35,317.9c-15.7-15.5-35.3-15.5-50.9,0-11.9,11.8-23.8,23.6-35.5,35.6-3.2,3.3-5.9,4-9.8,1.8-7.7-4.2-15.9-7.6-23.3-12.2-34.5-21.7-63.4-49.6-89-81-12.7-15.6-24-32.3-31.9-51.1-1.6-3.8-1.3-6.3,1.8-9.4,11.9-11.5,23.5-23.3,35.2-35.1,16.3-16.4,16.3-35.6-.1-52.1-9.3-9.4-18.6-18.6-27.9-28-9.6-9.6-19.1-19.3-28.8-28.8-15.7-15.3-35.3-15.3-50.9.1-12,11.8-23.5,23.9-35.7,35.5-11.3,10.7-17,23.8-18.2,39.1-1.9,24.9,4.2,48.4,12.8,71.3,17.6,47.4,44.4,89.5,76.9,128.1,43.9,52.2,96.3,93.5,157.6,123.3,27.6,13.4,56.2,23.7,87.3,25.4,21.4,1.2,40-4.2,54.9-20.9,10.2-11.4,21.7-21.8,32.5-32.7,16-16.2,16.1-35.8.2-51.8Q394.05,346.35,365.35,317.9Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M346.25,238.2l36.9-6.3A165.63,165.63,0,0,0,243.05,96l-5.2,37.1a128,128,0,0,1,108.4,105.1Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M404,77.8A272.09,272.09,0,0,0,248,0l-5.2,37.1a237.42,237.42,0,0,1,200.9,194.7l36.9-6.3A274.08,274.08,0,0,0,404,77.8Z" transform="translate(-0.01)"/></svg>
                            <h3 data-id="job">Job Seeker</h3>
                            <p data-id="job">We have many opportunities for local vendor for collaboration and expansion drop us message for more details</p>
                        </div>
                        <div className="col-lg-4 p-4 career-category" data-id="vendor" onClick={this.changeTab}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-id="vendor"  viewBox="0 0 480.55 480.56"><title>icon-telephone-fablas</title><path class="icon" fill="#999999" d="M365.35,317.9c-15.7-15.5-35.3-15.5-50.9,0-11.9,11.8-23.8,23.6-35.5,35.6-3.2,3.3-5.9,4-9.8,1.8-7.7-4.2-15.9-7.6-23.3-12.2-34.5-21.7-63.4-49.6-89-81-12.7-15.6-24-32.3-31.9-51.1-1.6-3.8-1.3-6.3,1.8-9.4,11.9-11.5,23.5-23.3,35.2-35.1,16.3-16.4,16.3-35.6-.1-52.1-9.3-9.4-18.6-18.6-27.9-28-9.6-9.6-19.1-19.3-28.8-28.8-15.7-15.3-35.3-15.3-50.9.1-12,11.8-23.5,23.9-35.7,35.5-11.3,10.7-17,23.8-18.2,39.1-1.9,24.9,4.2,48.4,12.8,71.3,17.6,47.4,44.4,89.5,76.9,128.1,43.9,52.2,96.3,93.5,157.6,123.3,27.6,13.4,56.2,23.7,87.3,25.4,21.4,1.2,40-4.2,54.9-20.9,10.2-11.4,21.7-21.8,32.5-32.7,16-16.2,16.1-35.8.2-51.8Q394.05,346.35,365.35,317.9Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M346.25,238.2l36.9-6.3A165.63,165.63,0,0,0,243.05,96l-5.2,37.1a128,128,0,0,1,108.4,105.1Z" transform="translate(-0.01)"/><path class="icon"  fill="#cccccc"  d="M404,77.8A272.09,272.09,0,0,0,248,0l-5.2,37.1a237.42,237.42,0,0,1,200.9,194.7l36.9-6.3A274.08,274.08,0,0,0,404,77.8Z" transform="translate(-0.01)"/></svg>
                            <h3 data-id="distributor"> Distributor</h3>
                            <p data-id="distributor">We have many opportunities for local vendor for collaboration and expansion drop us message for more details</p>
                        </div>
                    </div>
                </div>
                <div className="container pt-5 pb-5">
                {showrecentTab =="job"? RenderJobSeeker :showrecentTab=="distributor"? RenderDistributor:RenderVendor}
                </div>
                <Footer/>
            </div>
        )
    }
  
}

export default Career;