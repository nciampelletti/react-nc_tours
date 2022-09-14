import { toast } from "react-toastify"
import {
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  ERROR_USER,
  ME_UPDATE_SUCCESS,
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

  //ME_UPDATE_SUCCESS
  if (action.type === ME_UPDATE_SUCCESS) {
    addUserToLocalStorage(action.payload)
    toast.success("You have done it!")
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
