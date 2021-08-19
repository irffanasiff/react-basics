import React, { Component } from "react";
import Army from "./withArms";

class Rahul extends Component {
    render() {
    return (
      <div onMouseOver={this.props.HOChandleGunshots}>
        Rahul {this.props.HOCgunname} Gunshots : {this.props.HOCgunshots}
        <h1>{this.props.camp}</h1>
      </div>
    );
  }
}

export default Army(Rahul,4);
