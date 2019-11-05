import React,{Component} from 'react';
var Recaptcha = require('react-recaptcha');

class EnquiryForm extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            fields: {},
            errors: {}
        }
        this.handleChangeForm = this.handleChangeForm.bind(this);
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }

        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters";
           }        
        }

        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }  

       this.setState({errors: errors});
       return formIsValid;
   }
    // handleContactSubmit = (e) =>{
    //     e.preventDefault();
    //     if(this.state.fullName=="" || this.state.fullName=="Enter Name"){
    //         this.setState({
    //             validFullName:"Enter Name"
    //         })
    //     }
    //     else{
    //         this.setState({
    //             validFullName:""
    //         })
    //     }
    //     if(this.state.email=="" || this.state.email=="Enter Email ID"){
    //         this.setState({
    //            validEmail:"Enter Email ID"
    //         })
    //     }
    //     else{
    //         this.setState({
    //             validEmail:""
    //         })
    //     }
        
        
    // }

    contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
           alert("Thanks! We will contact you shortly");
        }else{
           //alert("Form has errors.")
        }
    }

    handleChangeForm(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});

    }


    render(){
        console.log(this.state)
        return(
            <div>
                <form onSubmit={this.contactSubmit.bind(this)}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input type="text" ref="name" value={this.state.fields["name"]} onChange={this.handleChangeForm.bind(this, "name")} className="form-control" placeholder="Your Name"/>
                                <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input refs="email" type="text" value={this.state.fields["email"]} onChange={this.handleChangeForm.bind(this, "email")} name="email" className="form-control" placeholder="Your Email"/>
                                <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <textarea onChange={this.handleChangeForm} name="message" className="form-control" placeholder="Message"></textarea>
                            </div>
                            <div>
                            <Recaptcha
                                render="explicit"
                                sitekey="6LfID8EUAAAAAFtiARiTu1jjor4LwmBabbItpJjN"
                            />
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