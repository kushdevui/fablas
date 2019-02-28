import React from 'react';
import ReactPlayer from 'react-player'

import "./directorMEssage.scss";

const DirectorMessage = () =>{
    return(
        <div className="director-tile">
            <div className="row">
                <div className="col-6 message text-center">
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
                <div className="col-6 p-0">
                    <ReactPlayer width='100%'
          height='100%' url='https://www.youtube.com/watch?v=wruYR-DmlgY&feature=youtu.be' playing />
                </div>
            </div>
        </div>
    )
}

export default DirectorMessage;