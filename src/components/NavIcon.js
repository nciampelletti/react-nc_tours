import React from "react"
import styled from "styled-components"
import logo from "../assets/Logo_white.svg"

const NavIcon = () => {
  return <Wrapper src={logo} alt='out best tours' className='logo' />
}

export default NavIcon

const Wrapper = styled.img`
  display: flex;
  align-items: center;
  width: 200px;
`
