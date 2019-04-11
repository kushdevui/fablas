import React,{Component} from 'react';
import "./footer.scss";
import { faShoppingCart,faAddressCard,faPhone,faMailBulk  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            subscribe:{

            },
            message:""
        }
    }

    handleChange = (event) =>{
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            ...this.state.subscribe,
            [name]:value
        })
    }

    handleSubmit = (e) =>{
        console.log("asdf");
        e.preventDefault();
        this.setState({
            message:"Thanks for subscribing"
        })
    }
    render(){
        return(
            <div className="footer row">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 pr-5">
                        <img src="./assets/images/logo-footer.png"/>
                        <p className="pt-5">
                        Fablas Impex Pvt. Ltd. is one of India’s largest & most prominent FMCG companies, with a rich history of expertise in manufacturing & packaging. With a legacy of over four decades of providing winning solutions to Traditional as well as Modern Trade Markets, Fablas has been the supplier of choice for HORECA, B2B & Organised retail sectors for Bulk & Raw material supplies with 3rdparty  label arrangements.
                        </p>
                        <span className="d-block"><FontAwesomeIcon icon={faAddressCard } style={{color:'white'}} size="md" />  2151/3D, New Patel Nagar, Delhi- 08</span>
                        <span className="d-block"><FontAwesomeIcon icon={faPhone } style={{color:'white'}} size="md" />  +91-11-25891350,  25892350 </span>
                        <span className="d-block"><FontAwesomeIcon icon={faMailBulk } style={{color:'white'}} size="md" /> info@fablas.com</span>
                    </div>
                    <div className="col-lg-5">
                        <h3>USEFULL LINKS</h3>
                        <ul>
                            <li>About us</li>
                            <li>Job Seeker</li>
                            <li>Privacy Policy</li>
                            <li>Terms and Condition</li>
                            <li>Contact Us</li>
                        </ul>
                        <ul>
                            <li>Personal Care</li>
                            <li>Industrial Care</li>
                            <li>Salon Care</li>
                            <li>Bulk</li>
                            <li>Professional</li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h3>NEWSLETTER</h3>
                        <p className="pt-5">Enter your email address to get the latest news, special offers and product launch updates right to your inbox.</p>
                        <div className="form-group ">
                            {this.state.message?this.state.message:<form onSubmit={this.handleSubmit}>
                                <input onChange={this.handleChange} placeholder="Email" name="email" type="text" className="form-control mt-2" />
                                <input type="submit" className="btn mt-4 btn-danger"/>
                            </form>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Footer;