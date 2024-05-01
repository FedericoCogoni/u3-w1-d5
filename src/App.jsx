import "./assets/css/App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import MyNavbar from "./components/MyNavbar"
import MyFooter from "./components/MyFooter"
import MyHero from "./components/MyHero"
import MyFilmList from "./components/MyFilmList"
import { Container } from "react-bootstrap"
import MySearch from "./components/MySearch"
// import MyEditProfile from "./components/MyEditProfile"

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Container fluid className="custom">
        <MyHero />
        <MySearch />
        <MyFilmList />
        {/* <MyEditProfile /> */}
        <MyFooter />
      </Container>
    </div>
  )
}

export default App
