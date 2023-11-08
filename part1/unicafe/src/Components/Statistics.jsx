import StatField from "./StatField"

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <h1>Statistics</h1>

      <StatField text="Good" num={good} />
      <StatField text="Neutral" num={neutral} />
      <StatField text="Bad" num={bad} />
      <StatField text="All" num={good + neutral + bad} />
      <StatField
        text="Average"
        num={((good - bad) / (good + neutral + bad)).toFixed(2)}
      />
      <StatField
        text="Positive"
        num={((good * 100) / (good + neutral + bad)).toFixed(2) + "%"}
      />
    </>
  )
}

export default Statistics
