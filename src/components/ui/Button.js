import { Link } from "react-router-dom"
import styled from "styled-components"

function Button(props) {
  const linkClass = `${props.disabled && "disabled-link"} btn btn--blue`

  console.log(linkClass)

  if (props.link) {
    return (
      <Link to={props.link} style={{ pointerEvents: "none" }}>
        {props.children}
      </Link>
    )
  }

  return (
    <Wrapper className='btn btn--blue' onClick={props.onClick}>
      {props.children}
    </Wrapper>
  )
}

export default Button

const Wrapper = styled.button`
  padding: 1rem 3rem;

  .disabled-link {
    pointer-events: none;
  }
`
