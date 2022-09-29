import React from "react"
import styled from "styled-components"
import { image_tour_url } from "../../utils/constants"

const TourHeader = ({ name, image, duration, location }) => {
  return (
    <Wrapper>
      <div className='header__hero'>
        <div className='header__hero-overlay'> </div>
        <img
          src={`${image_tour_url}${image}`}
          alt={name}
          className='header__hero-img'
        />
      </div>
      <div className='heading-box'>
        <h1 className='heading-primary'>
          <span>{name}</span>
        </h1>
        <div className='heading-box__group'>
          <div className='heading-box__detail'>
            <span className='heading-box__text'>{duration} days</span>
          </div>
          <div className='heading-box__detail'>
            <span className='heading-box__text'>{location}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default TourHeader

const Wrapper = styled.div`
  position: relative;
  height: 38vw;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - var(--section-rotate)),
    0 100%
  );

  .header__hero {
    height: 100%;
  }

  .header__hero-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to right bottom,
      var(--clr-grey-10),
      var(--clr-blue-7)
    );
    opacity: 0.6; //was 0.85
  }

  .header__hero-img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    object-position: 50% 25%;
  }

  .heading-box__group {
    color: #f7f7f7;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .heading-box {
    position: absolute;
    bottom: 13vw;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
  }

  .heading-box__detail {
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    text-shadow: 0 0.5rem 2rem rgb(0 0 0 / 15%);
  }

  .heading-primary {
    font-size: 3.5rem;
    text-align: center;
    width: 70%;
    margin: 0 auto;
  }

  .heading-primary {
    color: #fff;
    text-transform: uppercase;
    font-weight: 300;
  }

  .heading-box__detail {
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    text-shadow: 0 0.5rem 2rem rgb(0 0 0 / 15%);
  }

  .heading-box__text {
    margin-right: 2rem;
  }

  @media screen and (min-width: 0px) and (max-width: 800px) {
    .heading-box__group {
      display: none;
    }
  }

  @media screen and (max-width: 800px) {
    .heading-primary {
      font-size: 2rem;
    }
    .heading-box__text {
      font-size: 1rem;
    }
  }
`
