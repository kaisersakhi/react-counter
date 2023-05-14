let str = React.string
@react.component
let make = (~initialValue: int) => {
  let (count, setCount) = React.useState(() => initialValue)
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
      <Button text="Increment" handleClick={_ => setCount(prev => prev + 1)} />
      <Button text="Decrement" handleClick={_ => setCount(prev => prev - 1)} />
      <Button text="Reset" handleClick={_ => setCount(_prev => 0)} />
    </div>
  </div>
}
