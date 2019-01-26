import React, {Component} from "react";
import RetailsSlider from "../Widgets/SlickCenterMode/centermode";

import "./retail.scss";

class Retail extends Component {
    render(){
        return(
            <section>
            <div className="container retail-section">
                <div className="row">
                    <div className="col-6 pl-5 pr-5">
                        <RetailsSlider/>
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