import React from "react"
// import "./Tour.css"
import styled from "styled-components"
import { GoLocation } from "react-icons/go"
import { BsCalendarWeek, BsFlag, BsPeople } from "react-icons/bs"
import { Link } from "react-router-dom"

const Tour = ({
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
  locationnum, //tour.locations.length
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
          <span className='heading-tertirary-span'>{name}</span>
        </h3>
      </div>
      <div className='card__details'>
        <h5>
          {difficulty} {duration}-day tour
        </h5>
        <p className='card__text'>{summary}</p>
        <div className='card__data'>
          <GoLocation className='card__icon' />
          <span className='cd-span'> {locationdesc}</span>
        </div>
        <div className='card__data'>
          <BsCalendarWeek className='card__icon' />
          <span className='cd-span'> {startDate}</span>
        </div>
        <div className='card__data'>
          <BsFlag className='card__icon' />
          <span className='cd-span'> {locationnum} stops</span>
        </div>
        <div className='card__data'>
          <BsPeople className='card__icon' />
          <span className='cd-span'> {maxGroupSize} people</span>
        </div>
      </div>

      <div className='card__footer'>
        <div>
          <span className='card__footer-value'>${price} </span>
          <span className='card__footer-text'>per person</span>
        </div>
        <div>
          <span className='card__footer-value'>{ratingsAverage} </span>
          <span className='card__footer-text'>rating ({ratingsQuantity})</span>
        </div>
        <div className='card__footer-button'>
          <Link className='btn btn--blue' to={`/tours/${slug}`}>
            Details
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

export default Tour

const Wrapper = styled.div`
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #fff;
  transition: 0.3s all;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;

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
    -o-object-fit: cover;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .heading-tertirary {
    font-size: 2.5rem;
    text-align: right;
    position: absolute;
    bottom: 1rem;
    right: 2rem;
    width: 80%;
    z-index: 10;
  }

  .heading-tertirary {
    color: #fff;
    text-transform: uppercase;
    font-weight: 300;
  }

  .heading-tertirary-span {
    padding: 0.5rem 1.2rem;
    line-height: 1.25;
    box-decoration-break: clone;
    background-image: linear-gradient(
      to bottom right,
      var(--clr-grey-10),
      var(--clr-blue-7)
    );
  }

  .card__details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1.75rem;
    grid-column-gap: 2rem;
    padding: 2.5rem 1rem;
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
  .card__data {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
  }

  .card__icon {
    height: 2rem;
    width: 2rem;
    margin-right: 0.3rem;
    fill: var(--clr-blue-7);
  }

  .cd-span {
    color: var(--clr-grey-3);
    font-size: 1rem;
  }

  .card__footer {
    background-color: var(--clr-grey-10);
    padding: 2.5rem 1rem;
    border-top: 1px solid var(--clr-grey-9);
    font-size: 1.2rem;
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
