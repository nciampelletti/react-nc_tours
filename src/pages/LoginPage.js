import React from "react"
import styled from "styled-components"
import LoginForm from "../components/authentification/LoginForm"

const LoginPage = () => {
  return (
    <Wrapper className='section'>
      <LoginForm />
    </Wrapper>
  )
}

export default LoginPage

const Wrapper = styled.div`
  background-color: var(--clr-grey-10);
  padding: 1rem 0rem;
  //height: 100%;
`
