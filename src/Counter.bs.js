// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Button from "./Button.bs.js";

function str(prim) {
  return prim;
}

function Counter(props) {
  var initialValue = props.initialValue;
  var match = React.useState(function () {
        return initialValue;
      });
  var setCount = match[1];
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
                          Curry._1(setCount, (function (prev) {
                                  return prev + 1 | 0;
                                }));
                        })
                    }), React.createElement(Button.make, {
                      text: "Decrement",
                      handleClick: (function (param) {
                          Curry._1(setCount, (function (prev) {
                                  return prev - 1 | 0;
                                }));
                        })
                    }), React.createElement(Button.make, {
                      text: "Reset",
                      handleClick: (function (param) {
                          Curry._1(setCount, (function (_prev) {
                                  return 0;
                                }));
                        })
                    })));
}

var make = Counter;

export {
  str ,
  make ,
}
/* react Not a pure module */
