import { Link } from "react-router-dom"
import styled from "styled-components"

function Button(props) {
  if (props.link) {
    return (
      <Link to={props.link} className='btn btn--blue'>
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
`
