import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }
  //   clickHandler() {
  //     this.setState({
  //       message: "Goodbye",
  //     });
  //     console.log(this);
  //   }

  clickHandler = () => {
    this.setState({
      message: "Goodbye",
    });
  };
  render() {
    return (
      <>
        <p>{this.state.message}</p>
        {/* Approach 1: Binding in render */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* Approach 2: Arrow function in render */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* Approach 3: Binding in Class Constructor */}
        {/* <button onClick={this.clickHandler}>Click</button> */}

        {/* Approach 4: Class Property as Arrow Function */}
        {/* <button onClick={this.clickHandler}>Click</button> */}
      </>
    );
  }
}

export default EventBind;
