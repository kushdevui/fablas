import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500
    };
    return (
      <div >
        <Slider {...settings}>
          <div>
            <img src="../../assets/images/products/RetailSlider1.png"/>
          </div>
          <div>
            <img src="../../assets/images/products/RetailSlider2.png"/>
          </div>
          <div>
            <img src="../../assets/images/products/RetailSlider2.png"/>
          </div>
        </Slider>
      </div>
    );
  }
}
