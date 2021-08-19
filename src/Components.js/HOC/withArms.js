import React, { Component } from "react";

const Army = (Soldier, bullets) => {
  class NewMan extends Component {
    constructor(props) {
      super(props);

      this.state = {
        gunshots: 0,
      };
    }

    handleGunshots = () => {
      this.setState({ gunshots: this.state.gunshots + bullets });
    };

    render() {
      return (
        <Soldier
          HOCgunname="🔫"
          HOCgunshots={this.state.gunshots}
          HOChandleGunshots={this.handleGunshots}
          {...this.props}
        />
      );
    }
  }
  return NewMan;
};

export default Army;
