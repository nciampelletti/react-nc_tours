import React from "react"
import styled from "styled-components"
import SignupForm from "../components/authentification/SignupForm"

const SignupPage = () => {
  return (
    <Wrapper className='section'>
      <SignupForm />
    </Wrapper>
  )
}

export default SignupPage

const Wrapper = styled.div`
  background-color: var(--clr-grey-10);
  padding: 0rem 0rem;
  position: relative;
`
