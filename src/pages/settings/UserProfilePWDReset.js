import React from "react"
import styled from "styled-components"
import UserPasswordReset from "./UserPasswordReset"

const UserProfilePWDReset = () => {
  return (
    <Wrapper>
      <UserPasswordReset />
    </Wrapper>
  )
}

export default UserProfilePWDReset

const Wrapper = styled.div`
  margin: 2rem 2rem;
`
