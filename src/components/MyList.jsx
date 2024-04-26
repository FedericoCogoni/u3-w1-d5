import { Component } from "react"
import { Image } from "react-bootstrap"

// API_KEY = "b11caad1"
const URL = "http://www.omdbapi.com/?apikey=b11caad1&s="

class MyList extends Component {
  state = {
    search: [],
  }

  fetchReservations = film => {
    fetch(URL + film)
      .then(response => {
        if (response.ok) {
          console.log(film)
          console.log("fetch ok")
          return response.json()
        } else {
          throw new Error("generic error")
        }
      })
      .then(data => {
        const search = data.Search
        this.setState({ search })
        console.log(search)
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.fetchReservations(this.props.film)
  }

  render() {
    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-6 mb-4">
        {this.state.search !== 0
          ? this.state.search.slice(0, 6).map(film => {
              console.log(film)
              return (
                <div className="col mb-2 text-center" key={film.imdbID}>
                  <Image className="img-fluid" src={film.Poster} alt="poster" />
                </div>
              )
            })
          : console.log("errore, nessun film trovato")}
      </div>
    )
  }
}
export default MyList
