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
            <div className="retail-section-new">
                <div className="row">
                    <div className="col-lg-6 d-none d-lg-block p-0 p-lg-1 col-sm-12">
                        <div id="cf4" className="hover">
                            <img className="top shadow img-fluid" src="./assets/images/products/featured-1.png"/>
                            <img className="bottom shadow img-fluid" src="./assets/images/products/featured-2.png"/>
                            <FontAwesomeIcon className="next swap-animation-top" icon={faArrowRight } style={{color:'#999999'}} size="lg" />
                            <FontAwesomeIcon className="prev swap-animation-bottom"  icon={faArrowLeft } style={{color:'#999999'}} size="lg" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <h2 className="text-uppercase">WE HOLD A prominent place IN THE <strong>Indian Traditional Retail, Modern Trade Export Markets</strong></h2>
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