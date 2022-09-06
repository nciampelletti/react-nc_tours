import React from "react"
import styled from "styled-components"
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"

const Stars = ({ stars }) => {
  const temStars = Array.from({ length: 5 }, (_, index) => {
    //index 0 to 4
    const number = index + 0.5
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })

  return (
    <Wrapper>
      <div className='stars'>{temStars}</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: var(--clr-blue-4);
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
