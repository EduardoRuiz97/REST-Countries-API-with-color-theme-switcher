const Button = props => {
  return (
    <button className={props.className} type={props.type} disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button;