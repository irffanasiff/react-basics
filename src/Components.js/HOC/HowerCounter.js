import React, { Component } from "react";
import withComponent from "./withCounter";
export class HowerCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Howered {count} times</h2>
      </div>
    );
  }
}

export default withComponent(HowerCounter, 3);
