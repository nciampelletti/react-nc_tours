import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const NavUsers = () => {
  return (
    <Wrapper>
      <Link to='/login' className='nav__el'>
        LOGIN
      </Link>
      <Link to='/signup' className='nav__el nav__el--cta'>
        Sign Up
      </Link>
    </Wrapper>
  )
}

export default NavUsers

const Wrapper = styled.div`
  /* flex: 0 1 40%; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  .nav__el--cta {
    padding: 1rem 3rem;
    border-radius: 10rem;
    border: 1px solid white !important;
    transition: all 0.3s;
  }

  @media (max-width: 992px) {
    display: none;
  }
`
