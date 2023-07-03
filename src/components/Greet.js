import React from "react";

/* ----- Use of Props ----- */
// const Greet = (props) => {
//   return (
//     <h2>
//       Hello {props.name} a.k.a {props.heroname}
//     </h2>
//   );
// };

/* ----- Method 1: Props Destructureing in Functional Componnet ----- */
// const Greet = ({ name, heroname }) => {
//   return (
//     <h2>
//       Hello {name} a.k.a {heroname}{" "}
//     </h2>
//   );
// };

/* ----- Method 2: Props Destructureing in Functional Componnet ----- */
const Greet = (props) => {
  const { name, heroname } = props;
  return (
    <h2>
      Hello {name} a.k.a {heroname}{" "}
    </h2>
  );
};
export default Greet;
