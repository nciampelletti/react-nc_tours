import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {
  SharedLayout,
  ProtectedRoute,
  AuthLogin,
  AuthSignup,
  Tour,
  Tours,
  UserSettings,
  UserTours,
} from "./pages"

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Tours />} />
          <Route path='/tour/:id' element={<Tour />} />
          <Route path='/' element={<Tours />} />
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Tours />} />
            <Route path='/tour/:id' element={<Tour />} />
          </Route>
          {/* <Route path='/landing' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<Error />} /> */}
        </Routes>
        {/* <ToastContainer position='top-center' /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
