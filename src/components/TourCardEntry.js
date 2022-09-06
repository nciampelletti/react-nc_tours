import React from "react"
import styled from "styled-components"

const TourCardEntry = ({ icon, name, value }) => {
  return (
    <Wrapper className='card__data'>
      {icon}
      <span className='cd-span cd-span-bold'>{name}</span>
      <span className='cd-span'>{value}</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .cd-span-bold {
    font-weight: 600;
  }

  .card__data {
    margin-bottom: 1.5rem;
  }
`

export default TourCardEntry
