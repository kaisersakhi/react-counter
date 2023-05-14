let str = React.string

type action =
  | Increment
  | Decrement
  | Reset(int)

let reducer = (state, action) =>
  switch action {
  | Increment => state + 1
  | Decrement => state - 1
  | Reset(initialValue) => initialValue
  }

@react.component
let make = (~initialValue: int) => {
  let (count, dispatch) = React.useReducer(reducer, initialValue)

  let bgColor = if count > 0 {
    "bg-green-200"
  } else if count < 0 {
    "bg-red-200"
  } else {
    "bg-blue-200"
  }
  <div className="max-w-3xl mx-auto mt-24">
    <p className={`py-4 mb-8 text-center text-4xl ${bgColor}`}>
      {("The count is " ++ count->Belt.Int.toString)->str}
    </p>
    <div className="flex justify-center">
      <Button text="Increment" handleClick={_ => dispatch(Increment)} />
      <Button text="Decrement" handleClick={_ => dispatch(Decrement)} />
      <Button text="Reset" handleClick={_ => dispatch(Reset(initialValue))} />
    </div>
  </div>
}
