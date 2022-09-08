import React from "react"
import NavLinks from "./NavLinks"
import styled from "styled-components"

const SideBar = () => {
  return (
    <Wrapper>
      <div className='sidebar-container  show-sidebar'>
        <div className='content'>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default SideBar

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 800px) {
    display: block;
    flex: 40rem 0 0;
    background-image: linear-gradient(
      to right bottom,
      var(--clr-blue-10),
      var(--clr-grey-3)
    );
    padding: 4rem 0px;

    /* display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1); */
    .sidebar-container {
      background: var(--white);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      //margin-left: -250px;
      transition: var(--transition);
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding-top: 0rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      /* color: var(--grey-100); */
      color: var(--clr-grey-3);
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link:hover {
      background: var(--grey-50);

      padding-left: 3rem;
      color: white;
    }
    .nav-link:hover .icon {
      color: white;
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .active {
      color: white;
    }
    .active .icon {
      color: white;
    }
  }
`
