import React from 'react';

import "./directorMEssage.scss";

const DirectorMessage = () =>{
    return(
        <div className="director-tile row">
            <div className="col-6 message">
                <div className="d-flex">
                    <div className="image pt-3 pb-3">
                        <img src="./assets/images/men-standing.png" className="img-fluid"/>
                    </div>
                    <div>
                        <h4>Director’s <span className="bold">Message</span></h4>
                        <span className="sub-head">FABLAS IMPEX PVT. LTD.</span>
                        <p className="pt-5">“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”</p>
                        <p className="pt-1">Search our databases of the Top 100 providers in key segments of the supply chain industry.</p>
                        <img src="./assets/images/signature.png"/>
                        <div className="l-signature">Seraj Akhtar - Fablas Founder & Managing Director</div>
                    </div>
                </div>
                
            </div>
            <div className="col-6">
                <img src="./assets/images/sri-raj.png" className="img-fluid"/>
            </div>
        </div>
    )
}

export default DirectorMessage;