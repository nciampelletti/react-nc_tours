// import tours_inFile from "../context/tours" //TODO: remove
import axios from "axios"
import React, { useContext, useEffect, useReducer } from "react"
import reducer from "../reducers/tours_reducer"
import { tours_url as url } from "../utils/constants"
import {
  GET_TOURS_BEGIN,
  GET_TOURS_SUCCESS,
  GET_TOURS_ERROR,
  GET_SINGLE_TOUR_BEGIN,
  GET_SINGLE_TOUR_SUCCESS,
  GET_SINGLE_TOUR_ERROR,
} from "../actions"

const initialState = {
  tours_loading: false,
  tours_error: false,
  tours: [],
  single_tour_loading: false,
  single_tour_error: false,
  single_tour: {},
  single_tour_reviews: [],
}

const ToursContext = React.createContext()

export const ToursProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fecthTours(`${url}`)
  }, [])

  const fecthTours = async (url) => {
    dispatch({ type: GET_TOURS_BEGIN })

    try {
      const response = await axios.get(url)

      const tours = response.data.data

      dispatch({ type: GET_TOURS_SUCCESS, payload: tours })
    } catch (error) {
      dispatch({ type: GET_TOURS_ERROR })
    }
  }

  const fetchSingleTourWithReviews = async (urlTour, urlReviews) => {
    dispatch({ type: GET_SINGLE_TOUR_BEGIN })

    try {
      const responseTour = await axios.get(urlTour)
      const tour = responseTour.data.data

      const responseReviews = await axios.get(urlReviews)
      const reviews = responseReviews.data.data

      dispatch({ type: GET_SINGLE_TOUR_SUCCESS, payload: { tour, reviews } })
    } catch (error) {
      dispatch({ type: GET_SINGLE_TOUR_ERROR })
    }
  }

  return (
    <ToursContext.Provider value={{ ...state, fetchSingleTourWithReviews }}>
      {children}
    </ToursContext.Provider>
  )
}
// make sure use
export const useToursContext = () => {
  return useContext(ToursContext)
}
