import React from "react"
import styled from "styled-components"
import UserAccountDetails from "./UserAccountDetails"

const UserProfileAccount = () => {
  return (
    <Wrapper>
      <UserAccountDetails />
    </Wrapper>
  )
}

export default UserProfileAccount

const Wrapper = styled.div`
  margin: 2rem 2rem;
`
