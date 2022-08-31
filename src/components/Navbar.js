import React from "react"
import styled from "styled-components"
import NavIcon from "./NavIcon"

const Navbar = () => {
  return (
    <Wrapper>
      <NavIcon />
      {/* <div className='navigation__background'>&nbsp;</div>
      <nav className='navigation__nav'>
        <NavLinks
          listClass='navigation__list'
          itemClass='navigation__item'
          linkClass='navigation__link'
          linksNames={[
            "About Natours",
            "Your Benefits",
            "Popular Tours",
            "Stories",
            "Book Now",
          ]}
        />
      </nav> */}
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.div`
  background-color: #444;
  padding: 0 5rem;
  height: 8rem;
  position: relative;
  z-index: 100;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  @media only screen and (max-width: 62.5em) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`
