import React,{Component} from 'react';
import "./BulkOrders.scss";
import Bounce from 'react-reveal/Bounce';

class BulkOrders extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="row">
                <div className="tile-bulk-orders col-lg-12 ">
                <div className="row text-left">
                    <div className="col-lg-12 heading ">
                        <h1>BULK ORDER Inquiry </h1>
                    </div>
                </div>
                <div className="row form">
                    {/* <div className="col-lg-3">
                        <Bounce top  duration={2000}>
                            <img src="./assets/images/box1.png" className="img-fluid left-box"/>
                        </Bounce>
                    </div> */}
                    <div className="col-lg-5">
                        <div className="row">
                            <div className=" col-lg-6 form-group">
                                <input type="text" value="Full Name" className="form-control"/>
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text" value="Company Name" className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-lg-12 form-group">
                                <input type="text" value="Company Address" className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-lg-6 form-group">
                                <input type="text" value="Phone" className="form-control"/>
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text" value="Email" className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-lg-6 form-group">
                                <input type="text" value="City" className="form-control"/>
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text" value="Country" className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-lg-6 form-group">
                                <input type="text" value="Category" className="form-control"/>
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text" value="Quantity & Size" className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 form-group">
                               <textarea className="form-control">Your Comments</textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 form-group">
                                <input type="submit" className="w-100 btn btn-danger"/>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-3">
                        <Bounce top duration={2000}>
                            <img src="./assets/images/box1-right.png" className="right-box1 img-fluid"/>
                        </Bounce>
                        <Bounce top duration={3000}>
                            <img src="./assets/images/box-right2.png" className="right-box2 img-fluid"/>
                        </Bounce>
                    </div> */}
                </div>
               
            </div>
            </div>
            
        )
    }
}

export default BulkOrders;