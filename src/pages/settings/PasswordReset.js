import React from "react"
import styled from "styled-components"
import UserPasswordReset from "./UserPasswordReset"

const PasswordReset = () => {
  return (
    <Wrapper>
      <UserPasswordReset />
    </Wrapper>
  )
}

export default PasswordReset

const Wrapper = styled.div`
  margin: 2rem 2rem;
`
