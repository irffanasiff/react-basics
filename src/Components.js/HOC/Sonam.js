import React, { Component } from "react";
import Army from "./withArms"

class Sonam extends Component {
  render() {
    return (
        <div onMouseOver={this.props.HOChandleGunshots}>
         Sonam {this.props.HOCgunname} Gunshots : {this.props.HOCgunshots}
        </div>
      );
  }
}

export default Army(Sonam,20);