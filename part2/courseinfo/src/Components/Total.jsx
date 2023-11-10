const Total = (props) => {
  return (
    <>
      <p>
        <strong>
          Total of {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} exercises
        </strong>
      </p>
    </>
  )
}

export default Total
