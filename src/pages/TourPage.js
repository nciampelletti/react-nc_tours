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
} from "../components/"

const TourPage = () => {
  const { id } = useParams()
  const {
    single_tour_loading: loading,
    single_tour_error: error,
    single_tour: tour,
    fetchSingleTour,
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
  } = tour

  useEffect(() => {
    fetchSingleTour(`${url}${id}`)
    // eslint-disable-next-line
  }, [id])

  // console.log(tour)
  // if (loading) {
  //   return <Loading />
  // }

  // if (error) {
  //   return <Error />
  // }

  console.log(images)
  return (
    <Wrapper>
      <TourHeader name={name} image={imageCover} />
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
      <TourMap />
      <TourReviews />
      <TourCta />
    </Wrapper>
  )
}

export default TourPage

const Wrapper = styled.div`
  background-color: var(--clr-grey-10);
  padding: 0rem 0rem;
  position: relative;
`
