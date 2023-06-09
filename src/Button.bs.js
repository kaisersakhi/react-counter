// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";

function str(prim) {
  return prim;
}

function Button(props) {
  var handleClick = props.handleClick;
  return React.createElement("button", {
              className: "bg-gray-200 hover:shadow-lg hover:shadow-green border py-2 px-4 rounded-lg hover:bg-black-200 mr-1",
              onClick: Curry.__1(handleClick)
            }, props.text);
}

var make = Button;

export {
  str ,
  make ,
}
/* react Not a pure module */
