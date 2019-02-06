import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "slick-cente",
      centerMode: true,
      infinite: true,
      centerPadding: "30",
      slidesToShow: 2,
      speed: 600
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3><img src="./assets/images/products/RetailSlider1.png"/></h3>
          </div>
          <div>
          <h3><img src="./../assets/images/products/RetailSlider2.png"/></h3>
          </div>
          <div>
            <h3><img src="./../assets/images/products/RetailSlider2.png"/></h3>
          </div>
          <div>
            <h3><img src="./../assets/images/products/RetailSlider2.png"/></h3>
          </div>
         
        </Slider>
      </div>
    );
  }
}