import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  Home,
  Tour,
  Signup,
  Error,
  UserProfile,
  UserBilling,
  UserBookings,
  UserReviews,
  Login,
  PrivateRoute,
  CheckoutSuccess,
} from "./pages"

import { Footer, Header, SharedLayout } from "./components"
import styled from "styled-components"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import PasswordReset from "./pages/settings/PasswordReset"

function App() {
  return (
    <Wrapper>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tours/:id' element={<Tour />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/'
            element={
              <PrivateRoute>
                <SharedLayout />
              </PrivateRoute>
            }
          >
            <Route path='/userprofile' element={<UserProfile />} />
            <Route path='/passwordreset' element={<PasswordReset />} />
            <Route path='/bookings' element={<UserBookings />} />
            <Route path='/reviews' element={<UserReviews />} />
            <Route path='/billing' element={<UserBilling />} />
            <Route path='/checkout-success' element={<CheckoutSuccess />} />
          </Route>
          <Route path='/*' element={<Error />} />
        </Routes>
        <Footer />
        <ToastContainer position='top-center' />
      </Router>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  line-height: 1.6;
  font-weight: 300;
  /* font-family: "Lato", sans-serif; */
  color: #777;
  padding: 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
