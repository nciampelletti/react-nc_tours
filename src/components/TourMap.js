import * as React from "react"
import Map from "react-map-gl"
import styled from "styled-components"

import CustomMarker from "./ui/CustomMarker"

// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX

const TourMap = ({ startCoordinates, startDescription, locations }) => {
  return (
    <Wrapper>
      <Map
        initialViewState={{
          longitude: startCoordinates[0],
          latitude: startCoordinates[1],
          zoom: 10,
        }}
        mapStyle='mapbox://styles/mapbox/light-v9'
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      >
        {locations.map((location, index) => {
          const { coordinates: locCoord, description: locDescn } = location

          if (locCoord && locCoord.length === 2) {
            return (
              <CustomMarker
                className='marker'
                key={`marker-${index}`}
                longitude={locCoord[0]}
                latitude={locCoord[1]}
                description={locDescn}
                color='secondary'
              >
                <div className='marker temporary-marker'>
                  <span></span>
                </div>
              </CustomMarker>
            )
          } else {
            return null
          }
        })}

        {startCoordinates && startCoordinates.length === 2 && (
          <CustomMarker
            longitude={startCoordinates[0]}
            latitude={startCoordinates[1]}
            description={`Day1. ${startDescription}`}
            color='primary'
          />
        )}
      </Map>
    </Wrapper>
  )
}

export default TourMap

const Wrapper = styled.section`
  position: relative;
  height: 65rem;
  margin-top: calc(0px - var(--section-rotate));

  .map__icon {
    color: "red";
    font-size: "1.5rem";
    font-weight: 600;
  }
`
