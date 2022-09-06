import {
  GET_TOURS_BEGIN,
  GET_TOURS_SUCCESS,
  GET_TOURS_ERROR,
  GET_SINGLE_TOUR_BEGIN,
  GET_SINGLE_TOUR_SUCCESS,
  GET_SINGLE_TOUR_ERROR,
  GET_SINGLE_TOUR_REVIEWS_BEGIN,
  GET_SINGLE_TOUR_REVIEWS_SUCCESS,
  GET_SINGLE_TOUR_REVIEWS_ERROR,
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

  if (action.type === GET_SINGLE_TOUR_SUCCESS) {
    return {
      ...state,
      single_tour: action.payload,
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

  if (action.type === GET_SINGLE_TOUR_REVIEWS_BEGIN) {
    return {
      ...state,
      single_tour_reviews_loading: true,
      single_tour_reviews_error: false,
    }
  }

  if (action.type === GET_SINGLE_TOUR_REVIEWS_SUCCESS) {
    return {
      ...state,
      single_tour_reviews: action.payload,
      single_tour_reviews_loading: false,
    }
  }

  if (action.type === GET_SINGLE_TOUR_REVIEWS_ERROR) {
    return {
      ...state,
      single_tour_reviews_error: true,
      single_tour_reviews_loading: false,
    }
  }

  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default tours_reducer
