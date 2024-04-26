import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import MyNavbar from "./components/MyNavbar"
import MyFooter from "./components/MyFooter"
import MyHero from "./components/MyHero"
import MyFilmList from "./components/MyFilmList"
import { Container } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Container>
        <MyHero />
        <MyFilmList />
        <MyFooter />
      </Container>
    </div>
  )
}

export default App
