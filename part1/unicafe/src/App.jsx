import { useState } from "react"

import Button from "./Components/Button"
import StatField from "./Components/StatField"

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give Feedback</h1>
      <Button
        onClick={() => {
          setGood(good + 1)
        }}
        text="Good"
      />
      <Button
        onClick={() => {
          setNeutral(neutral + 1)
        }}
        text="Neutral"
      />
      <Button
        onClick={() => {
          setBad(bad + 1)
        }}
        text="Bad"
      />

      <h1>Statistics</h1>
      <StatField text="Good" num={good} />
      <StatField text="Neutral" num={neutral} />
      <StatField text="Bad" num={bad} />
    </>
  )
}

export default App
