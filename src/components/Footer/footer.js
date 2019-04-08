import React from 'react';

import "./footer.scss";
const Footer = () =>{
    return(
        <div className="footer row">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 pr-5">
                        <img src="./assets/images/logo-footer.png"/>
                        <p className="pt-5">
                        Fablas Impex Pvt. Ltd. is one of India’s largest & most prominent FMCG companies, with a rich history of expertise in manufacturing & packaging. With a legacy of over four decades of providing winning solutions to Traditional as well as Modern Trade Markets, Fablas has been the supplier of choice for HORECA, B2B & Organised retail sectors for Bulk & Raw material supplies with 3rdparty  label arrangements.
                        </p>
                        <span className="d-block">2151/3D, New Patel Nagar, Delhi- 08</span>
                        <span className="d-block">+91-11-25891350,  25892350 </span>
                        <span className="d-block"> info@fablas.com</span>
                    </div>
                    <div className="col-lg-5">
                        <h3>USEFULL LINKS</h3>
                        <ul>
                            <li>ABOUT US</li>
                            <li>FEATURES</li>
                            <li>PRIVATE POLICY </li>
                            <li>WAREHOUSE</li>
                            <li>SERVICE </li>
                            <li>PHOTO GALLERY</li>
                        </ul>
                        <ul>
                            <li>ABOUT US</li>
                            <li>FEATURES</li>
                            <li>PRIVATE POLICY </li>
                            <li>WAREHOUSE</li>
                            <li>SERVICE </li>
                            <li>PHOTO GALLERY</li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h3>NEWSLETTER</h3>
                        <p className="pt-5">Enter your email address to get the latest news, special offers and product launch updates right to your inbox.</p>
                        <div className="form-group ">
                            <input type="text" className="form-control mt-2" value="Your Email" />
                            <input type="submit" className="btn mt-4 btn-danger"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;