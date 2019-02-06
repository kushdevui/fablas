import React, {Component} from "react";
import RetailsSlider from "../Widgets/SlickCenterMode/centermode";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart,faArrowCircleRight ,faArrowCircleLeft,faArrowRight ,faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./retail.scss";

class Retail extends Component {
    render(){
        const playSlider = (event) =>{
            
        }
        return(
            <section>
            <div className="container retail-section">
                <div className="row">
                    <div className="col-6 pl-5 pr-5">
                        <div id="cf4" className="hover">
                            <img className="top shadow" src="../../assets/images/products/RetailSlider2.png"/>
                            <img className="bottom shadow" src="../../assets/images/products/RetailSlider1.png"/>
                            <FontAwesomeIcon className="next swap-animation-top" icon={faArrowRight } style={{color:'#999999'}} size="lg" />
                            <FontAwesomeIcon className="prev swap-animation-bottom"  icon={faArrowLeft } style={{color:'#999999'}} size="lg" />
                        </div>
                    </div>
                    <div className="col-6 pl-5 pr-5">
                        <h1>WE HOLD A prominent place IN THE <br/><strong>Indian Traditional Retail, Modern Trade Export Markets</strong></h1>
                        <p>We are also preferred suppliers to HORECA, Beauty and SPA, Car Care Business and in B2B sector.Nevertheless the knowledge & experience of our management & skilled personnel committed to deliver consistently the best quality products & services to our customers.
We also have the sole exclusive distribution rights in India for SPONTEX Brand. (A leading Brand in Europe)
</p>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Retail;