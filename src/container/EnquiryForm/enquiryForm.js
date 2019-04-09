import React,{Component} from 'react';

class EnquiryForm extends Component{
    constructor(props){
        super(props);
        this.state={
            errorMsg:"",
            contactForm:{
                fullName:"",
                email:"",
                message:""
            }
        }
        this.handleChangeForm = this.handleChangeForm.bind(this);
    }

    handleContactSubmit = (e) =>{
        e.preventDefault();

    }

    handleChangeForm(event){
        var name = event.target.name;
        var value = event.target.value;
        
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleContactSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input type="text" onChange={this.handleChangeForm} name="fullName" className="form-control" placeholder="Your Name"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input type="text" onChange={this.handleChangeForm} name="email" className="form-control" placeholder="Your Email"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <textarea onChange={this.handleChangeForm} name="message" className="form-control" placeholder="Message"></textarea>
                            </div>

                            <button className="btn btn-danger form-control ">Send Your Message</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default EnquiryForm;