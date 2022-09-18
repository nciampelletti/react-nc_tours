import React from "react"
import { Navigate } from "react-router-dom"
//import { withAuthenticationRequired } from "@auth0/auth0-react"
import { useUserContext } from "../context/user_context"

const PrivateRoute = ({ children }) => {
  const { user } = useUserContext()

  if (!user) {
    return <Navigate to='/login' />
  }

  return children
}

export default PrivateRoute
