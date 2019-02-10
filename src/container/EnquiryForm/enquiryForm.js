import React from 'react';

const EnquiryForm = () =>{
    return(
        <div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Name"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Email"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Message"></textarea>
                    </div>
                    <button className="btn btn-danger form-control ">Send Your Message</button>
                </div>
            </div>
        </div>
    )
}

export default EnquiryForm;