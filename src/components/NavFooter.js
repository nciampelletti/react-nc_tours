import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { BsArrowUpLeftCircle } from "react-icons/bs"

const NavFooter = () => {
  return (
    <Wrapper>
      <Link to='/' className='link__descn'>
        About us
      </Link>
      <Link to='/' className='link__descn'>
        Download apps
      </Link>
      <Link to='/' className='link__descn'>
        Careers
      </Link>
      <Link to='/' className='link__descn'>
        Contact
      </Link>
    </Wrapper>
  )
}

export default NavFooter

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .link__descn {
    justify-self: end;
    font-size: 1rem;
    color: var(--clr-grey-6);
  }
`
