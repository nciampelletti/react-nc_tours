import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import links from "../../utils/footerlinks"

const NavFooter = () => {
  return (
    <Wrapper>
      {links.map((link) => {
        return (
          <Link key={link.id} to={link.to} className='link__descn'>
            {link.text}
          </Link>
        )
      })}
    </Wrapper>
  )
}

export default NavFooter

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  .link__descn {
    justify-self: end;
    font-size: 1rem;
    color: var(--clr-grey-6);
  }
`
