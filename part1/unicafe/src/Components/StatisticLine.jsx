const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}:</td>
      <td>
        <strong>{props.num}</strong>
      </td>
    </tr>
  )
}

export default StatisticLine
