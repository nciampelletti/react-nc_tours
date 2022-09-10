import {
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  ERROR_USER,
} from "../actions"
import {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../utils/localStorage.js"

const user_reducer = (state, action) => {
  if (action.type === LOGIN_USER_SUCCESS) {
    addUserToLocalStorage(action.payload)
    return { ...state, user: action.payload, error: false }
  }

  if (action.type === SIGNUP_USER_SUCCESS) {
    addUserToLocalStorage(action.payload)
    return {
      ...state,
      user: action.payload,
      error: false,
    }
  }

  if (action.type === LOGOUT_USER_SUCCESS) {
    removeUserFromLocalStorage()
    return { ...state, user: null, error: false }
  }

  if (action.type === ERROR_USER) {
    return {
      ...state,
      error: true,
    }
  }

  return state
}

export default user_reducer
