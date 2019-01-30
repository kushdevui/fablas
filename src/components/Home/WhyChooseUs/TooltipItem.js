import React from 'react';
import { Button, Tooltip } from 'reactstrap';

import './why-choose-us.scss';

class TooltipItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div>
        <li  className="mr-1" color="secondary" id={'Tooltip-' + this.props.id}>
            <img src="../../../assets/images/Icon-0.png"/>
        </li>
        <Tooltip className="hover-content" placement={this.props.item.placement} isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggle}>
          <p>Largest Wherehouse .01</p>
          <div>The best contact you will get here lorem ipsum dolor sit amet</div>
        </Tooltip>
      </div>
    );
  }
}

export default TooltipItem;