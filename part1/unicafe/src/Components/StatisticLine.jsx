const StatisticLine = (props) => {
  return (
    <p style={{ margin: 0 }}>
      {props.text}: <strong>{props.num}</strong>
    </p>
  )
}

export default StatisticLine
