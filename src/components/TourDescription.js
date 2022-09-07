import React from "react"
import styled from "styled-components"
import { BsCalendarWeek, BsStarFill, BsPeople } from "react-icons/bs"
import { GiStairsGoal } from "react-icons/gi"
import TourCardEntry from "./TourCardEntry"

const TourDescription = ({
  name,
  date,
  difficulty,
  maxGroupSize,
  ratingsAverage,
  quides,
  summary,
  description,
}) => {
  console.log(quides)

  return (
    <Wrapper>
      <div className='overview-box'>
        <div className='overview-box__group'>
          <h2 className='heading-secondary ma-bt-lg'>Tour information</h2>

          <TourCardEntry
            icon={<BsCalendarWeek className='card__icon' />}
            name='Next date:'
            value={date}
          />

          <TourCardEntry
            icon={<GiStairsGoal className='card__icon' />}
            name='Difficulty:'
            value={difficulty}
          />

          <TourCardEntry
            icon={<BsPeople className='card__icon' />}
            name='Participants:'
            value={`${maxGroupSize} people`}
          />

          <TourCardEntry
            icon={<BsStarFill className='card__icon' />}
            name='Rating:'
            value={`${ratingsAverage} / 5`}
          />
        </div>
        {quides && quides.length !== 0 && (
          <div className='overview-box__group'>
            <h2 className='heading-secondary ma-bt-lg'>Your tour guides</h2>

            {quides.map((quide) => {
              return (
                <TourCardEntry
                  key={quide._id}
                  icon={
                    <img
                      className='overview-box__img'
                      src={`/img/${quide.photo}`}
                      alt={quide.name}
                    />
                  }
                  name={quide.role}
                  value={quide.name}
                />
              )
            })}
          </div>
        )}
      </div>

      <div className='description-box'>
        <h2 className='heading-secondary ma-bt-lg'>About {name}</h2>
        <p className='description__text'>{summary}</p>
        <p className='description__text'>{description}</p>
      </div>
    </Wrapper>
  )
}

export default TourDescription

const Wrapper = styled.div`
  background-color: var(--clr-grey-10);
  margin-top: calc(0px - var(--section-rotate));
  display: grid;
  grid-template-columns: 1fr 1fr;

  padding: 0 8vw;
  padding-top: 14vw;
  padding-bottom: calc(1vw + var(--section-rotate) + 10rem);

  /* .overview-box {
    background-color: red;
    display: flex;
    justify-content: center;
  } */

  .overview-box__group:not(:last-child) {
    margin-bottom: 3rem;
  }

  .overview-box__detail {
    font-size: 1.2rem;
    display: flex;
    align-items: flex-start;
  }

  .overview-box__detail svg {
    margin-right: 1rem;
  }

  .overview-box__detail:not(:last-child) {
    margin-bottom: 2.25rem;
  }
  .overview-box__icon {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
  }

  .overview-box__value {
    font-weight: 600;
    color: var(--clr-grey-3);
    margin-right: 0.5rem;
  }

  .overview-box__text {
    color: var(--clr-grey-3);
  }

  .overview-box__img {
    border-radius: 50%;
    height: 3.5rem;
    margin-right: 1.25rem;
  }

  .ma-bt-lg {
    margin-bottom: 2.5rem;
  }

  .cd-span-bold {
    font-weight: 600;
  }

  .card__data {
    margin-bottom: 1.5rem;
  }

  .section-description {
    padding: 0 8vw;
    padding-top: 14vw;
    padding-bottom: calc(1vw + var(--section-rotate));
    flex: 0 0 50%;
    background-color: var(--clr-grey-1);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-bottom: calc(1vw + var(--section-rotate) + 10rem);
  }

  .description-box .description {
    margin-right: 5rem;
  }

  .description-box .description__text:not(:last-child) {
    margin-bottom: 2rem;
  }
`
