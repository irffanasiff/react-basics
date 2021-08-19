import React, { Component } from "react";
import ComponentC from "./ComponentC";
import UserContext from "./userContext";

class ComponentB extends Component {
  render() {
    return (
      <div>
        <h4> Component E context {this.context}</h4>
        <ComponentC />
      </div>
    );
  }
}
ComponentB.contextType = UserContext;
export default ComponentB;
