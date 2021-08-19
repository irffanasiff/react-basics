import React from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      return (
        <div>
          <WrappedComponent
            count={this.state.count}
            incrementCount={this.incrementCount}
            {...this.props} //props are passed from app -> HOC so to use them in child component you need to pass them to child through HOC
          />
        </div>
      );
    }
  }
  return NewComponent;
};

export default withCounter;
