import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <Wrapper>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to='/' className='btn'>
          back home
        </Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background-color: var(--clr-grey-10);
  padding: 1rem 1rem;
  position: relative;

  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage
