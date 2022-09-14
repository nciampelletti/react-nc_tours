import React from "react"
import styled from "styled-components"
import defImage from "../assets/default.jpg"
import Stars from "./ui/Stars"

const TourReviewCard = ({ image, name, review, rating }) => {
  return (
    <Wrapper>
      <div className='reviews__avatar'>
        <img
          className='reviews__avatar-img'
          src={!image ? defImage : `/img/${image}`}
          alt={name}
        />
        <h6 className='reviews__user'>{name}</h6>
      </div>
      <p className='reviews__text'>{review}</p>
      <div>
        <Stars stars={rating} />
      </div>
    </Wrapper>
  )
}

export default TourReviewCard

const Wrapper = styled.div`
  width: 25rem;
  padding: 1.5rem;
  background-color: #f7f7f7;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 45%);
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .reviews__avatar {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  .reviews__avatar-img {
    /* height: 4.5rem;
    border-radius: 50%;
    margin-right: 1.2rem; */
    border-radius: 50%;
    height: 3.5rem;
    width: 3.5rem;
    margin-right: 1.25rem;
  }

  .reviews__user {
    font-size: 1.1rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  .reviews__text {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    font-style: italic;
    font-weight: 300;
  }
`
