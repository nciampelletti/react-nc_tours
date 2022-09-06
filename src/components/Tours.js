import React from "react"
import { useToursContext } from "../context/tours_context"
import Tour from "./Tour"

import styled from "styled-components"
import { formatDateShort } from "../utils/helpers"

const Tours = () => {
  const { tours } = useToursContext()

  console.log(tours)

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h3 className='heading-secondary'>our featured tours</h3>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {tours.map((tour) => {
          const {
            _id,
            imageCover,
            name,
            difficulty,
            duration,
            summary,
            ratingsAverage,
            ratingsQuantity,
            price,
            startLocation, //tour.startlocation.description
            startDates, //tour.startDates[0]
            maxGroupSize,
            locations, //tour.locations.length
            slug,
          } = tour

          console.log(imageCover)

          return (
            <Tour
              id={_id}
              key={_id}
              image={imageCover}
              name={name}
              duration={duration}
              difficulty={difficulty}
              summary={summary}
              ratingsAverage={ratingsAverage}
              ratingsQuantity={ratingsQuantity}
              price={price}
              locationdesc={startLocation.description}
              startDate={formatDateShort(startDates[0])}
              maxGroupSize={maxGroupSize}
              locations={locations.length}
              slug={slug}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .featured {
    margin: 2rem auto;
    display: grid;
    gap: 2rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(368px, 1fr));
    }
  }
`

export default Tours
