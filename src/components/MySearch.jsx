import React from "react"
import { Form, FormControl, Spinner } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "../assets/css/MyList.css"
import Image from "react-bootstrap/Image"

class MySearch extends React.Component {
  state = {
    searchQuery: "",
    searchResults: [],
    isLoading: false,
  }

  handleInputChange = event => {
    this.setState({ searchQuery: event.target.value })
  }

  handleSearch = event => {
    event.preventDefault()
    const { searchQuery } = this.state
    if (this.state) {
      this.setState({ isLoading: true })
      fetch(`http://www.omdbapi.com/?apikey=b11caad1&s=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
          console.log()
          this.setState({ searchResults: data.Search || [], isLoading: false })
        })
        .catch(err => {
          console.error("Error fetching data: ", err)
          this.setState({ isLoading: false })
        })
    }
  }

  render() {
    const { searchQuery, searchResults, isLoading } = this.state
    const responsive = {
      extraLargeDesktop: {
        breakpoint: { max: 4000, min: 2001 },
        items: 6,
      },
      largeDesktop: {
        breakpoint: { max: 2000, min: 1400 },
        items: 4,
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
        <Form className="d-flex" onSubmit={this.handleSearch}>
          <FormControl
            type="search"
            placeholder="Titles, people, genres"
            className="me-2 mb-5 mt-3 w-50"
            aria-label="Search"
            value={searchQuery}
            onChange={this.handleInputChange}
          />
        </Form>
        {searchResults.length > 0 && (
          <h2 className="display-6 animation1 fw-bold mb-5">Results:</h2>
        )}
        {isLoading ? (
          <Spinner animation="border" variant="light" />
        ) : (
          searchResults.length > 0 && (
            <Carousel responsive={responsive}>
              {searchResults.map(film => (
                <Image
                  key={film.imdbID}
                  className="d-block carouselImage"
                  src={film.Poster}
                  alt="film poster"
                />
              ))}
            </Carousel>
          )
        )}
      </div>
    )
  }
}

export default MySearch
