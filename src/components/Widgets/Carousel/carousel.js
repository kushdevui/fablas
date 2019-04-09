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
    name:"‎Col Pradeep Gupta‎",
    desc:"Great Company. Very good service, prepared to go the extra mile for customer satisfaction"
    
  },
  {
    name:"Rekha Rana",
    desc:"I would recommend Fablas’ products to all my family and friends because of their quality and affordability"
  },
  {
   name:"Sunil Agrawal",
   desc:"Fablas’ products work better than I expected, better than the regular name brands. Will surely purchase again."
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
           <div></div>
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
           <div className="caraousel">
              <div className="mb-2">
                  <span><FontAwesomeIcon icon={faStar } style={{color:'#dc3545'}} size="lg" /></span>
                  <span><FontAwesomeIcon icon={faStar } style={{color:'#dc3545'}} size="lg" /></span>
                  <span><FontAwesomeIcon icon={faStar } style={{color:'#dc3545'}} size="lg" /></span>
                  <span><FontAwesomeIcon icon={faStar } style={{color:'#dc3545'}} size="lg" /></span>
                  <span><FontAwesomeIcon icon={faStar } style={{color:'#dc3545'}} size="lg" /></span>
              </div>
              <span className="mt-5">{item.name}</span>
              <div className="content">{item.desc}</div>
          </div>
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
  