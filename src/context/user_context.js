// import tours_inFile from "../context/tours" //TODO: remove
import axios from "axios"
import React, { useContext, useReducer } from "react"
import reducer from "../reducers/users_reducer"
import { users_url as url } from "../utils/constants"
import {
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  ERROR_USER,
  ME_UPDATE_SUCCESS,
} from "../actions"
import { toast } from "react-toastify"
import {
  // addUserToLocalStorage,
  // removeUserFromLocalStorage,
  getUserFromLocalStorage,
} from "../utils/localStorage"

const initialState = {
  user: getUserFromLocalStorage(),
  error: false,
}

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const login = async ({ email, password }) => {
    try {
      const response = await axios.post(
        `${url}/login`,
        { email, password },
        { withCredentials: true }
      )

      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {
          name: response.data.data.user.name,
          email: response.data.data.user.email,
          token: response.data.token,
        },
      })
    } catch (error) {
      toast.error("Something went wrong. Try different email or password")
      dispatch({ type: ERROR_USER })
    }
  }

  //updateMe
  const updateMe = async ({ email, name }) => {
    try {
      const response = await axios.patch(
        `${url}/updateMe`,
        { email, name },
        { withCredentials: true }
      )

      dispatch({
        type: ME_UPDATE_SUCCESS,
        payload: {
          name: response.data.data.user.name,
          email: response.data.data.user.email,
          token: response.data.token,
        },
      })
    } catch (error) {
      toast.error("Something went wrong. Try different email or name")
      dispatch({ type: ERROR_USER })
    }
  }

  //passwordReset
  const passwordReset = async ({
    passwordCurrent,
    password,
    passwordConfirm,
  }) => {
    try {
      const response = await axios.patch(
        `${url}/updateMyPassword`,
        { passwordCurrent, password, passwordConfirm },
        { withCredentials: true }
      )

      dispatch({
        type: ME_UPDATE_SUCCESS,
        payload: {
          name: response.data.data.user.name,
          email: response.data.data.user.email,
          token: response.data.token,
        },
      })
    } catch (error) {
      toast.error("Something went wrong. Try different passwords")
      dispatch({ type: ERROR_USER })
    }
  }

  const signup = async ({ name, email, password, passwordConfirm }) => {
    try {
      const response = await axios.post(`${url}/signup`, {
        name,
        email,
        password,
        passwordConfirm,
      })

      dispatch({
        type: SIGNUP_USER_SUCCESS,
        payload: {
          name: response.data.data.user.name,
          email: response.data.data.user.email,
          token: response.data.token,
        },
      })
    } catch (error) {
      toast.error("Something went wrong. Try different email")
      dispatch({ type: ERROR_USER })
    }
  }

  const logout = async () => {
    try {
      dispatch({ type: LOGOUT_USER_SUCCESS })
    } catch (error) {
      dispatch({ type: ERROR_USER })
    }
  }

  return (
    <UserContext.Provider
      value={{ ...state, login, logout, signup, updateMe, passwordReset }}
    >
      {children}
    </UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
