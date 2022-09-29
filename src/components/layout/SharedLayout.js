import React from "react"

import { Outlet } from "react-router-dom"
import styled from "styled-components"
import { SideBar } from "."

const SharedLayout = () => {
  return (
    <>
      <Wrapper>
        <main className='dashboard'>
          <SideBar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </main>
      </Wrapper>
    </>
  )
}

export default SharedLayout

const Wrapper = styled.section`
  .dashboard {
    background-color: var(--clr-grey-10);
    padding: 0rem 0rem;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 80vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 800px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`
