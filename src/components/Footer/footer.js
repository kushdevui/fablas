import React,{Component} from 'react';
import "./footer.scss";
import { faMapMarkerAlt,faPhone,faEnvelope  } from "@fortawesome/free-solid-svg-icons";
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
                        <span className="d-block">Pioneers in Cleaning Accessories</span>
                        <p className="pt-5">
                        Fablas Impex Pvt. Ltd. is one of India’s largest & most prominent FMCG companies, with a rich history of expertise in manufacturing & packaging. With a legacy of over four decades of providing winning solutions to Traditional as well as Modern Trade Markets, Fablas has been the supplier of choice for HORECA, B2B & Organised retail sectors for Bulk & Raw material supplies with 3rdparty  label arrangements.
                        </p>
                        <span className="d-block"><FontAwesomeIcon icon={faMapMarkerAlt} style={{color:'#ccc'}} size="lg" />  2151/3D, New Patel Nagar, Delhi-110008</span>
                        <span className="d-block"><FontAwesomeIcon icon={faPhone } style={{color:'#ccc'}} size="md" />  +91-11-25891350,  25892350 </span>
                        <span className="d-block"><FontAwesomeIcon icon={faEnvelope } style={{color:'#ccc'}} size="md" /> info@fablas.com</span>
                    </div>
                    <div className="col-lg-5">
                        <h3>USEFULL LINKS</h3>
                        <ul>
                            <li><a href="#/About">About us</a></li>
                            <li><a href="#/Career">Job Seeker</a></li>
                            <li>Privacy Policy</li>
                            <li>Terms and Condition</li>
                            <li><a href="#/News">News</a></li>
                            <li><a href="#/Contact">Contact Us</a></li>
                        </ul>
                        <ul>
                            <li><a href="/#/Products/5c8b541c53cf7b1590e77c28">Homecare</a></li>
                            <li><a href="/#/Products/5cb187e8531998001706f6f5">Personal Care</a></li>
                            <li><a href="/#/Products/5c8b560453cf7b1590e77c44">Industrial Care</a></li>
                            <li><a href="/#/Products/5c8b56b853cf7b1590e77c4a">Salon Care</a></li>
                            <li><a href="/#/Products/5cb1a1035319980017072bbc">Bulk</a></li>
                            <li><a href="/#/Products/5c8b553f53cf7b1590e77c3a">Professional</a></li>
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