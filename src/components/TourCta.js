import React from "react"
import styled from "styled-components"
import Button from "./ui/Button"
import { image_tour_url } from "../utils/constants"

const TourCta = ({ images }) => {
  return (
    <Wrapper>
      <div className='cta'>
        <div className='cta__images'>
          {images?.map((image, key) => {
            const count = key + 1
            return (
              <img
                key={key}
                className={`cta__img cta__img--${count}`}
                src={`${image_tour_url}${image}`}
                alt=''
              />
            )
          })}
        </div>
        <div className='cta__content'>
          <h2 className='heading-secondary'>
            Are you ready for the adventure?
          </h2>
          <p className='cta__text'>Best experience for life.</p>
        </div>
        <div className='cta__button'>
          <Button link={`/login`}>Login</Button>
        </div>
      </div>
    </Wrapper>
  )
}

export default TourCta

const Wrapper = styled.section`
  margin-top: calc(0px - var(--section-rotate));
  padding: 4rem;
  padding-bottom: 5rem;
  padding-top: calc(5rem + var(--section-rotate));
  background-color: var(--clr-grey-9);

  .cta {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: stretch;
    position: relative;
    margin: 0 auto;
    background-color: #fff;
    padding: 4rem 1rem 4rem 1rem;
    border-radius: 2rem;
    box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 45%);
    /* box-shadow: 0 3rem 8rem 0.5rem rgb(0 0 0 / 15%); */
  }

  .cta__img {
    height: 12rem;
    width: 12rem;
    position: absolute;
    left: 0;
    top: 50%;
    border-radius: 50%;
    box-shadow: 1rem 0.5rem 3rem rgb(0 0 0 / 15%);
  }

  .cta__img--1 {
    transform: translate(-10%, -50%) scale(0.97);
    z-index: 9;
  }

  .cta__img--2 {
    transform: translate(15%, -50%) scale(0.9);
    z-index: 8;
  }

  .cta__img--3 {
    transform: translate(43%, -50%) scale(0.83);
    z-index: 7;
  }

  .cta__content {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr auto;
    grid-gap: 0.7rem;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
  }

  .cta__text {
    font-size: 1.1rem;
    font-weight: 400;
  }

  .btn {
    padding: 0.5rem 4rem;
  }

  @media screen and (max-width: 1000px) {
    .cta__images {
      display: none;
    }

    .cta__content {
      /* display: none; */
      grid-column: 1 / -1;
    }
  }
`
