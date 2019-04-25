import React from 'react';
import ReactPlayer from 'react-player'

import "./directorMEssage.scss";

const DirectorMessage = () =>{
    return(
        <div className="director-tile">
            <div className="row justify-content-center">
                <div className="col-lg-12 message ">
                    <div className="row">
                        <div className="d-flex col-lg-8 message-window">
                            {/* <div className="image pt-3 pb-3">
                                <img src="./assets/images/men-standing.png" className="img-fluid"/>
                            </div> */}
                            <div className="content">
                                <h4>Director’s <span className="bold">Message</span></h4>
                                <span className="sub-head">FABLAS IMPEX PVT. LTD.</span>
                                <p className="pt-3 mt-0">I take this opportunity to thank our valued customers, whose continued patronage and confidence in our products inspires us to extend the best of services and enables us to provide value for their money. 
</p>
<p className="mt-0">
Being dedicated to India’s Household product and Personal care product Industry for more than 4 decades. We have seen the transition of the product ranges from low technology products to high technology products during this period.
</p>
<p className="mt-0">During year 2011 we have joined hands with Spontex S.A.S. of France (Europe’s leading brand for smart household cleaning products & largest producer of Natural cellulose in the world) as an exclusive distributor for India to bring the futuristic highly technological, natural cellulose, bio-degradable & eco-friendly products.

</p>
<p className="mt-0">We believe that technology holds the key to the home cleaning FMCG industries and access to information & economic freedom has given our customers right to buy our value for money products.</p>
<p className="mt-0">We are committed to total customer satisfaction by identifying their specific needs, translating them into specific requirements and providing dependable services. This commitment is supported by our Vision, Mission and values of our organisation.</p>
<p className="mt-0">
I therefore, seek continued patronage of our valued customers, cooperation of our employees and thank our well-wishers who have contributed to the growth of the organization.
 
</p>
                                <div className="l-signature">Seraj Akhtar Siddiqui</div>
                                <div className="l-signature"> Founder and Managing Director</div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-none d-flex director-person ">
                        <img src="./assets/directors-banner1.png" className="img-fluid"/>
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