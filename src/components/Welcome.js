import React, { Component } from "react";

/* ----- Use of Props in Statefull Class Component */
// class Welcome extends Component {
//   render() {
//     return (
//       <h2>
//         Welcome {this.props.name} a.k.a {this.props.heroname}{" "}
//       </h2>
//     );
//   }
// }

/* Props Destructuring in Class Component */
class Welcome extends Component {
  render() {
    const { name, heroname } = this.props;
    // const {name, heroname} = this.state
    return (
      <h2>
        Welcome {name} a.k.a {heroname}{" "}
      </h2>
    );
  }
}
export default Welcome;
