import React from "react"
import styled from "styled-components"

const TourPictureItem = ({ count, name, image }) => {
  const cssStyle = `picture-box__img picture-box__img--${count + 1}`

  return (
    <Wrapper
      className={cssStyle}
      src={`/img/${image}`}
      alt={name}
      style={{ width: "100%" }}
    />
  )
}

export default TourPictureItem

const Wrapper = styled.img`
  .picture-box__img {
    display: block;
    width: 100%;
    height: 110%;
    object-fit: cover;
  }

  .picture-box__img--1 {
    padding-top: 15%;
  }
  .picture-box__img--2 {
    padding-bottom: 15%;
  }
  .picture-box__img--3 {
    padding-bottom: 27%;
  }
`
