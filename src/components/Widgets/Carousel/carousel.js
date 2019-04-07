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

const teamItems = [
    {
      name:"Seraj Akhtar Siddiqui",
      designation:"CEO / Managing Director",
      image:"Amit.jpg"
    },
    {
      name:"Seraj Akhtar Siddiqui",
      designation:"CEO / Managing Director",
      image:""
    },
    {
      name:"Seraj Akhtar Siddiqui",
      designation:"CEO / Managing Director",
      image:""
    },
    {
      name:"Seraj Akhtar Siddiqui",
      designation:"CEO / Managing Director",
      image:""
    },
    {
      name:"Seraj Akhtar Siddiqui",
      designation:"CEO / Managing Director",
      image:""
    },
    {
      name:"Seraj Akhtar Siddiqui",
      designation:"CEO / Managing Director",
      image:""
    },
    {
      name:"Seraj Akhtar Siddiqui",
      designation:"CEO / Managing Director",
      image:""
    }
]

const items = [
  {
    
  },
  {
    
  },
  {
   
  }
];

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
      this.renderCarousel = this.renderCarousel.bind(this)
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

    renderCarousel(type){
        switch(type){
          case 'text':
         return (
           <div className="caraousel">
              <div className="mb-2">
                  <span><FontAwesomeIcon icon={faStar } style={{color:'#dc3545'}} size="lg" /></span>
                  <span><FontAwesomeIcon icon={faStar } style={{color:'#dc3545'}} size="lg" /></span>
                  <span><FontAwesomeIcon icon={faStar } style={{color:'#dc3545'}} size="lg" /></span>
                  <span><FontAwesomeIcon icon={faStar } style={{color:'#dc3545'}} size="lg" /></span>
                  <span><FontAwesomeIcon icon={faStar } style={{color:'#dc3545'}} size="lg" /></span>
              </div>
              <span className="mt-5">LUIS GARCIA GAUCO</span>
              <div className="content">“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.”</div>
              <span className="time">5 Mins ago, Tweeter</span>
          </div>
         );
         case "team":
         return(
           ""
         );
        default:   
          return (
            <img src="./assets/images/image-1.jpg"/>
          )
        }
    }

    render() {
      const team = teamItems.map((teamMate)=>{
        return(<CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={teamMate.image}
        >
          <div className="col-lg-3">
            <div className="team-list">
                <div className="team-item">
                    <img src="./assets/images/team/Amit.jpg" className="img-fluid"/>
                    <div className="pt-2 font-weight-bold heading">{teamMate.name}</div>
                    <span>{teamMate.designation}</span>
                </div>
            </div>
          </div>
        </CarouselItem>
        )
      })
      const { activeIndex } = this.state;
      const slides = items.map((item) => {
        return (<CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
           {this.renderCarousel(this.props.type)}
        </CarouselItem>
        );
      });

      return (
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {this.props.type=="team"?team:slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      );
    }
  }


export default Example;
  