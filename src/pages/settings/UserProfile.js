import React from "react"
import styled from "styled-components"
import { useUserContext } from "../../context/user_context"

const UserProfile = () => {
  const { user } = useUserContext()

  return <Wrapper className='section'>Hello {user.name}</Wrapper>
}

export default UserProfile

const Wrapper = styled.div``
