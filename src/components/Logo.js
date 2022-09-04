import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Logo = ({ logo }) => {
  return (
    <Link to='/'>
      <Wrapper src={logo} alt='tours search' />
    </Link>
  )
}
export default Logo

const Wrapper = styled.img`
  width: 250px;
`
