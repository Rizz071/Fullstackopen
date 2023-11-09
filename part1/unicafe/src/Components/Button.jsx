const Button = (props) => {
  return (
    <>
      <button type="button" onClick={props.onClick} style={{ margin: 10, width: 80 }}>{props.text}</button>
    </>
  )
}

export default Button
