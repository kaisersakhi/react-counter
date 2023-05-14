let str = React.string

@react.component
let make = (~text: string, ~handleClick) =>
  <button
    onClick={_mouseEvent => handleClick(_mouseEvent)}
    className={`bg-gray-200 hover:shadow-lg hover:shadow-green border py-2 px-4 rounded-lg hover:bg-black-200 mr-1`}>
    {text->str}
  </button>
