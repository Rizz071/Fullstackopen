import StatField from "./StatField"

const Statistics = ({ good, neutral, bad }) => {
  if (good > 0 || neutral > 0 || bad > 0) {
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
  } else {
    return <p>No feedback given</p>
  }
}

export default Statistics
