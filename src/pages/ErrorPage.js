import React from "react"
import styled from "styled-components"

import Button from "../components/ui/Button"

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className='error-container'>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>

        <Button link='/'>BACK HOME</Button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background-color: var(--clr-grey-10);
  padding: 1rem 1rem;
  position: relative;
  min-height: 100vh;
  height: 100%;
  text-align: center;

  .error-container {
    text-align: center;
    margin: 6rem auto;
  }
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 4rem;
  }
`

export default ErrorPage
