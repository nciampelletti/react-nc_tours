import React from "react"
import { Navigate } from "react-router-dom"
//import { withAuthenticationRequired } from "@auth0/auth0-react"
import { useUserContext } from "../context/user_context"

const PrivateRoute = ({ children }) => {
  const { user } = useUserContext()

  if (!user) {
    console.log("user", user)
    return <Navigate to='/' />
  } else {
    console.log("wow", user)
  }

  return children
}

export default PrivateRoute
