import React, { Component } from "react";

class HoveredCounter2 extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <h1 onMouseOver={incrementCount}>Hovereded {count} times</h1>;
  }
}

export default HoveredCounter2;
//share common funcitonality with components => render props
