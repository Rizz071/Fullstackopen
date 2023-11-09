import { useState } from "react"

import Button from "./Components/Button"
import Statistics from "./Components/Statistics"

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give Feedback</h1>
      <Button onClick={() => { setGood(good + 1) }} text="Good" />
      <Button onClick={() => { setNeutral(neutral + 1) }} text="Neutral" />
      <Button onClick={() => { setBad(bad + 1) }} text="Bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
