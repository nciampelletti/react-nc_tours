import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { single_tour_url as url } from "../utils/constants"
import { useToursContext } from "../context/tours_context"
import styled from "styled-components"
import { TourDescription, TourHeader } from "../components/"

const TourPage = () => {
  const { id } = useParams()
  const {
    single_tour_loading: loading,
    single_tour_error: error,
    single_tour: tour,
    fetchSingleTour,
  } = useToursContext()

  useEffect(() => {
    console.log(`${url}${id}`)

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

  const { name, duration, locations, imageCover } = tour

  return (
    <Wrapper>
      <TourHeader
        name={name}
        duration={duration}
        location={locations[0].description}
        image={imageCover}
      />
      <TourDescription />
    </Wrapper>
  )
}

export default TourPage

const Wrapper = styled.div`
  background-color: var(--clr-grey-10);
  padding: 0rem 0rem;
  position: relative;
`
