import React, { Component } from "react"
import { Spinner, Image } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "../assets/css/MyList.css"
import "react-multi-carousel/lib/styles.css"

const URL = "http://www.omdbapi.com/?apikey=b11caad1&s="

class MyList extends Component {
  state = {
    search: [],
    isLoading: false,
  }

  fetchReservations = film => {
    this.setState({ isLoading: true })
    fetch(URL + film)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Network response was not ok.")
        }
      })
      .then(data => {
        this.setState({ search: data.Search, isLoading: false })
      })
      .catch(err => {
        console.error("Error fetching data: ", err)
        this.setState({ isLoading: false })
      })
  }

  componentDidMount() {
    this.fetchReservations(this.props.film)
  }

  render() {
    const { search, isLoading } = this.state

    const responsive = {
      extraLargeDesktop: {
        breakpoint: { max: 4000, min: 2001 },
        items: 6,
      },
      largeDesktop: {
        breakpoint: { max: 2000, min: 1400 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 1399, min: 992 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 991, min: 768 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 767, min: 0 },
        items: 1,
      },
    }

    return (
      <div>
        {isLoading ? (
          <Spinner animation="border" variant="danger" role="status" />
        ) : (
          <Carousel responsive={responsive}>
            {search.map(film => {
              return (
                <Image
                  key={film.imdbID}
                  className="carouselImage"
                  src={film.Poster}
                  alt="film poster"
                />
              )
            })}
          </Carousel>
        )}
      </div>
    )
  }
}

export default MyList

// soluzione senza carosello
// render() {
//   const { search, isLoading } = this.state
//   return (
//     <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-6 mb-4 d-flex justify-content-center align-items-center">
//       {isLoading ? (
//         <div className="col text-center">
//           <Spinner animation="grow" variant="light" role="status">
//             <span className="visually-hidden m-1">Loading...</span>
//           </Spinner>
//         </div>
//       ) : search.length > 0 ? (
//         search.slice(0, 6).map(film => (
//           <div className="col mb-2 mt-2 text-center" key={film.imdbID}>
//             <Image className="img-fluid cover" src={film.Poster} alt="poster" />
//           </div>
//         ))
//       ) : (
//         <div className="col">
//           <p>No films found</p>
//         </div>
//       )}
//     </div>
//   )
// }
