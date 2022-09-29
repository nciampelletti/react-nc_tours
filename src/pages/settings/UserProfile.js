import React from "react"
import styled from "styled-components"
import UserAccountDetails from "./UserAccountDetails"

const UserProfile = () => {
  return (
    <Wrapper>
      <UserAccountDetails />
    </Wrapper>
  )
}

export default UserProfile

const Wrapper = styled.div`
  margin: 2rem 2rem;
`
