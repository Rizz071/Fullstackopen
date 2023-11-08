import StatisticLine from "./StatisticLine"

const Statistics = ({ good, neutral, bad }) => {
  if (good > 0 || neutral > 0 || bad > 0) {
    return (
      <table>
        <thead>
          <tr>
            <td>
              <h1>Statistics</h1>
            </td>
          </tr>
        </thead>
        <tbody>
          <StatisticLine text="Good" num={good} />
          <StatisticLine text="Neutral" num={neutral} />
          <StatisticLine text="Bad" num={bad} />
          <StatisticLine text="All" num={good + neutral + bad} />
          <StatisticLine
            text="Average"
            num={((good - bad) / (good + neutral + bad)).toFixed(2)}
          />
          <StatisticLine
            text="Positive"
            num={((good * 100) / (good + neutral + bad)).toFixed(2) + "%"}
          />
        </tbody>
      </table>
    )
  } else {
    return <p>No feedback given</p>
  }
}

export default Statistics
