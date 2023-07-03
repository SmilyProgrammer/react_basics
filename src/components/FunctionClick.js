import React from "react";

function clickHandler() {
  console.log("Button Clicked");
}
function FunctionClick() {
  return <button onClick={clickHandler()}>Click</button>;
}

export default FunctionClick;
