import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {
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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Tours />} />
          <Route path='/tour/:id' element={<Tour />} />
          <Route path='/' element={<Tours />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
