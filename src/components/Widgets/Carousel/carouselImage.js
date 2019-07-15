import React, { Component } from 'react';
import { faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import "./carousel.scss";



class Example extends Component {
    constructor(props) {
      super(props);
      this.props = props;
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }
    
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }


    render() {
      const { activeIndex } = this.state;
     
      const aboutItems = [
        {
          name:"‎image1",
          desc:"./assets/images/About-Us-Banner-1.jpg"
          
        },
        {
          name:"‎image2",
          desc:"./assets/images/About-Us-Banner-1.jpg"
          
        },
      ];
      
      const HomeItems =[
        {
          name:"‎image1",
          desc:"./assets/images/homebanners/1.jpg"
        },
        {
          name:"‎image2",
          desc:"./assets/images/homebanners/2.jpg"
        },
        {
          name:"‎image3",
          desc:"./assets/images/homebanners/3.jpg"
        },
        {
          name:"‎image4",
          desc:"./assets/images/homebanners/4.jpg"
        },
        {
          name:"‎image5",
          desc:"./assets/images/homebanners/5.jpg"
        },
        {
          name:"‎image6",
          desc:"./assets/images/homebanners/6.jpg"
        }
      ]

      if(this.props.page=="home"){
        var slides = HomeItems.map((item) => {
          return (<CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
          >
             <div className="caraousel">
               <img src={item.desc} className="img-fluid"/>
            </div>
          </CarouselItem>
          );
        });
      }
      else{
        var slides = aboutItems.map((item) => {
          return (<CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
          >
             <div className="caraousel">
               <img src={item.desc} className="img-fluid"/>
            </div>
          </CarouselItem>
          );
        });
      }


      
      return (
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={this.props.page=="home"?HomeItems:aboutItems} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
           {slides}
        </Carousel>
      );
    }
  }


export default Example;
  