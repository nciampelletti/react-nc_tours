import React from "react"
import styled from "styled-components"

const TourHeader = ({ name, image }) => {
  return (
    <Wrapper>
      <div class='header__hero'>
        <div class='header__hero-overlay'> </div>
        <img src={`/img/${image}`} alt={name} className='header__hero-img' />
      </div>
      <div class='heading-box'>
        <h1 class='heading-primary'>
          <span>{name}</span>
        </h1>
      </div>
      adasdas
    </Wrapper>
  )
}

export default React.memo(TourHeader)

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

  .heading-box {
    position: absolute;
    bottom: 13vw;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
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

  @media screen and (max-width: 800px) {
    .heading-primary {
      font-size: 2rem;
    }
  }
`
