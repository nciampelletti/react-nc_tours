import {
  GET_TOURS_BEGIN,
  GET_TOURS_SUCCESS,
  GET_TOURS_ERROR,
  GET_SINGLE_TOUR_BEGIN,
  GET_SINGLE_TOUR_SUCCESS,
  GET_SINGLE_TOUR_ERROR,
} from "../actions"

const tours_reducer = (state, action) => {
  if (action.type === GET_TOURS_BEGIN) {
    return { ...state, tours_loading: true }
  }

  if (action.type === GET_TOURS_SUCCESS) {
    return {
      ...state,
      tours: action.payload,
      tours_loading: false,
    }
  }

  if (action.type === GET_TOURS_ERROR) {
    return { ...state, tours_error: true, tours_loading: false }
  }

  if (action.type === GET_SINGLE_TOUR_BEGIN) {
    return {
      ...state,
      single_tour_loading: true,
      single_tour_error: false,
    }
  }

  //   dispatch({ type: GET_SINGLE_TOUR_SUCCESS, payload: { tour, reviews } })
  if (action.type === GET_SINGLE_TOUR_SUCCESS) {
    return {
      ...state,
      single_tour: action.payload.tour,
      single_tour_reviews: action.payload.reviews,
      single_tour_loading: false,
    }
  }

  if (action.type === GET_SINGLE_TOUR_ERROR) {
    return {
      ...state,
      single_tour_error: true,
      single_tour_loading: false,
    }
  }

  return state
}

export default tours_reducer
