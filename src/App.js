import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  Home,
  Tour,
  Signup,
  Error,
  UserProfile,
  SharedLayout,
  UserBilling,
  UserBookings,
  UserReviews,
} from "./pages"
import { Footer, Header } from "./components"
import styled from "styled-components"

function App() {
  return (
    <Wrapper>
      <Router>
        <Header />
        <Routes>
          <Route path='/landing' element={<Home />} />
          <Route
            path='/'
            element={
              // <ProtectedRoute>
              <SharedLayout />
              // </ProtectedRoute>
            }
          >
            <Route index element={<UserProfile />} />
            <Route path='/my-bookings' element={<UserBookings />} />
            <Route path='/my-reviews' element={<UserReviews />} />
            <Route path='/billing' element={<UserBilling />} />
          </Route>
          <Route path='/tours/:id' element={<Tour />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/*' element={<Error />} />
        </Routes>
        <Footer />
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
