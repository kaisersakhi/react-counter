// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Button from "./Button.bs.js";

function str(prim) {
  return prim;
}

function reducer(state, action) {
  if (typeof action === "number") {
    if (action !== 0) {
      return state - 1 | 0;
    } else {
      return state + 1 | 0;
    }
  } else {
    return action._0;
  }
}

function Counter(props) {
  var initialValue = props.initialValue;
  var match = React.useReducer(reducer, initialValue);
  var dispatch = match[1];
  var count = match[0];
  var bgColor = count > 0 ? "bg-green-200" : (
      count < 0 ? "bg-red-200" : "bg-blue-200"
    );
  return React.createElement("div", {
              className: "max-w-3xl mx-auto mt-24"
            }, React.createElement("p", {
                  className: "py-4 mb-8 text-center text-4xl " + bgColor + ""
                }, "The count is " + String(count)), React.createElement("div", {
                  className: "flex justify-center"
                }, React.createElement(Button.make, {
                      text: "Increment",
                      handleClick: (function (param) {
                          Curry._1(dispatch, /* Increment */0);
                        })
                    }), React.createElement(Button.make, {
                      text: "Decrement",
                      handleClick: (function (param) {
                          Curry._1(dispatch, /* Decrement */1);
                        })
                    }), React.createElement(Button.make, {
                      text: "Reset",
                      handleClick: (function (param) {
                          Curry._1(dispatch, /* Reset */{
                                _0: initialValue
                              });
                        })
                    })));
}

var make = Counter;

export {
  str ,
  reducer ,
  make ,
}
/* react Not a pure module */
