import React,{Component} from 'react';
import "./BulkOrders.scss";
import Bounce from 'react-reveal/Bounce';

class BulkOrders extends Component{
    constructor(props){
        super(props);
        this.state={
            bulkOrder:{

            },
            message:""
        }
    }

    handleChange = (event) =>{
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            ...this.state.bulkOrder,
            [name]:value
        })
    }

    handleSubmitForm = (e) =>{
        e.preventDefault();
        this.setState({
            message:"Thank you for submitting your query.We will get back to you in two business days."
        })
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
                <div className="col-lg-5">
                   {this.state.message?<p>{this.state.message}</p>:<form onSubmit={this.handleSubmitForm}>
                       
                        <div className="row">
                            <div className=" col-lg-6 form-group">
                                <input type="text" onChange={this.handleChange} name="fullName" placeholder="Full Name" className="form-control"/>
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text" onChange={this.handleChange} placeholder="Company Name" className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-lg-12 form-group">
                                <input type="text" onChange={this.handleChange} placeholder="Company Address" className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-lg-6 form-group">
                                <input type="text" onChange={this.handleChange} placeholder="Phone" className="form-control"/>
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text" onChange={this.handleChange} placeholder="Email" className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-lg-6 form-group">
                                <input type="text" onChange={this.handleChange} placeholder="City" className="form-control"/>
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text" onChange={this.handleChange} placeholder="Country" className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-lg-6 form-group">
                                <input type="text" onChange={this.handleChange} placeholder="Category" className="form-control"/>
                            </div>
                            <div className="col-lg-6 form-group">
                                <input type="text" onChange={this.handleChange} placeholder="Quanityt" value="Quantity & Size" className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 form-group">
                               <textarea onChange={this.handleChange} placeholder="Comments" className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 form-group">
                                <input type="submit" className="w-100 btn btn-danger"/>
                            </div>
                        </div>
                   
                    </form>}
                    </div>
                </div>
               
            </div>
            </div>
            
        )
    }
}

export default BulkOrders;