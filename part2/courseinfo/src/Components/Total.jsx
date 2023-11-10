const Total = (props) => {
  return (
    <p>
      <strong>
        {/* Using reducer to evaluate sum of exercises */}
        Total of {props.course.parts.reduce((accumulator, currentValue) => (accumulator + currentValue.exercises), 0)} exercises
      </strong>
    </p>
  )
}

export default Total
