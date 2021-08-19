import React, { Component } from "react";
import { Userconsumer } from "./userContext";
class ComponentC extends Component {
  render() {
    return (
      <Userconsumer>
        {(userName) => {
          return <div>Hello {userName}</div>;
        }}
      </Userconsumer>
    );
  }
}

export default ComponentC;
