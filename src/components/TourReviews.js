import React from "react"
import styled from "styled-components"
import TourReviewCard from "./TourReviewCard"

const TourReviews = ({ reviews }) => {
  return (
    <Wrapper>
      <div className='reviews'>
        {reviews.map((item) => {
          const { user, name, review, rating } = item

          return (
            <TourReviewCard
              image={user.photo}
              name={user.name}
              review={review}
              rating={rating}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

export default TourReviews

const Wrapper = styled.section`
  margin-top: calc(0px - var(--section-rotate));
  padding: calc(5rem + var(--section-rotate)) 0;
  position: relative;
  z-index: 1000;
  background: linear-gradient(
    to right bottom,
    var(--clr-blue-10),
    var(--clr-grey-3)
  );
  clip-path: polygon(
    0 var(--section-rotate),
    100% 0,
    100% calc(100% - var(--section-rotate)),
    0 100%
  );

  .reviews {
    padding: 2rem 0;
    display: grid;
    grid-column-gap: 3rem;
    grid-auto-flow: column;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }

  .reviews:before,
  .reviews:after {
    content: "";
    width: 2rem;
  }
`
