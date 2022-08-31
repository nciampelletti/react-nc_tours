import React from "react"
import { Navbar } from "../components/"
import { Outlet } from "react-router-dom"
import styled from "styled-components"

const SharedLayout = () => {
  return (
    <>
      <Wrapper>
        <main className='dashboard'>
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div``

export default SharedLayout
