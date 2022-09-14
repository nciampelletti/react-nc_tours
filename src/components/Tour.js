import React from "react"
// import "./Tour.css"
import styled from "styled-components"
import { GoLocation } from "react-icons/go"
import { BsCalendarWeek, BsFlag, BsPeople } from "react-icons/bs"
import TourCardEntry from "./ui/TourCardEntry"
import Button from "./ui/Button"

const Tour = ({
  id,
  image,
  name,
  difficulty,
  duration,
  summary,
  ratingsAverage,
  ratingsQuantity,
  price,
  locationdesc, //tour.startlocation.description
  startDate, //tour.startDates[0]
  maxGroupSize,
  locations, //tour.locations.length
  slug,
}) => {
  return (
    <Wrapper>
      <div className='card__header'>
        <div className='card__picture'>
          <div className='card__picture-overlay'> </div>
          <img src={`/img/${image}`} alt={name} className='card__picture-img' />
        </div>

        <h3 className='heading-tertirary'>
          <span>{name}</span>
        </h3>
      </div>
      <div className='card__details'>
        <h5>
          {difficulty} {duration}-day tour
        </h5>
        <p className='card__text'>{summary}</p>
        <TourCardEntry
          icon={<GoLocation className='card__icon' />}
          value={locationdesc}
        />

        <TourCardEntry
          icon={<BsCalendarWeek className='card__icon' />}
          value={startDate}
        />

        <TourCardEntry
          icon={<BsFlag className='card__icon' />}
          value={`${locations} stops`}
        />

        <TourCardEntry
          icon={<BsPeople className='card__icon' />}
          value={`${maxGroupSize} people`}
        />
      </div>

      <div className='card__footer'>
        <TourCardEntry name={`$${price}`} value={"per person"} />
        <TourCardEntry
          name={ratingsAverage}
          value={`rating (${ratingsQuantity})`}
        />
        <div className='card__footer-button'>
          <Button link={`/tours/${id}`}>Details</Button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Tour

const Wrapper = styled.div`
  border-radius: 3px;
  overflow: hidden;
  /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06); */
  background-color: #fff;
  transition: 0.3s all;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 45%);

  .card__header {
    position: relative;
  }

  .card__picture {
    position: relative;
    clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);
    height: 14rem;
  }

  .card__picture-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to right bottom,
      var(--clr-grey-10),
      var(--clr-blue-7)
    );
    opacity: 0.6;
  }

  .card__picture-img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .card__details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1.2rem;
    grid-column-gap: 1rem;
    padding: 1rem 1rem;
  }

  h5 {
    text-transform: uppercase;
    color: var(--clr-grey-3);
    grid-column: 1 / -1;
  }

  .card__text {
    grid-column: 1 / -1;
    font-style: italic;
    color: var(--clr-grey-3);
    margin-top: -1rem;
    margin-bottom: 0.75rem;
    font-size: 1rem;
  }

  .card__footer {
    background-color: var(--clr-grey-10);
    padding: 1rem 1rem;
    border-top: 1px solid var(--clr-grey-9);
    font-size: 1.1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    margin-top: auto;
    justify-items: center;
  }

  .card__footer-value {
    font-weight: 600;
    color: var(--clr-grey-3);
  }

  .card__footer-text {
    color: var(--clr-grey-3);
  }

  .card__footer-button {
    grid-column: 1 / -1;
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
`
