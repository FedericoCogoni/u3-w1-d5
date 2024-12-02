import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./assets/css/App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import MyNavbar from "./components/MyNavbar"
import MyFooter from "./components/MyFooter"
import MyHero from "./components/MyHero"
import MyFilmList from "./components/MyFilmList"
import MySearch from "./components/MySearch"
import MyEditProfile from "./components/MyEditProfile"

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="padding-container">
                <MyHero />
                <MySearch />
                <MyFilmList />
              </div>
            }
          />
          <Route path="/edit-profile" element={<MyEditProfile />} />
        </Routes>
        <MyFooter />
      </div>
    </Router>
  )
}

export default App
