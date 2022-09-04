import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages"
import AuthWrapper from "./pages/AuthWrapper"
import { Footer, Header } from "./components"
import styled from "styled-components"

function App() {
  return (
    <Wrapper>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
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
  font-family: "Lato", sans-serif;
  color: #777;
  padding: 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
