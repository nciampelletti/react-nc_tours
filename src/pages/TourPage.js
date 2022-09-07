import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { single_tour_url as url } from "../utils/constants"
import { useToursContext } from "../context/tours_context"
import styled from "styled-components"
import { formatDateShort } from "../utils/helpers"
import {
  TourDescription,
  TourHeader,
  TourPictures,
  TourMap,
  TourReviews,
  TourCta,
  Loading,
  Error,
} from "../components/"

const TourPage = () => {
  const { id } = useParams()
  const {
    single_tour_loading: loading,
    single_tour_error: error,
    single_tour: tour,
    single_tour_reviews: reviews,
    fetchSingleTourWithReviews,
  } = useToursContext()

  const {
    name,
    locations,
    imageCover,
    startDates,
    duration,
    difficulty,
    description,
    maxGroupSize,
    ratingsAverage,
    quides,
    summary,
    images,
    startLocation,
  } = tour

  useEffect(() => {
    fetchSingleTourWithReviews(`${url}${id}`, `${url}${id}/reviews`)
  }, [id])

  //export const single_tour_url = `http://localhost:8000/api/v1/tours/`

  // useEffect(() => {
  //   //console.log(`${url}${id}/reviews`)
  //   fetchSingleTourReviews(`${url}${id}/reviews`)
  //   // eslint-disable-next-line
  // }, [id])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  console.log(tour)

  if (!tour) {
    return null
  }

  return (
    <Wrapper>
      <TourHeader
        name={name}
        image={imageCover}
        duration={duration}
        location={
          startLocation && startLocation.description
            ? startLocation.description
            : ""
        }
      />
      <TourDescription
        date={
          startDates && startDates.length !== 0
            ? formatDateShort(startDates[0])
            : null
        }
        difficulty={difficulty}
        maxGroupSize={maxGroupSize}
        ratingsAverage={ratingsAverage}
        quides={quides}
        summary={summary}
        description={description}
        name={name}
      />
      {images && images.length !== 0 && (
        <TourPictures name={name} images={images} />
      )}
      {startLocation && startLocation.coordinates && (
        <TourMap
          startCoordinates={startLocation.coordinates}
          startDescription={startLocation.description}
          locations={locations}
        />
      )}

      {reviews && <TourReviews reviews={reviews} />}

      <TourCta images={images} />
    </Wrapper>
  )
}

export default TourPage

const Wrapper = styled.div`
  background-color: var(--clr-grey-10);
  padding: 0rem 0rem;
  position: relative;
`
