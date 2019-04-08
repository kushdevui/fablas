import React from 'react';
import ReactPlayer from 'react-player'

import "./directorMEssage.scss";

const DirectorMessage = () =>{
    return(
        <div className="director-tile">
            <div className="row">
                <div className="col-lg-12 message ">
                    <div className="row">
                        <div className="d-flex col-lg-8 message-window">
                            {/* <div className="image pt-3 pb-3">
                                <img src="./assets/images/men-standing.png" className="img-fluid"/>
                            </div> */}
                            <div className="content">
                                <h4>Director’s <span className="bold">Message</span></h4>
                                <span className="sub-head">FABLAS IMPEX PVT. LTD.</span>
                                <p className="pt-5">Through our expertise in commitment to excellence and continual investment in our products, processes, and people we seek to become the leading brand name within the cleaning industry nationwide.
</p>
                                <div className="l-signature">Seraj Akhtar - Fablas Founder & Managing Director</div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-none d-lg-block director-person">
                            <img src="./assets/images/directors-banner.png"/>
                        </div>
                    </div>
                </div>
                {/* <div className="col-6 p-0">
                    <ReactPlayer width='100%'
          height='100%' url='https://www.youtube.com/watch?v=wruYR-DmlgY&feature=youtu.be' playing />
                </div> */}
            </div>
        </div>
    )
}

export default DirectorMessage;