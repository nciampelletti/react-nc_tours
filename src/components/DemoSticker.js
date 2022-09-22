import React from "react"
import Button from "../components/ui/Button"
import styled from "styled-components"
import TextHeader from "./layout/TextHeader"

const DemoSticker = ({ name }) => {
  return (
    <Wrapper>
      <p>Sorry, this is only a demo version.</p>
      <TextHeader centered='true' text={name} className='demo_header' />

      <Button link='/'>BACK HOME</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  margin: 6rem auto;

  p {
    margin-bottom: 4rem;
  }
  .demo_header {
    margin-bottom: 4rem;
  }
`

export default DemoSticker
