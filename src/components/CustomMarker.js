import * as React from "react"
import Map, { Marker } from "react-map-gl"
import styled from "styled-components"
import { FaMapPin } from "react-icons/fa"

const CustomMarker = ({ longitude, latitude, description, color }) => {
  return (
    <Marker longitude={longitude} latitude={latitude}>
      <Wrapper className='marker'>
        <span>
          <i>{description}</i>
          <FaMapPin
            style={
              color === "primary"
                ? { color: "darkred", fontSize: "2.5em" }
                : { color: "darkblue", fontSize: "2.5em" }
            }
          />
        </span>
      </Wrapper>
    </Marker>
  )
}

export default CustomMarker

const Wrapper = styled.div`
  .marker {
    width: 0;
    height: 0;
  }

  .marker span {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    color: #fff;
    background: #4d2d73;
    border: solid 2px;
    border-radius: 0 70% 70%;
    box-shadow: 0 0 2px #000;
    cursor: pointer;
    transform-origin: 0 0;
    transform: rotateZ(-135deg);
  }

  .marker b {
    transform: rotateZ(135deg);
  }

  .temporary-marker span {
    background: #d3d3d3;
  }
`
