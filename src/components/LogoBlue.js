import React from "react"
import styled from "styled-components"
import logo from "../assets/Logo_blue.svg"

const LogoBlue = () => {
  return <Wrapper src={logo} alt='out best tours' className='logo' />
}

export default LogoBlue

const Wrapper = styled.img`
  display: flex;
  align-items: center;
  width: 350px;
`
