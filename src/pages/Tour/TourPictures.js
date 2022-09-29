import React from "react"
import styled from "styled-components"
import { TourPictureItem } from "."

//name, image, count
const TourPictures = ({ name, images }) => {
  return (
    <Wrapper>
      {images?.map((image, key) => {
        return (
          <TourPictureItem key={key} name={name} image={image} count={key} />
        )
      })}
    </Wrapper>
  )
}

export default TourPictures

const Wrapper = styled.div`
  display: flex;
  clip-path: polygon(
    0 var(--section-rotate),
    100% 0,
    100% calc(100% - var(--section-rotate)),
    0 100%
  );
  margin-top: calc(0px - var(--section-rotate));
  position: relative;
  z-index: 1000;

  @media screen and (max-width: 1000px) {
    margin-top: calc(0px - var(--section-rotate) + 3rem);
  }
`
