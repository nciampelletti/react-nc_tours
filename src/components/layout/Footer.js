import React from "react"
import logo_blue from "../../assets/Logo_blue.svg"
import Logo from "../Logo"
import styled from "styled-components"
import NavFooter from "./NavFooter"

const Footer = () => {
  return (
    <Wrapper>
      <div className='footer__logo'>
        <Logo logo={logo_blue} />
      </div>
      <NavFooter />
      <p className='footer__copyright'>Created by Natalia Ciampelletti</p>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  background-color: var(--clr-white);
  padding: 2rem 5rem;
  height: 8rem;
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  border-top: 1px solid var(--clr-grey-9);

  .footer__logo {
    grid-row: 1 / 3;
    align-self: center;
  }

  .footer__copyright {
    justify-self: end;
    font-size: 0.8rem;
    color: var(--clr-grey-6);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    .footer__logo {
      display: none;
    }
  }
`
