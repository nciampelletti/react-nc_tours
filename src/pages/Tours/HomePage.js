import React from "react"
import Tours from "./Tours"
import styled from "styled-components"

const HomePage = () => {
  return (
    <Wrapper>
      <Tours />
    </Wrapper>
  )
}

export default HomePage

const Wrapper = styled.div`
  background-color: var(--clr-grey-10);
  padding: 1rem 1rem;
  position: relative;
`
